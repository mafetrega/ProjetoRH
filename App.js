import 'react-native-gesture-handler';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import HomeScreen from './src/View/Home';
import HoleritesScreen from './src/View/Holerites';
import Login from './src/View/Login';
import Ferias from './src/View/Ferias';
import Perfil from './src/View/Perfil';
import Ponto from './src/View/Ponto';
import Horas from './src/View/Horas';

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
                component={HomeScreen}
            />
            <Stack.Screen
                name="HoleritesScreen"
                component={HoleritesScreen}
            />
            <Stack.Screen
                name="Ferias"
                component={Ferias}
            />
            <Stack.Screen
                name="Perfil"
                component={Perfil}
            />
            <Stack.Screen
                name='Ponto'
                component={Ponto}
            />
            <Stack.Screen
                name='Horas'
                component={Horas}
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
                        options={({ navigation }) => options(navigation, "user-circle", "Perfil", "Home")} />
                    <Drawer.Screen
                        name="HoleritesScreen"
                        component={HoleritesScreen}
                        options={({ navigation }) => options(navigation, "home", "Home", "Holerites")} />
                    <Drawer.Screen
                        name="Ferias"
                        component={Ferias}
                        options={({ navigation }) => options(navigation, "home", "Home", "Férias")} />
                    <Drawer.Screen
                        name="Perfil"
                        component={Perfil}
                        options={({ navigation }) => options(navigation, "home", "Home", "Perfil")} />
                    <Drawer.Screen
                        name="Login"
                        component={Login}
                        options={({ navigation }) => options(navigation, "home", "Home", "Login")} />
                    <Drawer.Screen
                        name='Ponto'
                        component={Ponto}
                        options={({ navigation }) => options(navigation, "home", "Home", "Ponto")} />
                    <Drawer.Screen
                        name='Horas'
                        component={Horas}
                        options={({ navigation }) => options(navigation, "home", "Home", "Horas Extras")} />
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}

export default App;