import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import frases from './frases';
import styles from './styles';

const BiscoitoApp = () => {
  const [biscoito_quebrado, set_biscoito_quebrado] = useState(false);
  const [frase_sorte, set_frase_sorte] = useState('');

  const quebrar_biscoito = () => {
    if (!biscoito_quebrado) {
      const frase_aleatoria = frases[Math.floor(Math.random() * frases.length)];
      set_frase_sorte(frase_aleatoria);
      set_biscoito_quebrado(true);
    }
  };

  const reiniciar_biscoito = () => {
    set_biscoito_quebrado(false);
    set_frase_sorte('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Quebre o Biscoito da Sorte!</Text>
      
      <Image
        source={
          biscoito_quebrado
            ? require('./assets/biscoito_aberto.png')
            : require('./assets/biscoito_fechado.png')
        }
        style={styles.imagem_biscoito}
      />

      {biscoito_quebrado && (
        <>
          <Image 
            source={require('./assets/papel_sobre_biscoito.png')}
            style={styles.imagem_papel}
          />
          <Text style={styles.frase_sorte}>{frase_sorte}</Text>
        </>
      )}

      {!biscoito_quebrado ? (
        <TouchableOpacity
          onPress={quebrar_biscoito}
          style={styles.botao}>
          <Text style={styles.texto_botao}>Quebrar o Biscoito</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={reiniciar_biscoito}
          style={styles.botao_reiniciar}>
          <Text style={styles.texto_botao_reiniciar}>Quebrar Outro Biscoito</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default BiscoitoAppApp;
