import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import api from './src/api';

export default function App() {
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [funcionarios, setFuncionarios] = useState([]);

  const adicionarFuncionario = async () => {
    try {
      const response = await api.post('/funcionarios', { cpf, nome, email });
      alert(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  const listarFuncionarios = async () => {
    try {
      const response = await api.get(`/funcionarios/${cpf}`);
      setFuncionarios(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput placeholder="CPF" value={cpf} onChangeText={setCpf} />
      <TextInput placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <Button title="Adicionar Funcionário" onPress={adicionarFuncionario} />
      <Button title="Listar Funcionários" onPress={listarFuncionarios} />
      {funcionarios.map((funcionario, index) => (
        <Text key={index}>{funcionario.nome}</Text>
      ))}
    </View>
  );
}