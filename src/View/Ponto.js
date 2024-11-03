import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import dados from '../Database/horas.json';
import { FontAwesome } from '@expo/vector-icons';

export const Ponto = () => {
    const [data, setData] = useState(Date.now());
    const [entrada, setEntrada] = useState(null);
    const [saida, setSaida] = useState(null);
    const [horasExtras, setHorasExtras] = useState(0);
    const [horasTrabalhadas, setHorasTrabalhadas] = useState(0);

    const registrarEntrada = () => {
        const agora = new Date();
        setEntrada(agora);
    };

    const registrarSaida = () => {
        const agora = new Date();
        setSaida(agora);
        calcularHoras(entrada, agora);
    };

    const calcularHoras = (entrada, saida) => {
        if (entrada && saida) {
            const horasTrabalhadas = (saida - entrada) / (1000 * 60 * 60);
            const horasNormais = 8;
            const extras = horasTrabalhadas > horasNormais ? horasTrabalhadas - horasNormais : 0;
            setHorasTrabalhadas(horasTrabalhadas);
            setHorasExtras(extras);
        }
    };

    const formatarHoras = (horasDecimais) => {
        const horas = Math.floor(horasDecimais);
        const minutosDecimais = (horasDecimais - horas) * 60;
        const minutos = Math.floor(minutosDecimais);
        const segundos = Math.floor((minutosDecimais - minutos) * 60);
        return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
    };

    const addData = async () => {
        const novaData = new Date().toLocaleDateString();
        const novaEntrada = entrada ? entrada.toLocaleTimeString() : '';
        const novaSaida = saida ? saida.toLocaleTimeString() : '';

        const novoRegistro = [novaData, novaEntrada, novaSaida];
        const updatedTableData = [...tableData, novoRegistro];
        setTableData(updatedTableData);

        try {
            await AsyncStorage.setItem('tableData', JSON.stringify(updatedTableData));
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível salvar os dados.');
        }
    };

    useEffect(() => {
        const loadData = async () => {
            try {
                const storedData = await AsyncStorage.getItem('tableData');
                if (storedData) {
                    setTableData(JSON.parse(storedData));
                }
            } catch (error) {
                Alert.alert('Erro', 'Não foi possível carregar os dados.');
            }
        };

        loadData();
    }, []);

    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        // Convertendo os dados JSON para o formato desejado
        const formattedData = dados.map(item => [item.data, item.entrada, item.saida]);
        setTableData(formattedData);
    }, []);

    const tableHead = ['Data', 'Entrada', 'Saida'];

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.button} onPress={registrarEntrada}>
                        <FontAwesome name="plus" size={20} color="black" />
                        <Text>Entrada</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={registrarSaida}>
                        <FontAwesome name="plus" size={20} color="black" />
                        <Text>Saída</Text>
                    </TouchableOpacity>
                </View>

                {entrada && <Text style={styles.text}>Entrada: {entrada.toLocaleTimeString()}</Text>}
                {saida && <Text style={styles.text}>Saída: {saida.toLocaleTimeString()}</Text>}

                <TouchableOpacity style={styles.buttonAdd} onPress={addData}>
                    <Text style={{ fontSize: 15 }}>Adicionar</Text>
                </TouchableOpacity>
            </View>

            <View style={{ padding: 20 }}>
                <Text style={styles.title}>Horas de entrada e saída</Text>
                <Table borderStyle={styles.tableBorder}>
                    <Row data={tableHead} style={styles.rowHead} textStyle={styles.textRowHead} />
                    {
                        tableData.map((rowData, index) => (
                            <Row key={index} data={rowData} style={styles.row} textStyle={styles.textRow} />
                        ))
                    }
                </Table>
            </View>
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },
    tableBorder: {
        borderWidth: 1,
        borderColor: '#a9a9a9'
    },
    rowHead: {
        height: 40,
        backgroundColor: '#a9a9a950'
    },
    textRowHead: {
        margin: 6,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    row: {
        height: 40
    },
    textRow: {
        margin: 6,
        textAlign: 'center'
    },
    buttons: {
        gap: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 20,
    },
    button: {
        padding: 10,
        backgroundColor: '#ccc',
        borderRadius: '50%',
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        marginHorizontal: 15,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonAdd: {
        backgroundColor: '#ccc',
        borderRadius: '50%',
        padding: 10,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
});

export default Ponto;