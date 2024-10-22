import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import styles from './styles';

const app_preferencias = () => {
  const [tema, setTema] = useState('Claro');
  const [tamanhoFonte, setTamanhoFonte] = useState(16);
  const [modoNoturno, setModoNoturno] = useState(false);
  const [open, setOpen] = useState(false);

  const resetarPreferencias = () => {
    setTema('Claro');
    setTamanhoFonte(16);
    setModoNoturno(false);
  };

  const temaFundo = () => {
    if (modoNoturno) return '#121212';
    if (tema === 'Claro') return '#ffffff';
    if (tema === 'Escuro') return '#333333';
    return '#ffffff';
  };

  const temaCorTexto = () => {
    return temaFundo() === '#ffffff' ? '#000000' : '#ffffff';
  };

  const items = [
    { label: 'Claro', value: 'Claro' },
    { label: 'Escuro', value: 'Escuro' },
    { label: 'Automático', value: 'Automático' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: temaFundo() }]}>
      <Text style={[styles.titulo, { color: temaCorTexto(), fontSize: tamanhoFonte }]}>
        Configurações de Preferências
      </Text>


      <Text style={[styles.label, { color: temaCorTexto(), fontSize: tamanhoFonte }]}>Tema:</Text>
      <Picker
        selectedValue={tema}
        style={[styles.picker, { color: temaCorTexto() }]}
        onValueChange={(itemValue) => setTema(itemValue)}
        itemStyle={{ color: temaCorTexto() }}
      >
        <Picker.Item label="Claro" value="Claro" />
        <Picker.Item label="Escuro" value="Escuro" />
        <Picker.Item label="Automático" value="Automático" />
      </Picker>


      <Text style={[styles.label, { color: temaCorTexto(), fontSize: tamanhoFonte }]}>
        Tamanho da Fonte: {tamanhoFonte}
      </Text>
      <Slider
        style={styles.slider}
        minimumValue={12}
        maximumValue={30}
        step={1}
        value={tamanhoFonte}
        onValueChange={(value) => setTamanhoFonte(value)}
        minimumTrackTintColor={temaCorTexto()}
        maximumTrackTintColor={temaCorTexto()}
        thumbTintColor={temaCorTexto()}
      />


      <Text style={[styles.label, { color: temaCorTexto(), fontSize: tamanhoFonte }]}>
        Modo Noturno: {modoNoturno ? 'Ativado' : 'Desativado'}
      </Text>
      <Switch
        value={modoNoturno}
        onValueChange={(value) => setModoNoturno(value)}
        trackColor={{ false: 'gray', true: 'green' }}
        thumbColor={modoNoturno ? 'white' : 'white'}
      />

     
      <TouchableOpacity style={[styles.botao, { borderColor: temaCorTexto() }]} onPress={resetarPreferencias}>
        <Text style={[styles.textoBotao, { color: temaCorTexto(), fontSize: tamanhoFonte }]}>
          Resetar Preferências
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default app_preferencias;
