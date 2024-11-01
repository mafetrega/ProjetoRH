import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, SafeAreaView, Alert, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import funcionarios from '../Database/funcionarios.json';
import { AsyncStorage } from 'react-native';

const Ferias = () => {

    const funcionario = funcionarios.find(f => f.id === 1); // Exemplo: pegar o funcionário com id 1

    const [nome, setNome] = useState('');
    const [dataInicio, setDataInicio] = useState(new Date());
    const [dataFim, setDataFim] = useState(new Date());
    const [dias, setDias] = useState(0);
    const [solicitacoes, setSolicitacoes] = useState([]);

    const adicionarSolicitacao = async () => {
        const novaSolicitacao = { nome, dataInicio, dataFim, dias };
        setSolicitacoes([...solicitacoes, novaSolicitacao]);
    }

    const calculaDias = () => {
        const qtd_dias = (dataFim - dataInicio) / (1000 * 60 * 60 * 24) + 1;

        if (qtd_dias < 0) {
            Alert.alert('Data de início não pode ser maior que a data de fim.');
            return 0;
        } else {
            return qtd_dias.toFixed(0);
        }
    };

    useEffect(() => {
        setDias(calculaDias());
    }, [dataInicio, dataFim]);

    const renderHeader = () => (
        <View style={[styles.container]}>
            <Text style={styles.title}>Solicitação de Férias</Text>

            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
            />

            <Text style={styles.textDt}>Data Início: {dataInicio.toLocaleDateString()}</Text>
            <View style={[styles.dtPicker]}>
                <DateTimePicker
                    testID="dataInicio"
                    value={dataInicio}
                    mode="date"
                    display='compact'
                    locale='pt-BR'
                    onChange={(event, selectedDate) => setDataInicio(selectedDate || dataInicio)}
                />
            </View>

            <Text style={styles.textDt}>Data Fim: {dataFim.toLocaleDateString()}</Text>
            <View style={[styles.dtPicker]}>
                <DateTimePicker
                    testID="dataFim"
                    value={dataFim}
                    mode="date"
                    display='compact'
                    locale='pt-BR'
                    onChange={(event, selectedDate) => setDataFim(selectedDate || dataFim)}
                />
            </View>
            <Text style={styles.textDt}>Dias de Férias: {dias}</Text>

            <TouchableOpacity style={styles.button} onPress={() => { adicionarSolicitacao(); }}>
                <Text style={styles.buttonText}>Adicionar Solicitação</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                ListHeaderComponent={renderHeader}
                data={solicitacoes}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.nome}</Text>
                        <Text>{item.dataInicio.toLocaleDateString()} - {item.dataFim.toLocaleDateString()}</Text>
                        <Text>{item.dias} dias</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        gap: 20,
    },
    title: {
        fontSize: 24,
    },
    input: {
        padding: 15,
        borderRadius: 50,
        borderColor: 'gray',
        borderWidth: 1,
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    dtPicker: {
        width: '100%',
        alignItems: 'center',
    },
    textDt: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    button: {
        padding: 10,
        backgroundColor: '#ccc',
        borderRadius: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Ferias;