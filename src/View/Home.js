import React, { useState } from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Button
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

import HoleritesScreen from './Holerites';
import BancoHoras from './BancoHoras';
import Ferias from './Ferias';
import Ponto from './Ponto';
import Perfil from './Perfil';
import Horas from './Horas';


class HomeScreen extends React.Component {
    render() {

        return (
            <View style={styles.container}>
                <StatusBar animated={true} barStyle="default" />

                <SafeAreaView style={styles.safeArea}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.title}>Bem vindo!</Text>
                        <View style={styles.opcoes}>

                            <TouchableOpacity style={styles.op} onPress={() =>
                                this.props.navigation.navigate('Perfil')} >
                                <FontAwesome style={styles.icon} name="user" size={40} color="#002D62" />
                                <Text style={styles.textOp}>Perfil</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.op} onPress={() =>
                                this.props.navigation.navigate('Ponto')} >
                                <FontAwesome6 style={styles.icon} name="clock" size={40} color="#002D62" />
                                <Text style={styles.textOp}>Ponto</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.op} onPress={() =>
                                this.props.navigation.navigate('Horas')} >
                                <AntDesign style={styles.icon} name="clockcircleo" size={40} color="#002D62" />
                                <Text style={styles.textOp}> Gerenciar Horas</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.op} onPress={() =>
                                this.props.navigation.navigate('HoleritesScreen')} >
                                <AntDesign style={styles.icon} name="calculator" size={40} color="#002D62" />
                                <Text style={styles.textOp}> Holerites</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.op} onPress={() =>
                                this.props.navigation.navigate('Ferias')} >
                                <FontAwesome style={styles.icon} name="calendar-check-o" size={40} color="#002D62" />
                                <Text style={styles.textOp}>Férias</Text>
                            </TouchableOpacity>

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
}
export default HomeScreen;
const styles = StyleSheet.create({
    icon: {
        marginBottom: 10,
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
});

