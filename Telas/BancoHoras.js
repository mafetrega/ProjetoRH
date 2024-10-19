import React, { useState } from 'react';
import { Button, SafeAreaView, Text, StyleSheet, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ScrollView } from 'react-native-gesture-handler';
import { FlatList } from 'react-native';
import { Modal, TouchableOpacity } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export const BancoHoras = () => {
    const [data, setData] = useState(new Date());
    const [horaInicio, setHoraInicio] = useState(new Date());
    const [horaSaida, setHoraSaida] = useState(new Date());
    const [saldos, setSaldos] = useState([]);
    const [saldoSoma, setSaldoSoma] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);

    const onChangeData = (event, selectedDate) => {
        const currentDate = selectedDate || data;
        setData(currentDate);
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
        saldo -= 8;

        // Ensure saldo is not negative
        saldo = Math.max(saldo, 0);

        return saldo;
    };

    const adicionarSaldoFlatList = () => {
        const novoSaldo = calcularSaldo();
        if (novoSaldo > 0) {
            setSaldos([...saldos, novoSaldo]);
        } else {
            alert('Saldo inválido. Verifique os horários de entrada e saída.');
        }
    };

    const somarSaldos = () => {
        const soma = saldos.reduce((acc, item) => acc + item, 0);
        setSaldoSoma(soma);
    };

    const calcularValor = () => {
        const valor = saldoSoma * 50; // R$ 50,00 por hora
        return valor.toFixed(2);
    };

    const limparSaldos = () => {
        setSaldos([]);
        setSaldoSoma(0);
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
                        <TouchableOpacity style={styles.btn} onPress={adicionarSaldoFlatList}>
                            <Text>Adicionar Saldo</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btn} onPress={limparSaldos}>
                            <Text>Limpar Saldos</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btn} onPress={() => { somarSaldos(); toggleModal(); }} >
                            <Text>Somar Saldos</Text>
                        </TouchableOpacity >
                    </View>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={toggleModal}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <Text style={styles.titleResultados}>Resultados:</Text>
                                <Text style={styles.textResultados}>Data: {data.toLocaleDateString()}</Text>
                                <Text style={styles.textResultados}>Valor a Receber: R$ {calcularValor()}</Text>
                                <Text style={styles.textResultados}>Saldo Total: {saldoSoma}</Text>
                                <TouchableOpacity
                                    style={styles.buttonClose}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <FontAwesome6 name="xmark" size={20} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>

                    <Text style={styles.titleResultados}>Horas adicionadas:</Text>
                    <FlatList
                        style={styles.FlatList}
                        data={saldos}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.ItemFlatList}>
                                <Text style={styles.textResultados}>{item}</Text>
                            </View>
                        )}
                    />
                </View>
            </ScrollView>
        </SafeAreaView >

    );
};

export default BancoHoras;

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
        borderRadius: 5,
    },
});
