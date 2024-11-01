import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import dados from '../Database/horas.json';
import { ScrollView } from 'react-native-gesture-handler';

import { FontAwesome } from '@expo/vector-icons';

export const Horas = () => {
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
                    <TouchableOpacity style={styles.button} >
                        <Text >Horas Extras</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text>Banco de Horas</Text>
                    </TouchableOpacity>
                </View>


                <TouchableOpacity style={styles.buttonAdd}>
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

export default Horas;