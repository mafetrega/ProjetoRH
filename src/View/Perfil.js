// src/View/Perfil.js
import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, SafeAreaView, ScrollView } from 'react-native';
import funcionarios from '../Database/funcionarios.json';

const Perfil = () => {
    const funcionario = funcionarios.find(f => f.id === 1); // Exemplo: pegar o funcionário com id 1

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.containerDetalhes}>
                    <Image
                        style={styles.profileImage}
                        source={require(`./imagens/2024/Janeiro.jpg`)}
                    />
                    <Text style={styles.name}>{funcionario.nome}</Text>
                    <Text style={styles.email}>{funcionario.email}</Text>
                </View>

                <View style={styles.inputDadosContainer}>
                    <Text style={styles.title}>Dados Pessoais:</Text>
                    <Text style={styles.textInput}>Nome:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Digite seu nome'
                        keyboardType='default'
                        value={funcionario.nome}
                    />
                    <Text style={styles.textInput}>Email:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Digite seu email'
                        keyboardType='email-address'
                        value={funcionario.email}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    scrollView: {
        width: '100%',
        paddingHorizontal: 30,
    },
    containerDetalhes: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 50,
    },
    inputDadosContainer: {
        borderBottomWidth: 1,
        padding: 30,
        borderColor: '#d8c8c8',
        gap: 15,
    },
    textInput: {
        fontSize: 15,
        fontWeight: 'bold',
        borderRadius: 10,
    },
    input: {
        borderWidth: 1,
        padding: 20,
        borderRadius: 50,
        borderColor: '#c7bfbf',
        marginBottom: 15,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 100,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    email: {
        fontSize: 18,
        color: 'gray',
        marginBottom: 20,
    },
});

export default Perfil;