import React, { useState } from 'react';
import { View, Text, Picker, Slider, Switch, Button, StyleSheet } from 'react-native';

const ConfiguracoesPreferencias = () => {
  // Estados para as preferências
  const [tema, setTema] = useState('Claro');
  const [tamanhoFonte, setTamanhoFonte] = useState(16);
  const [modoNoturno, setModoNoturno] = useState(false);

  // Função para resetar as preferências
  const resetarPreferencias = () => {
    setTema('Claro');
    setTamanhoFonte(16);
    setModoNoturno(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Configurações de Preferências</Text>

      {/* Picker para seleção do tema */}
      <Text style={styles.subtitulo}>Tema:</Text>
      <Picker
        selectedValue={tema}
        style={styles.picker}
        onValueChange={(itemValue) => setTema(itemValue)}
      >
        <Picker.Item label="Claro" value="Claro" />
        <Picker.Item label="Escuro" value="Escuro" />
        <Picker.Item label="Automático" value="Automático" />
      </Picker>

      {/* Slider para ajuste do tamanho da fonte */}
      <Text style={styles.subtitulo}>Tamanho da Fonte:</Text>
      <Slider
        style={styles.slider}
        minimumValue={12}
        maximumValue={30}
        step={1}
        value={tamanhoFonte}
        onValueChange={(value) => setTamanhoFonte(value)}
      />
      <Text style={[styles.textoSlider, { fontSize: tamanhoFonte }]}>
        Tamanho atual: {tamanhoFonte}
      </Text>

      {/* Switch para Modo Noturno */}
      <Text style={styles.subtitulo}>Modo Noturno:</Text>
      <Switch
        value={modoNoturno}
        onValueChange={() => setModoNoturno((previousState) => !previousState)}
      />
      <Text>{modoNoturno ? 'Ativado' : 'Desativado'}</Text>

      {/* Botão para resetar as preferências */}
      <Button title="Resetar Preferências" onPress={resetarPreferencias} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 18,
    marginVertical: 10,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  textoSlider: {
    marginTop: 10,
  },
});

export default ConfiguracoesPreferencias;
