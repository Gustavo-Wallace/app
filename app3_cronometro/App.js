import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const CronometroApp = () => {
  const [tempo_decorrido, set_tempo_decorrido] = useState(0);
  const [ativo, set_ativo] = useState(false);
  const inicio_ref = useRef(0);
  const intervalo_ref = useRef(null);

  const formatar_tempo = (tempo) => {
    const minutos = Math.floor(tempo / 60000);
    const segundos = Math.floor((tempo % 60000) / 1000);
    const milissegundos = Math.floor((tempo % 1000) / 10);
    return `${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}:${milissegundos < 10 ? '0' : ''}${milissegundos}`;
  };

  const atualizar_tempo = () => {
    const agora = Date.now();
    set_tempo_decorrido(agora - inicio_ref.current);
  };

  const iniciar_cronometro = () => {
    if (!ativo) {
      set_ativo(true);
      inicio_ref.current = Date.now() - tempo_decorrido;
      intervalo_ref.current = setInterval(atualizar_tempo, 50); // Atualiza a cada 50ms
    }
  };

  const pausar_cronometro = () => {
    if (ativo) {
      clearInterval(intervalo_ref.current);
      set_ativo(false);
    }
  };

  const reiniciar_cronometro = () => {
    clearInterval(intervalo_ref.current);
    set_ativo(false);
    set_tempo_decorrido(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tempo}>{formatar_tempo(tempo_decorrido)}</Text>

      <View style={styles.botoes_container}>
        <TouchableOpacity onPress={iniciar_cronometro} style={styles.botao}>
          <Text style={styles.texto_botao}>Iniciar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={pausar_cronometro} style={styles.botao}>
          <Text style={styles.texto_botao}>Pausar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={reiniciar_cronometro} style={styles.botao}>
          <Text style={styles.texto_botao}>Reiniciar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CronometroApp;
