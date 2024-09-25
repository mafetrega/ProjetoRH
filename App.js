// Importando as bibliotecas necessárias
import React, { useState } from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    StatusBar,
    UIManager,
    Platform,
    Alert,
    Modal,
} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';


// Importando as telas
import Login from './Telas/Login';
import Cadastro from './Telas/Cadastro';
import PdfTeste from './Telas/pdf_teste';

// Importando os ícones
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import { SelectList } from 'react-native-dropdown-select-list'


if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}


// Função para criar a tela inicial
function HomeScreen({ navigation }) {
    const [expanded, setExpanded] = useState(false);
    const [fontsLoaded] = useFonts({ Montserrat_400Regular, Montserrat_700Bold });


    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <StatusBar animated={true} barStyle="default" />

            <SafeAreaView style={styles.safeArea}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.title}>Bem vindo!</Text>
                    <View style={styles.opcoes}>
                        {/*Holerites*/}
                        <TouchableOpacity style={styles.op} onPress={() => navigation.navigate('Holerites')}>
                            <AntDesign style={styles.icon} name="calculator" size={40} color="#002D62" />
                            <Text style={styles.textOp}> Holerites</Text>
                        </TouchableOpacity>

                        {/*Descontos*/}
                        <TouchableOpacity style={styles.op} onPress={() => navigation.navigate('PdfTeste')}>
                            <AntDesign style={styles.icon} name="minussquareo" size={40} color="#002D62" />
                            <Text style={styles.textOp}>Descontos</Text>
                        </TouchableOpacity>

                        {/*Banco de Horas*/}
                        <TouchableOpacity style={styles.op}>
                            <FontAwesome6 style={styles.icon} name="hourglass" size={40} color="#002D62" />
                            <Text style={styles.textOp}> Banco de Horas </Text>
                        </TouchableOpacity>

                        {/*Férias*/}
                        <TouchableOpacity style={styles.op}>
                            <FontAwesome style={styles.icon} name="calendar-check-o" size={40} color="#002D62" />
                            <Text style={styles.textOp}>Férias</Text>
                        </TouchableOpacity>

                        {/*Solicitações*/}
                        <TouchableOpacity style={styles.op}>
                            <Ionicons style={styles.icon} name="document-outline" size={40} color="#002D62" />
                            <Text style={styles.textOp}>Solicitações</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

// Função para criar a tela de login 
function LoginScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Login />
            <View style={styles.TextCadastro}>
                <Text>Ainda não tem conta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
                    <Text style={styles.btnCadastro}> Faça seu cadastro aqui!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

// Função para criar a tela de Cadastro
function CadastroScreen({ navigation }) {
    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Cadastro />
            <View style={styles.TextCadastro}>
                <Text>Já tem conta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.btnCadastro}> Faça seu login aqui!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

// Função para criar os ícones do menu lateral e alterar o style, com parametros para definir a tela e o ícone
function options(navigation, icon, tela) {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate(tela)} style={{ marginRight: 15 }}>
                <FontAwesome5 name={icon} size={25} color="#002D62" />
            </TouchableOpacity>
        ),
        headerTintColor: '#002D62',
        drawerActiveTintColor: '#002D62',
        drawerActiveBackgroundColor: 'lightgray',
    };
}

function HoleriteScreen({ navigation }) {
    const [expanded, setExpanded] = useState(false);
    const [fontsLoaded] = useFonts({ Montserrat_400Regular, Montserrat_700Bold });


    const [selectedAno, setSelectedAno] = React.useState("");
    const [selectedMes, setSelectedMes] = React.useState("");

    const dataAno = [
        { key: '2024', value: '2024' },
        { key: '2023', value: '2023' },
        { key: '2022', value: '2022' },
        { key: '2021', value: '2021' },
        { key: '2020', value: '2020' },
        { key: '2019', value: '2019' },
        { key: '2018', value: '2018' },
        { key: '2017', value: '2017' },
        { key: '2016', value: '2016' },
        { key: '2015', value: '2015' },
        { key: '2014', value: '2014' },
        { key: '2013', value: '2013' },
        { key: '2012', value: '2012' },
        { key: '2011', value: '2011' },
        { key: '2010', value: '2010' },
        { key: '2009', value: '2009' },
        { key: '2008', value: '2008' },
        { key: '2007', value: '2007' },
        { key: '2006', value: '2006' },
        { key: '2005', value: '2005' },
        { key: '2004', value: '2004' },
    ];

    const dataMes = [
        { key: 'Janeiro', value: 'Janeiro' },
        { key: 'Fevereiro', value: 'Fevereiro' },
        { key: 'Março', value: 'Março' },
        { key: 'Abril', value: 'Abril' },
        { key: 'Maio', value: 'Maio' },
        { key: 'Junho', value: 'Junho' },
        { key: 'Julho', value: 'Julho' },
        { key: 'Agosto', value: 'Agosto' },
        { key: 'Setembro', value: 'Setembro' },
        { key: 'Outubro', value: 'Outubro' },
        { key: 'Novembro', value: 'Novembro' },
        { key: 'Dezembro', value: 'Dezembro' },
    ];

    const [modalVisible, setModalVisible] = useState(false);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={[styles.container]}>
            <StatusBar animated={true} barStyle="default" />

            <SelectList
                setSelected={setSelectedAno}
                data={dataAno}
                boxStyles={styles.selectList}
                searchPlaceholder='Selecione um ano'
                placeholder='Selecione um ano'
            />

            <SelectList
                onSelect={() => setModalVisible(true)}
                setSelected={setSelectedMes}
                data={dataMes}
                boxStyles={styles.selectList}
                searchPlaceholder='Selecione um ano'
                placeholder='Selecione um ano'
            />

            <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                <Text style={{ marginTop: 10, color: 'gray' }}>{selectedMes} de {selectedAno}</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(!modalVisible)}>
                <Text>Pesquisar</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{selectedMes} de {selectedAno}</Text>

                        <TouchableOpacity
                            style={styles.buttonClose}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <FontAwesome6 name="xmark" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal >


        </View >
    );
}

function PDFTesteScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <PdfTeste />
        </View>
    );
}

// Criando o menu lateral
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function Root() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Holerites" component={HoleriteScreen} />
        </Stack.Navigator>
    );
}

// Função principal, que cria o menu lateral e as telas
export default function App({ navigation }) {

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">

                <Drawer.Screen name="Holerites" component={HoleriteScreen}
                    options={({ navigation }) => options(navigation, "home", "Home")} />

                <Drawer.Screen name="Home" component={HomeScreen}
                    options={({ navigation }) => options(navigation, "user-circle", "Login")} />

                <Drawer.Screen name="Login" component={LoginScreen}
                    options={({ navigation }) => options(navigation, "home", "Home")} />

                <Drawer.Screen name="Cadastro" component={CadastroScreen}
                    options={({ navigation }) => options(navigation, "home", "Home")} />

                <Drawer.Screen name="PdfTeste" component={PDFTesteScreen}
                    options={({ navigation }) => options(navigation, "home", "Home")} />

            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    icon: {
        marginRight: 15,

    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextCadastro: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 30,

    },
    btnCadastro: {
        color: "#036ffc",
    },
    container: {
        flex: 1,
        backgroundColor: '#1010',
    },
    opcoes: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30,
        width: '100%',
        height: '100%',
        padding: 30,
    },
    opcoesHolerites: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        width: '100%',
        height: '100%',
        padding: 30,
    },

    op: {
        borderWidth: 4,
        borderColor: '#002D62',
        width: 150,
        height: 150,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#35353510',
    },

    opHolerite: {
        borderWidth: 4,
        borderColor: '#002D62',
        width: '100%',
        height: 90,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#35353510',
    },

    textOp: {
        textAlign: 'center',
        color: '#002D62',
        fontSize: 20,
        fontFamily: 'Montserrat_400Regular',
    },

    textOpHolerite: {
        textAlign: 'center',
        color: '#002D62',
        fontSize: 15,
        fontFamily: 'Montserrat_400Regular',
    },
    btnNav: {
        position: 'fixed',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 1,
        backgroundColor: '#002D62',
        top: 60,
        left: 20,
        zIndex: 999,
    },
    btnNavFechar: {
        position: 'fixed',
        justifyContent: 'center',
        alignItems: 'flex-end',
        zIndex: 999,
    },
    nav: {
        position: 'fixed',
        width: '100%',
        height: '50%',
        backgroundColor: '#fff',
        zIndex: 9999,
    },
    title: {
        textAlign: 'center',
        color: '#002D62',
        fontSize: 30,
        paddingVertical: 15,
        fontFamily: 'Montserrat_700Bold',
    },
    safeArea: {
        marginBottom: 40,
    },
    navItem: {
        justifyContent: 'center',
        padding: 20,
    },
    navItemText: {
        color: '#002D62',
        fontSize: 20,
    },
    icon: {
        marginBottom: 10,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 35,
        width: '85%',
        height: '70%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        alignSelf: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        borderRadius: 50,
        width: 150,
        height: 50,
    },

    buttonClose: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        padding: 10,
        borderRadius: 50,
        position: 'absolute',
        zIndex: 999,
        right: 10,
        top: 10,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    selectList: {
        margin: 20,
        height: 60,
        alignItems: 'center',
    },
})