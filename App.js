// Importando as bibliotecas necessárias
import * as React from 'react';
import {
  Button,
  View,
  TouchableOpacity,
  StyleSheet,
  Text
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

// Importando as telas
import Home from './Telas/Home';
import Login from './Telas/Login';
import Cadastro from './Telas/Cadastro';
import Holerites from './Telas/Holerites';

// Importando os ícones
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// Função para criar a tela inicial
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Home />
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
      <TouchableOpacity onPress={() => navigation.navigate(tela)} style={styles.icon}>
        <FontAwesome5 name={icon} size={25} color="black" />
      </TouchableOpacity>
    ),
    headerTintColor: 'black',
    drawerActiveTintColor: 'black',
    drawerActiveBackgroundColor: 'lightgray',
  };
}

function HoleriteScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Holerites />
    </View>
  );
}

// Criando o menu lateral
const Drawer = createDrawerNavigator();

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


      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 15,
  },
  TextCadastro: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,

  },
  btnCadastro: {
    color: "#036ffc",
  },
})