import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const ContadorRestauranteApp = () => {
  const [total_pessoas, set_total_pessoas] = useState(0);

  const incrementar = () => {
    set_total_pessoas(total_pessoas + 1);
  };

  const decrementar = () => {
    if (total_pessoas > 0) {
      set_total_pessoas(total_pessoas - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Restaurante Boom</Text>

      <Text style={styles.titulo}>Clientes presentes</Text>

      <Text style={styles.total}>{total_pessoas}</Text>

      <View style={styles.botoes_container}>
        <TouchableOpacity onPress={incrementar} style={[styles.botao, styles.botao_entrar]}>
          <Text style={styles.texto_botao}>Entrou</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={decrementar} style={[styles.botao, styles.botao_sair]}>
          <Text style={styles.texto_botao}>Saiu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ContadorRestauranteApp;
