import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import HomeScreen from './Telas/Home';
import HoleritesScreen from './Telas/Holerites';
import Cadastro from './Telas/Cadastro';
import Login from './Telas/Login';

function options(navigation, icon, tela, title) {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate(tela)} style={{ marginRight: 15 }}>
                <FontAwesome5 name={icon} size={25} color="#002D62" />
            </TouchableOpacity>
        ),
        headerTintColor: '#002D62',
        drawerActiveTintColor: '#002D62',
        drawerActiveBackgroundColor: 'lightgray',
        title: title,
    };
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Root() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                title="Home"
                component={HomeScreen}
            />
            <Stack.Screen
                name="HoleritesScreen"
                title="Holerites"
                component={HoleritesScreen}
            />
            {/*
            <Stack.Screen
                name="Cadastro"
                title="Cadastro"
                component={Cadastro}
            />*/}
            <Stack.Screen
                name="Login"
                title="Login"
                component={Login}
            />
            <Stack.Screen
                name='HoleriteView'
                title='HoleriteView'
                options={{
                    presentation: 'modal',
                }}
            />
        </Stack.Navigator>
    );
}

class App extends React.Component {
    render() {
        return (

            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen
                        name="Home"
                        component={HomeScreen}
                        title="Home"
                        options={({ navigation }) => options(navigation, "user-circle", "Login", "Home")} />

                    <Drawer.Screen
                        name="HoleritesScreen"
                        component={HoleritesScreen}
                        title="Holerites"
                        options={({ navigation }) => options(navigation, "home", "Home", "Holerites")} />

                    {/*
                    <Drawer.Screen
                        name="Cadastro"
                        component={Cadastro}
                        title="Cadastro"
                        options={({ navigation }) => options(navigation, "home", "Home", "Cadastro")} />
                    */}
                    <Drawer.Screen
                        name="Login"
                        component={Login}
                        title="Login"
                        options={({ navigation }) => options(navigation, "home", "Home", "Login")} />
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}

export default App;

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
    textOp: {
        textAlign: 'center',
        color: '#002D62',
        fontSize: 20,
        fontFamily: 'Montserrat_400Regular',
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