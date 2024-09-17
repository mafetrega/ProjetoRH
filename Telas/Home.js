import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  UIManager,
  LayoutAnimation,
  Platform,
  Button,

} from 'react-native';

import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Home = () => {
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
            <TouchableOpacity style={styles.op}>
              <AntDesign style={styles.icon} name="calculator" size={40} color="black" />
              <Text style={styles.textOp}> Holerites</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.op}>
              <AntDesign style={styles.icon} name="minussquareo" size={40} color="black" />
              <Text style={styles.textOp}>Descontos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.op}>
              <FontAwesome6 style={styles.icon} name="hourglass" size={40} color="black" />
              <Text style={styles.textOp}> Banco de Horas </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.op}>
              <FontAwesome style={styles.icon} name="calendar-check-o" size={40} color="black" />
              <Text style={styles.textOp}>Férias</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.op}>
              <Ionicons style={styles.icon} name="document-outline" size={40} color="black" />
              <Text style={styles.textOp}>Solicitações</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
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
    borderColor: '000',
    width: 150,
    height: 150,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#35353510',
  },
  textOp: {
    textAlign: 'center',
    color: '000',
    fontSize: 20,
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
    backgroundColor: '#000',
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
    color: '000',
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
    color: '#000',
    fontSize: 20,
  },
  icon: {
    marginBottom: 10,
  }

});

export default Home;
