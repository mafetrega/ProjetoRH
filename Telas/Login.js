import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    SafeAreaView,
    TextInput,
    StatusBar,
    Platform,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
//import { Text } from '@rneui/themed'

class Login extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inner}>
                        <Text style={styles.header}>Login</Text>
                        <View style={styles.inputContainer}>
                            <Icon name="envelope" size={20} color="#000" style={styles.icon} />
                            <TextInput style={styles.textInput} placeholder="Email" keyboardType='email-address' />
                        </View>

                        <View style={styles.inputContainer}>
                            <Icon name="lock" size={20} color="#000" style={styles.icon} />
                            <TextInput style={styles.textInput}
                                placeholder="Senha"
                                keyboardType="default"
                                maxLength={8}
                            />
                        </View>

                        <TouchableOpacity style={styles.button}>
                            <Text>Entrar</Text>
                        </TouchableOpacity>

                        <View style={styles.btnPergunta}>
                            <Text>Ainda não tem uma conta?</Text>
                            <TouchableOpacity>
                                <Text style={styles.textBtn}>Solicite seu cadastro aqui!</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    }
};

const styles = StyleSheet.create({
    inner: {
        padding: 24,
        width: '100%',
        alignItems: 'center',
        gap: 12,
        height: 'fit-content',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 36,
        marginBottom: 30,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#000',
        marginBottom: 10,
        height: 60,
        width: '90%',
    },
    icon: {
        width: '8%',
        marginLeft: 20,
        marginRight: 10,
    },
    textInput: {
        flex: 1,
        padding: 10,
        paddingLeft: 0,
        color: '#000',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#DDDDDD',
        padding: 10,
        borderRadius: 50,
        width: 150,
        height: 50,
    },
    btnPergunta: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
    },
    textBtn: {
        color: '#002D62',
    }
});

export default Login;
