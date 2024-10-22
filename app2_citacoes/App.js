import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import citacoes from './assets/citacoes.json';
import styles from './styles';

import imagem_einstein from './assets/einstein.png';
import imagem_jobs from './assets/jobs.png';
import imagem_mandela from './assets/mandela.png';
import imagem_gandhi from './assets/gandhi.png';

const imagens_autores = {
  "einstein.png": imagem_einstein,
  "jobs.png": imagem_jobs,
  "mandela.png": imagem_mandela,
  "gandhi.png": imagem_gandhi
};

const QuotesApp = () => {
  const [indice_frase, set_indice_frase] = useState(0);

  const gerar_nova_citacao = () => {
    const nova_citacao = Math.floor(Math.random() * citacoes.length);
    set_indice_frase(nova_citacao);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Citação Inspiradora</Text>
      
      <Image
        source={imagens_autores[citacoes[indice_frase].imagem]}
        style={styles.imagem_autor}
      />
      
      <Text style={styles.citacao}>{citacoes[indice_frase].citacao}</Text>
      <Text style={styles.autor}>- {citacoes[indice_frase].autor}</Text>

      <TouchableOpacity style={styles.botao} onPress={gerar_nova_citacao}>
        <Text style={styles.texto_botao}>Nova Citação</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuotesApp;