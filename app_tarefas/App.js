import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

export default function App() {
  
  const [novaTarefa, setNovaTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    const carregarTarefas = async () => {
      const tarefasSalvas = await AsyncStorage.getItem('tarefas');

      if (tarefasSalvas) {
        setTarefas(JSON.parse(tarefasSalvas));
      }
    };
  
    carregarTarefas();
  }, []);
  
  const salvarTarefas = async (tarefasAtualizadas) => {
    await AsyncStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas));
  };

  const adicionarTarefa = () => {
    if (novaTarefa.trim()) {
      const tarefasAtualizadas = [...tarefas, { id: Date.now().toString(), texto: novaTarefa }];
      setTarefas(tarefasAtualizadas);
      setNovaTarefa('');
      salvarTarefas(tarefasAtualizadas);
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Tarefas</Text>

      <TextInput
        style={styles.input}
        placeholder="Adicionar nova tarefa"
        value={novaTarefa}
        onChangeText={setNovaTarefa}
      />

      <TouchableOpacity style={styles.botao} onPress={adicionarTarefa}>
        <Text style={styles.textoBotao}>Adicionar</Text>
      </TouchableOpacity>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemTarefa}>
            <Text style={styles.textoTarefa}>{item.texto}</Text>
          </View>
        )}
      />

    </View>
  );
}
