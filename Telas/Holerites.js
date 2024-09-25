// Importando as bibliotecas necessárias
import React, { useState } from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView
} from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

import { SelectList } from 'react-native-dropdown-select-list'

const Holerites = () => {
};

export default Holerites;

{/*}
const Holerites = (tela) => {

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.opcoes}>

                    <TouchableOpacity style={styles.op} onPress={() => { tela }}>
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
    )
}

export default Holerites;

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
})*/}