import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import moment from 'moment';

const Horas = () => {
    const [diaSelecionado, setDiaSelecionado] = useState("");
    const [mesSelecionado, setMesSelecionado] = useState("");
    const [anoSelecionado, setAnoSelecionado] = useState("");
    const [horasFiltradas, setHorasFiltradas] = useState([]);

    const dataMes = [
        { key: '0', value: 'Selecione um Mês' },
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

    const anos = Array.from({ length: 10 }, (v, i) => ({ key: `${2024 - i}`, value: `${2024 - i}` }));
    anos.unshift({ key: '0', value: 'Selecione o Ano' });

    const dias = Array.from({ length: 31 }, (v, i) => ({ key: `${i + 1}`, value: `${i + 1}` }));
    dias.unshift({ key: '0', value: 'Selecione o dia' });

    const dados = [
        { "data": "2024-02-01", "entrada": "08:00:00", "saida_almoco": "12:00:00", "volta_almoco": "13:00:00", "saida": "18:00:00" },
        { "data": "2024-02-02", "entrada": "08:05:00", "saida_almoco": "12:10:00", "volta_almoco": "13:10:00", "saida": "18:05:00" },
        { "data": "2024-02-05", "entrada": "08:00:00", "saida_almoco": "12:00:00", "volta_almoco": "13:00:00", "saida": "18:00:00" },
        { "data": "2024-02-06", "entrada": "08:10:00", "saida_almoco": "12:15:00", "volta_almoco": "13:15:00", "saida": "18:10:00" },
        { "data": "2024-02-07", "entrada": "08:00:00", "saida_almoco": "12:05:00", "volta_almoco": "13:05:00", "saida": "18:00:00" },
        { "data": "2024-02-08", "entrada": "08:05:00", "saida_almoco": "12:10:00", "volta_almoco": "13:10:00", "saida": "18:05:00" },
        { "data": "2024-02-09", "entrada": "08:00:00", "saida_almoco": "12:00:00", "volta_almoco": "13:00:00", "saida": "18:00:00" },
        { "data": "2024-02-12", "entrada": "08:10:00", "saida_almoco": "12:15:00", "volta_almoco": "13:15:00", "saida": "18:10:00" },
        { "data": "2024-02-13", "entrada": "08:00:00", "saida_almoco": "12:05:00", "volta_almoco": "13:05:00", "saida": "18:00:00" },
        { "data": "2024-02-14", "entrada": "08:05:00", "saida_almoco": "12:10:00", "volta_almoco": "13:10:00", "saida": "18:05:00" },
        { "data": "2024-02-15", "entrada": "08:00:00", "saida_almoco": "12:00:00", "volta_almoco": "13:00:00", "saida": "18:00:00" },
        { "data": "2024-02-16", "entrada": "08:10:00", "saida_almoco": "12:15:00", "volta_almoco": "13:15:00", "saida": "18:10:00" },
        { "data": "2024-02-19", "entrada": "08:00:00", "saida_almoco": "12:05:00", "volta_almoco": "13:05:00", "saida": "18:00:00" },
        { "data": "2024-02-20", "entrada": "08:05:00", "saida_almoco": "12:10:00", "volta_almoco": "13:10:00", "saida": "18:05:00" },
        { "data": "2024-02-21", "entrada": "08:00:00", "saida_almoco": "12:00:00", "volta_almoco": "13:00:00", "saida": "18:00:00" },
        { "data": "2024-02-22", "entrada": "08:10:00", "saida_almoco": "12:15:00", "volta_almoco": "13:15:00", "saida": "18:10:00" },
        { "data": "2024-02-23", "entrada": "08:00:00", "saida_almoco": "12:05:00", "volta_almoco": "13:05:00", "saida": "18:00:00" },
        { "data": "2024-02-26", "entrada": "08:05:00", "saida_almoco": "12:10:00", "volta_almoco": "13:10:00", "saida": "18:05:00" },
        { "data": "2024-02-27", "entrada": "08:00:00", "saida_almoco": "12:00:00", "volta_almoco": "13:00:00", "saida": "18:00:00" },
        { "data": "2024-02-28", "entrada": "08:10:00", "saida_almoco": "12:15:00", "volta_almoco": "13:15:00", "saida": "18:10:00" },
        { "data": "2024-02-29", "entrada": "08:00:00", "saida_almoco": "12:05:00", "volta_almoco": "13:05:00", "saida": "18:00:00" },
        { "data": "2024-03-01", "entrada": "08:05:00", "saida_almoco": "12:10:00", "volta_almoco": "13:10:00", "saida": "18:05:00" },
        { "data": "2024-03-04", "entrada": "08:00:00", "saida_almoco": "12:00:00", "volta_almoco": "13:00:00", "saida": "18:00:00" },
        { "data": "2024-03-05", "entrada": "08:10:00", "saida_almoco": "12:15:00", "volta_almoco": "13:15:00", "saida": "18:10:00" },
        { "data": "2024-03-06", "entrada": "08:00:00", "saida_almoco": "12:05:00", "volta_almoco": "13:05:00", "saida": "18:00:00" },
        { "data": "2024-03-07", "entrada": "08:05:00", "saida_almoco": "12:10:00", "volta_almoco": "13:10:00", "saida": "18:05:00" },
        { "data": "2024-03-08", "entrada": "08:00:00", "saida_almoco": "12:00:00", "volta_almoco": "13:00:00", "saida": "18:00:00" },
        { "data": "2024-03-11", "entrada": "08:10:00", "saida_almoco": "12:15:00", "volta_almoco": "13:15:00", "saida": "18:10:00" },
        { "data": "2024-03-12", "entrada": "08:00:00", "saida_almoco": "12:05:00", "volta_almoco": "13:05:00", "saida": "18:00:00" },
        { "data": "2024-03-13", "entrada": "08:05:00", "saida_almoco": "12:10:00", "volta_almoco": "13:10:00", "saida": "19:05:00" },
        { "data": "2024-03-14", "entrada": "08:00:00", "saida_almoco": "12:00:00", "volta_almoco": "13:00:00", "saida": "19:00:00" },
        { "data": "2024-03-15", "entrada": "08:10:00", "saida_almoco": "12:15:00", "volta_almoco": "13:15:00", "saida": "19:10:00" },
        { "data": "2024-03-18", "entrada": "08:00:00", "saida_almoco": "12:05:00", "volta_almoco": "13:05:00", "saida": "19:00:00" },
        { "data": "2024-03-19", "entrada": "08:05:00", "saida_almoco": "12:10:00", "volta_almoco": "13:10:00", "saida": "19:05:00" },
        { "data": "2024-03-20", "entrada": "08:00:00", "saida_almoco": "12:00:00", "volta_almoco": "13:00:00", "saida": "19:00:00" },
        { "data": "2024-03-21", "entrada": "08:10:00", "saida_almoco": "12:15:00", "volta_almoco": "13:15:00", "saida": "19:10:00" },
        { "data": "2024-03-22", "entrada": "08:00:00", "saida_almoco": "12:05:00", "volta_almoco": "13:05:00", "saida": "19:00:00" },
        { "data": "2024-03-25", "entrada": "08:05:00", "saida_almoco": "12:10:00", "volta_almoco": "13:10:00", "saida": "19:05:00" },
        { "data": "2024-03-26", "entrada": "08:00:00", "saida_almoco": "12:00:00", "volta_almoco": "13:00:00", "saida": "19:00:00" },
        { "data": "2024-03-27", "entrada": "08:10:00", "saida_almoco": "12:15:00", "volta_almoco": "13:15:00", "saida": "19:10:00" },
        { "data": "2024-03-28", "entrada": "08:00:00", "saida_almoco": "12:05:00", "volta_almoco": "13:05:00", "saida": "19:00:00" },
        { "data": "2024-03-29", "entrada": "08:05:00", "saida_almoco": "12:10:00", "volta_almoco": "13:10:00", "saida": "19:05:00" },
        { "data": "2024-04-01", "entrada": "08:00:00", "saida_almoco": "12:00:00", "volta_almoco": "13:00:00", "saida": "19:00:00" },
        { "data": "2024-04-02", "entrada": "08:10:00", "saida_almoco": "12:15:00", "volta_almoco": "13:15:00", "saida": "19:10:00" },
        { "data": "2024-04-03", "entrada": "08:00:00", "saida_almoco": "12:05:00", "volta_almoco": "13:05:00", "saida": "19:00:00" },
        { "data": "2024-04-04", "entrada": "08:05:00", "saida_almoco": "12:10:00", "volta_almoco": "13:10:00", "saida": "19:05:00" },
        { "data": "2024-04-05", "entrada": "08:00:00", "saida_almoco": "12:00:00", "volta_almoco": "13:00:00", "saida": "19:00:00" }
    ];

    const cargaHorariaTotal = 8;

    const calcularHorasExtras = () => {
        return dados.map(item => {
            const entrada = moment(`${item.data} ${item.entrada}`, "YYYY-MM-DD HH:mm:ss");
            const saidaAlmoco = moment(`${item.data} ${item.saida_almoco}`, "YYYY-MM-DD HH:mm:ss");
            const voltaAlmoco = moment(`${item.data} ${item.volta_almoco}`, "YYYY-MM-DD HH:mm:ss");
            const saida = moment(`${item.data} ${item.saida}`, "YYYY-MM-DD HH:mm:ss");

            const horasTrabalhadasAntesDoAlmoco = saidaAlmoco.diff(entrada, 'hours', true);
            const horasTrabalhadasDepoisDoAlmoco = saida.diff(voltaAlmoco, 'hours', true);
            const horasAlmoco = voltaAlmoco.diff(saidaAlmoco, 'hours', true);

            const horasTrabalhadasFinal = horasTrabalhadasAntesDoAlmoco + horasTrabalhadasDepoisDoAlmoco - horasAlmoco;
            const horasExtras = horasTrabalhadasFinal > cargaHorariaTotal ? horasTrabalhadasFinal - cargaHorariaTotal : 0;

            return {
                data: item.data,
                horasTrabalhadas: horasTrabalhadasFinal,
                horasAlmoco,
                horasExtras
            };
        });
    };

    const horasExtrasCalculadas = calcularHorasExtras();

    const filtrarPorData = () => {
        const diaSelecionadoNumero = parseInt(diaSelecionado, 10);
        const mesSelecionadoNumero = dataMes.findIndex(m => m.key === mesSelecionado);
        const anoSelecionadoNumero = parseInt(anoSelecionado, 10);

        return horasExtrasCalculadas.filter(item => {
            const dataItem = moment(item.data);
            const filtroPorDia = diaSelecionadoNumero !== 0 ? dataItem.date() === diaSelecionadoNumero : true;
            const filtroPorMes = mesSelecionadoNumero !== -1 ? dataItem.month() === mesSelecionadoNumero : true;
            const filtroPorAno = anoSelecionadoNumero ? dataItem.year() === anoSelecionadoNumero : true;

            return filtroPorDia && filtroPorMes && filtroPorAno;
        });
    };

    const pesquisar = () => {
        const horasFiltradasResultado = filtrarPorData();
        setHorasFiltradas(horasFiltradasResultado);
    };

    const limparFiltros = () => {
        setDiaSelecionado('');
        setMesSelecionado('');
        setAnoSelecionado('');
        setHorasFiltradas([]);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Horas Extras</Text>

                    <View style={styles.containerSelect}>
                        <Text style={styles.TitleSelect}>Selecione o dia</Text>
                        <SelectList
                            setSelected={setDiaSelecionado}
                            data={dias}
                            boxStyles={styles.selectList}
                            dropdownStyles={styles.dropdown}
                            dropdownItemStyles={styles.dropdownItem}
                            maxHeight={500}
                            placeholder='Selecione o dia'
                        />

                        <Text style={styles.TitleSelect}>Selecione o mês</Text>
                        <SelectList
                            setSelected={setMesSelecionado}
                            data={dataMes}
                            boxStyles={styles.selectList}
                            dropdownStyles={styles.dropdown}
                            dropdownItemStyles={styles.dropdownItem}
                            maxHeight={500}
                            placeholder='Selecione o mês'
                        />

                        <Text style={styles.TitleSelect}>Selecione o ano</Text>
                        <SelectList
                            setSelected={setAnoSelecionado}
                            data={anos}
                            boxStyles={styles.selectList}
                            dropdownStyles={styles.dropdown}
                            dropdownItemStyles={styles.dropdownItem}
                            maxHeight={500}
                            placeholder='Selecione o ano'
                        />
                    </View>

                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.button} onPress={pesquisar}>
                            <Text style={styles.buttonText}>Pesquisar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={limparFiltros}>
                            <Text style={styles.buttonText}>Limpar Filtros</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.title}>Horas Selecionadas</Text>
                    <FlatList
                        style={{ marginTop: 10 }}
                        data={horasFiltradas.length > 0 ? horasFiltradas : horasExtrasCalculadas}
                        keyExtractor={(item) => item.data}
                        renderItem={({ item }) => (
                            <View style={styles.item}>
                                <Text style={styles.textItemList}>Data: {item.data}</Text>
                                <Text style={styles.textItemList}>Horas Trabalhadas: {item.horasTrabalhadas.toFixed(2)} horas</Text>
                                <Text style={styles.textItemList}>Tempo de Almoço: {item.horasAlmoco.toFixed(2)} horas</Text>
                                <Text style={styles.textItemList}>Horas Extras: {item.horasExtras.toFixed(2)} horas</Text>
                            </View>
                        )}
                        ListEmptyComponent={<Text style={styles.emptyText}>Nenhum registro encontrado.</Text>}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    containerSelect: {
        gap: 10
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textItemList: {
        fontSize: 15,
    },
    item: {
        padding: 15,
        marginVertical: 8,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#002D62',
        elevation: 2,
    },
    TitleSelect: {
        marginTop: 15,
        fontSize: 16,
        fontWeight: 'bold',
    },
    selectList: {
        height: 60,
        alignItems: 'center',
    },
    dropdown: {
        borderColor: '#ccc',
    },
    buttons: {
        gap: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
        marginHorizontal: 10,
    },
    button: {
        backgroundColor: '#ccc',
        borderRadius: '50%',
        padding: 15,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
    },
});

export default Horas;
