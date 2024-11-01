// Importando as bibliotecas necessárias
import React, { useState } from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    StatusBar,
    Modal,
    Image,
    RefreshControl,
    Alert
} from 'react-native';

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import { SelectList } from 'react-native-dropdown-select-list'

import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import {
    GestureDetector,
    Gesture,
    GestureHandlerRootView,
    ScrollView,
} from 'react-native-gesture-handler';

import Animated, {
    useSharedValue,
    useAnimatedStyle,
} from 'react-native-reanimated';

import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';

const HoleritesScreen = () => {
    const offset = useSharedValue({ x: 0, y: 0 });
    const start = useSharedValue({ x: 0, y: 0 });
    const scale = useSharedValue(1);
    const savedScale = useSharedValue(1);
    const rotation = useSharedValue(0);
    const savedRotation = useSharedValue(0);

    const [expanded, setExpanded] = useState(false);
    const [fontsLoaded] = useFonts({ Montserrat_400Regular, Montserrat_700Bold });

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedAno, setSelectedAno] = useState("");
    const [selectedMes, setSelectedMes] = useState("");

    const validateSelection = () => {
        if (selectedAno === "" || selectedMes === "") {
            Alert.alert('Selecione um ano e um mês');
            return false;
        }
        return true;
    };

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
        { key: '2003', value: '2003' },
        { key: '2002', value: '2002' },
        { key: '2001', value: '2001' },
        { key: '2000', value: '2000' },
        { key: '1999', value: '1999' },
        { key: '1998', value: '1998' },
        { key: '1997', value: '1997' },
        { key: '1996', value: '1996' },
        { key: '1995', value: '1995' },
        { key: '1994', value: '1994' },
        { key: '1993', value: '1993' },
        { key: '1992', value: '1992' },
        { key: '1991', value: '1991' },
        { key: '1990', value: '1990' }
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
        { key: 'Dezembro', value: 'Dezembro' }
    ];

    return (
        <View style={[styles.container]}>
            <StatusBar animated={true} barStyle="default" />



            <View style={styles.SelectsContainer}>
                <Text style={styles.Text}>Selecione o ano e o mês do holerite que deseja</Text>
                <Text style={styles.TitleSelect}>Selecione o ano</Text>
                <SelectList
                    setSelected={setSelectedAno}
                    data={dataAno}
                    boxStyles={styles.selectList}
                    dropdownStyles={styles.dropdown}
                    dropdownItemStyles={styles.dropdownItem}
                    maxHeight={500}
                    searchPlaceholder='Selecione um ano'
                    placeholder='Selecione um ano'
                />

                <Text style={styles.TitleSelect}>Selecione o mês</Text>
                <SelectList
                    onSelect={() => {
                        if (validateSelection()) {
                            setModalVisible(!modalVisible);
                        }
                    }}
                    setSelected={setSelectedMes}
                    data={dataMes}
                    boxStyles={styles.selectList}
                    dropdownStyles={styles.dropdown}
                    dropdownItemStyles={styles.dropdownItem}
                    maxHeight={500}
                    searchPlaceholder='Selecione um mês'
                    placeholder='Selecione um mês'
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={() => {
                if (validateSelection()) {
                    setModalVisible(!modalVisible);
                }
            }}>
                <Text>Pesquisar</Text>
            </TouchableOpacity>

            <Modal
                style={{ marginTop: 100 }}
                animationType="slide"
                visible={modalVisible}
                animatedStyles='slide'
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>

                <Text style={styles.modalText}>
                    {selectedMes} de {selectedAno}
                </Text>

                <WebView source={require(`./imagens/2024/Janeiro.jpg`)} />

                <TouchableOpacity
                    style={styles.buttonClose}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <FontAwesome6 name="xmark" size={20} color="black" />
                </TouchableOpacity>
            </Modal >
        </View >
    );
};

export default HoleritesScreen;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#1010',
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
        top: 50,
    },
    modalText: {
        marginBottom: 30,
        marginTop: 70,
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    },
    Text: {
        color: '#002D62',
        fontSize: 15,
        textAlign: 'justify',
        fontFamily: 'Montserrat_700',
    },
    SelectsContainer: {
        marginVertical: 20,
        marginHorizontal: 25,
    },
    selectList: {
        height: 60,
        marginTop: 10,
        alignItems: 'center',
    },
    TitleSelect: {
        color: '#002D62',
        fontSize: 15,
        marginTop: 25,
        fontFamily: 'Montserrat_700Bold',
    },
    dropdown: {
        width: '100%',
        alignSelf: 'center',
        marginTop: 0,
        borderRadius: 10,
    },
    dropdownItem: {
        paddingVertical: 15,
    },
});
