import {
    View,
    KeyboardAvoidingView,
    TextInput,
    StyleSheet,
    Text,
    Platform,
    TouchableWithoutFeedback,
    Button,
    Keyboard,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';


const Cadastro = () => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <Text style={styles.header}>Cadastro</Text>
                    <View style={styles.inputContainer}>
                        <Icon name="user" size={20} color="#000" style={styles.icon} />
                        <TextInput style={styles.textInput} placeholder="Nome" keyboardType='default' />
                    </View>

                    <View style={styles.inputContainer}>
                        <Icon name="user" size={20} color="#000" style={styles.icon} />
                        <TextInput style={styles.textInput} placeholder="Sobrenome" keyboardType='default' />
                    </View>

                    <View style={styles.inputContainer}>
                        <Icon name="calendar" size={20} color="#000" style={styles.icon} />
                        <TextInput style={styles.textInput} placeholder="Data de Nascimento" keyboardType='default' />
                    </View>

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
                        <Text>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    inner: {
        padding: 24,
        width: '100%',
        alignItems: 'center',
        gap: 12,
        height: 'fit-content',
    },
    header: {
        fontSize: 36,
        marginBottom: 30,
    },
    btnContainer: {
        backgroundColor: 'white',
        marginTop: 12,
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
        backgroundColor: '#DDDDDD',
        padding: 10,
        borderRadius: 50,
        width: 150,
        height: 50,
    },
});

export default Cadastro;

