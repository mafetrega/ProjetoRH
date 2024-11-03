import React, { useState } from 'react';
import { Button, SafeAreaView, Text, StyleSheet, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ScrollView } from 'react-native-gesture-handler';
import { FlatList } from 'react-native';
import { Modal, TouchableOpacity } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export const HorasExtras = () => {
    const [data, setData] = useState(new Date());
    const [horaInicio, setHoraInicio] = useState(new Date());
    const [horaSaida, setHoraSaida] = useState(new Date());
    const [saldos, setSaldos] = useState([]);
    const [horas, setHoras] = useState([]);
    const [saldoSoma, setSaldoSoma] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);

    const onChangeData = (event, selectedDate) => {
        const currentDate = selectedDate || data;
        const today = new Date();
        if (currentDate > today) {
            alert('A data não pode ser maior que hoje.');
            setData(today);
        } else {
            setData(currentDate);
        }
    };

    const onChangeHoraInicio = (event, selectedTime) => {
        const currentTime = selectedTime || horaInicio;
        setHoraInicio(currentTime);
    };

    const onChangeHoraSaida = (event, selectedTime) => {
        const currentTime = selectedTime || horaSaida;
        setHoraSaida(currentTime);
    };

    const validarHorario = (horaInicio, horaSaida) => {
        const limiteHoraSaida = new Date(horaSaida);
        limiteHoraSaida.setHours(20, 0, 0, 0); // Set the limit to 20:00

        const limiteHoraInicio = new Date(horaInicio);
        limiteHoraInicio.setHours(6, 0, 0, 0); // Set the limit to 06:00

        let adjustedHoraSaida = horaSaida;
        if (horaSaida > limiteHoraSaida) {
            adjustedHoraSaida = limiteHoraSaida;
            alert('O horário de saída não pode passar das 20:00.');
        }

        let adjustedHoraInicio = horaInicio;
        if (horaInicio < limiteHoraInicio) {
            adjustedHoraInicio = limiteHoraInicio;
            alert('O horário de entrada não pode ser menor que 06:00.');
        }

        return { adjustedHoraInicio, adjustedHoraSaida };
    };

    const calcularSaldo = () => {
        const { adjustedHoraInicio, adjustedHoraSaida } = validarHorario(horaInicio, horaSaida);

        let saldo;
        if (adjustedHoraInicio < adjustedHoraSaida) {
            saldo = (adjustedHoraSaida - adjustedHoraInicio) / (1000 * 60 * 60); // Convert milliseconds to hours
        } else {
            saldo = 0; // If the start time is after the end time on the same day, set saldo to 0
        }

        // Subtract the fixed shift duration of 8 hours
        saldo -= 9;

        // Ensure saldo is not negative
        saldo = Math.max(saldo, 0);

        return saldo;
    };

    const adicionarSaldoFlatList = () => {
        const saldo = calcularSaldo();
        let novoSaldo;

        if (saldo < 1) {
            const minutos = Math.round(saldo * 60);
            novoSaldo = `${minutos} min`;
        } else {
            const horas = Math.floor(saldo);
            const minutos = Math.round((saldo - horas) * 60);
            novoSaldo = `${horas} horas e ${minutos} min`;
        }

        const saldoComData = { data: data.toLocaleDateString(), saldo: novoSaldo };
        setSaldos([...saldos, saldoComData]);

    };

    const adicionarSomaSaldo = () => {
        const hora = calcularSaldo();
        setHoras([...horas, hora]);
        const soma = horas.reduce((acc, curr) => acc + curr, 0) + hora;
        setSaldoSoma(soma);
    }

    const somarSaldos = () => {
        saldo = saldoSoma;
        if (saldo < 1) {
            const minutos = Math.round(saldo * 60);
            novoSaldo = `${minutos} min`;
            return novoSaldo;
        } else {
            const horas = Math.floor(saldo);
            const minutos = Math.round((saldo - horas) * 60);
            novoSaldo = `${horas} horas e ${minutos} min`;
            return novoSaldo;
        }
    };

    const calcularValor = () => {
        const valor = saldoSoma * 50; // R$ 50,00 por hora
        return valor.toFixed(2);
    };

    const limparSaldos = () => {
        setSaldos([]);
        setSaldoSoma(0);
        setHoras([]);
        setData(new Date());
        setHoraInicio(new Date());
        setHoraSaida(new Date());
    };

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={[styles.center, styles.dtPickerContainer]}>
                    <Text style={styles.textDt}>Selecione a data:</Text>
                    <View style={[styles.dtPicker]}>
                        <DateTimePicker
                            testID="data"
                            value={data}
                            mode="date"
                            display='inline'
                            locale='pt-BR'
                            onChange={onChangeData}
                        />
                    </View>

                    <Text style={styles.textDt}>Selecione a hora de início:</Text>
                    <View style={[styles.dtPicker]}>
                        <DateTimePicker
                            testID="horaInicio"
                            value={horaInicio}
                            mode="time"
                            display='clock'
                            is24Hour={true}
                            onChange={onChangeHoraInicio}
                        />
                    </View>

                    <Text style={styles.textDt}>Selecione a hora de saída:</Text>
                    <View style={[styles.dtPicker]}>
                        <DateTimePicker
                            testID="horaSaida"
                            value={horaSaida}
                            mode="time"
                            is24Hour={true}
                            onChange={onChangeHoraSaida} />

                    </View>

                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.btn} onPress={() => { adicionarSaldoFlatList(); adicionarSomaSaldo(); }}>
                            <Text>Adicionar Saldo</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btn} onPress={limparSaldos}>
                            <Text>Limpar Saldos</Text>
                        </TouchableOpacity>

                    </View>

                    <Text style={styles.titleResultados}>Resultados:</Text>
                    <Text style={styles.textResultados}>R$ 50.00 por Hora</Text>
                    <Text style={styles.textResultados}>Saldo Total: {somarSaldos()}</Text>
                    <Text style={styles.textResultados}>Valor a Receber: R$ {calcularValor()}</Text>

                    <Text style={styles.titleResultados}>Horas adicionadas:</Text>
                    <FlatList
                        style={styles.FlatList}
                        data={saldos}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.ItemFlatList}>
                                <Text style={styles.textResultados}>{item.data} - {item.saldo}</Text>
                            </View>
                        )}
                    />
                </View>
            </ScrollView>
        </SafeAreaView >

    );
};

export default HorasExtras;

const styles = StyleSheet.create({
    buttonClose: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        padding: 10,
        borderRadius: 50,
        position: 'absolute',
        zIndex: 999,
        right: 10,
        top: 5,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalContent: {
        backgroundColor: 'white',
        padding: 50,
        borderRadius: 15,
        elevation: 5,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        padding: 30,
    },
    dtPickerContainer: {
        width: '100%',
        gap: 15,
        flex: 1,
        alignItems: 'flex-start',
        padding: 30,

    },
    dtPicker: {
        width: '100%',
        alignItems: 'center',
    },
    resultados: {
        gap: 10,
    },
    textDt: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    titleResultados: {
        fontSize: 25,
        marginVertical: 10,
        fontWeight: 'bold',
    },
    textResultados: {
        fontSize: 18,
        marginVertical: 5,
    },
    FlatList: {
        width: '100%',
    },
    ItemFlatList: {
        width: '100%',
        padding: 20,
        marginVertical: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    buttons: {
        gap: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginVertical: 20,
    },
    btn: {
        padding: 10,
        backgroundColor: '#ccc',
        borderRadius: 50,
        width: '48%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


const dados = [
    { "data": "2024-02-01", "entrada": "08:00:00", "saida_almoco": "12:00:00", "volta_almoco": "13:00:00", "saida": "18:00:00" },
    { "data": "2024-02-02", "entrada": "08:05:00", "saida_almoco": "12:10:00", "volta_almoco": "13:10:00", "saida": "18:05:00" },
    { "data": "2024-02-05", "entrada": "08:00:00", "saida_almoco": "12:00:00", "volta_almoco": "13:00:00", "saida": "18:00:00" },
    { "data": "2024-02-06", "entrada": "08:10:00", "saida_almoco": "12:15:00", "volta_almoco": "13:15:00", "saida": "18:10:00" },
    { "data": "2024-02-07", "entrada": "08:00:00", "saida_almoco": "12:05:00", "volta_almoco": "13:05:00", "saida": "18:00:00" },
    { "data": "2024-02-08", "entrada": "08:05:00", "saida_almoco": "12:10:00", "volta_almoco": "13:10:00", "saida": "18:05:00" },
    { "data": "2024-02-09", "entrada": "08:00:00", "saida_almoco": "12:00:00", "volta_almoco": "13:00:00", "saida": "18:00:00" },
    { "data": "2024-02-12", "entrada": "08:10:00", "saida_almoco": "12:15:00", "volta_almoco": "13:15:00", "saida": "18:10:00" },
    { "data": "2024-02-13", "entrada": "08:00:00", "saida_almoco": "12:05:00", "volta_almoco": "13:05:00", "saida": "18:00:00" },
    { "data": "2024-02-14", "entrada": "08:05:00", "saida_almoco": "12:10:00", "volta_almoco": "13:10:00", "saida": "18:05:00" },
    { "data": "2024-02-15", "entrada": "08:00:00", "saida_almoco": "12:00:00", "volta_almoco": "13:00:00", "saida": "18:00:00" },
    { "data": "2024-02-16", "entrada": "08:10:00", "saida_almoco": "12:15:00", "volta_almoco": "13:15:00", "saida": "18:10:00" },
    { "data": "2024-02-19", "entrada": "08:00:00", "saida_almoco": "12:05:00", "volta_almoco": "13:05:00", "saida": "18:00:00" },
    { "data": "2024-02-20", "entrada": "08:05:00", "saida_almoco": "12:10:00", "volta_almoco": "13:10:00", "saida": "18:05:00" },
    { "data": "2024-02-21", "entrada": "08:00:00", "saida_almoco": "12:00:00", "volta_almoco": "13:00:00", "saida": "18:00:00" },
    { "data": "2024-02-22", "entrada": "08:10:00", "saida_almoco": "12:15:00", "volta_almoco": "13:15:00", "saida": "18:10:00" },
    { "data": "2024-02-23", "entrada": "08:00:00", "saida_almoco": "12:05:00", "volta_almoco": "13:05:00", "saida": "18:00:00" },
    { "data": "2024-02-26", "entrada": "08:05:00", "saida_almoco": "12:10:00", "volta_almoco": "13:10:00", "saida": "18:05:00" },
    { "data": "2024-02-27", "entrada": "08:00:00", "saida_almoco": "12:00:00", "volta_almoco": "13:00:00", "saida": "18:00:00" },
    { "data": "2024-02-28", "entrada": "08:10:00", "saida_almoco": "12:15:00", "volta_almoco": "13:15:00", "saida": "18:10:00" },
    { "data": "2024-02-29", "entrada": "08:00:00", "saida_almoco": "12:05:00", "volta_almoco": "13:05:00", "saida": "18:00:00" },
    { "data": "2024-03-01", "entrada": "08:05:00", "saida_almoco": "12:10:00", "volta_almoco": "13:10:00", "saida": "18:05:00" },
    { "data": "2024-03-04", "entrada": "08:00:00", "saida_almoco": "12:00:00", "volta_almoco": "13:00:00", "saida": "18:00:00" },
    { "data": "2024-03-05", "entrada": "08:10:00", "saida_almoco": "12:15:00", "volta_almoco": "13:15:00", "saida": "18:10:00" },
    { "data": "2024-03-06", "entrada": "08:00:00", "saida_almoco": "12:05:00", "volta_almoco": "13:05:00", "saida": "18:00:00" },
    { "data": "2024-03-07", "entrada": "08:05:00", "saida_almoco": "12:10:00", "volta_almoco": "13:10:00", "saida": "18:05:00" },
    { "data": "2024-03-08", "entrada": "08:00:00", "saida_almoco": "12:00:00", "volta_almoco": "13:00:00", "saida": "18:00:00" },
    { "data": "2024-03-11", "entrada": "08:10:00", "saida_almoco": "12:15:00", "volta_almoco": "13:15:00", "saida": "18:10:00" },
    { "data": "2024-03-12", "entrada": "08:00:00", "saida_almoco": "12:05:00", "volta_almoco": "13:05:00", "saida": "18:00:00" },
    { "data": "2024-03-13", "entrada": "08:05:00", "saida_almoco": "12:10:00", "volta_almoco": "13:10:00", "saida": "19:05:00" },
    { "data": "2024-03-14", "entrada": "08:00:00", "saida_almoco": "12:00:00", "volta_almoco": "13:00:00", "saida": "19:00:00" },
    { "data": "2024-03-15", "entrada": "08:10:00", "saida_almoco": "12:15:00", "volta_almoco": "13:15:00", "saida": "19:10:00" },
    { "data": "2024-03-18", "entrada": "08:00:00", "saida_almoco": "12:05:00", "volta_almoco": "13:05:00", "saida": "19:00:00" },
    { "data": "2024-03-19", "entrada": "08:05:00", "saida_almoco": "12:10:00", "volta_almoco": "13:10:00", "saida": "19:05:00" },
    { "data": "2024-03-20", "entrada": "08:00:00", "saida_almoco": "12:00:00", "volta_almoco": "13:00:00", "saida": "19:00:00" },
    { "data": "2024-03-21", "entrada": "08:10:00", "saida_almoco": "12:15:00", "volta_almoco": "13:15:00", "saida": "19:10:00" },
    { "data": "2024-03-22", "entrada": "08:00:00", "saida_almoco": "12:05:00", "volta_almoco": "13:05:00", "saida": "19:00:00" },
    { "data": "2024-03-25", "entrada": "08:05:00", "saida_almoco": "12:10:00", "volta_almoco": "13:10:00", "saida": "19:05:00" },
    { "data": "2024-03-26", "entrada": "08:00:00", "saida_almoco": "12:00:00", "volta_almoco": "13:00:00", "saida": "19:00:00" },
    { "data": "2024-03-27", "entrada": "08:10:00", "saida_almoco": "12:15:00", "volta_almoco": "13:15:00", "saida": "19:10:00" },
    { "data": "2024-03-28", "entrada": "08:00:00", "saida_almoco": "12:05:00", "volta_almoco": "13:05:00", "saida": "19:00:00" },
    { "data": "2024-03-29", "entrada": "08:05:00", "saida_almoco": "12:10:00", "volta_almoco": "13:10:00", "saida": "19:05:00" },
    { "data": "2024-04-01", "entrada": "08:00:00", "saida_almoco": "12:00:00", "volta_almoco": "13:00:00", "saida": "19:00:00" },
    { "data": "2024-04-02", "entrada": "08:10:00", "saida_almoco": "12:15:00", "volta_almoco": "13:15:00", "saida": "19:10:00" },
    { "data": "2024-04-03", "entrada": "08:00:00", "saida_almoco": "12:05:00", "volta_almoco": "13:05:00", "saida": "19:00:00" },
    { "data": "2024-04-04", "entrada": "08:05:00", "saida_almoco": "12:10:00", "volta_almoco": "13:10:00", "saida": "19:05:00" },
    { "data": "2024-04-05", "entrada": "08:00:00", "saida_almoco": "12:00:00", "volta_almoco": "13:00:00", "saida": "19:00:00" }
];