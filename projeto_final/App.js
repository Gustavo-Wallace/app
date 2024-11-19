import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity, Alert, Dimensions, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

const { width, height } = Dimensions.get('window');
const total_ruas = 5;
const largura_rua = width / total_ruas;
const total_linhas = 20;
const linha_jogador = 15;

const App = () => {
  const [pontuacao, set_pontuacao] = useState(0);
  const [recorde, set_recorde] = useState(0);
  const [posicao_jogador, set_posicao_jogador] = useState(2);
  const [obstaculos, set_obstaculos] = useState([]);
  const [jogo_rodando, set_jogo_rodando] = useState(false);
  const [velocidade, set_velocidade] = useState(300);

  const gerar_obstaculos = () => {
    const nova_linha_vazia = Array(total_ruas).fill(' ');

    if (obstaculos.length === 0 || !obstaculos[0].includes('v')) {
      const novo_obstaculo = Array(total_ruas).fill(' ');
      novo_obstaculo[Math.floor(Math.random() * total_ruas)] = 'v';
      set_obstaculos((prev) => [novo_obstaculo, ...prev].slice(0, total_linhas));
    } else {
      set_obstaculos((prev) => [nova_linha_vazia, ...prev].slice(0, total_linhas));
    }
  };

  const verificar_colisao = () => {
    if (obstaculos.length > linha_jogador) {
      const linha_atual = obstaculos[linha_jogador];
      if (linha_atual[posicao_jogador] === 'v') {
        set_jogo_rodando(false);
        if (pontuacao > recorde) {
          set_recorde(pontuacao);
          AsyncStorage.setItem('recorde', pontuacao.toString());
          Alert.alert('Novo Recorde!', `Você fez ${pontuacao} pontos!`);
        } else {
          Alert.alert('Fim de Jogo', `Sua pontuação foi ${pontuacao}`);
        }
        resetar_jogo();
      }
    }
  };

  const mover_jogador = (direcao) => {
    set_posicao_jogador((prev) => {
      const nova_posicao = prev + direcao;
      return nova_posicao < 0 ? 0 : nova_posicao >= total_ruas ? total_ruas - 1 : nova_posicao;
    });
  };

  const resetar_jogo = () => {
    set_pontuacao(0);
    set_obstaculos([]);
    set_posicao_jogador(2);
    set_velocidade(300);
  };

  useEffect(() => {
    const carregar_recorde = async () => {
      const recorde_salvo = await AsyncStorage.getItem('recorde');
      if (recorde_salvo) set_recorde(parseInt(recorde_salvo));
    };
    carregar_recorde();
  }, []);

  useEffect(() => {
    let intervalo;
    if (jogo_rodando) {
      intervalo = setInterval(() => {
        set_pontuacao((prev) => prev + 1);
        gerar_obstaculos();
        verificar_colisao();

        if (pontuacao % 10 === 0 && velocidade > 100) {
          set_velocidade((prev) => prev - 10);
        }
      }, velocidade);
    }
    return () => clearInterval(intervalo);
  }, [jogo_rodando, obstaculos, velocidade]);

  return (
    <View style={styles.container}>
      {!jogo_rodando ? (
        <View style={styles.centralizar}>
          <Text style={styles.recorde}>Recorde: {recorde}</Text>
          <TouchableOpacity onPress={() => set_jogo_rodando(true)}>
            <Text style={styles.botao}>Jogar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.jogo_area}>
          <Text style={styles.pontuacao}>Pontuação: {pontuacao}</Text>
          <View style={styles.area_jogo}>
            {obstaculos.map((linha, index) => (
              <View key={index} style={styles.linha}>
                {linha.map((char, i) => (
                  <Text key={i} style={styles.caractere}>
                    {char}
                  </Text>
                ))}
              </View>
            ))}
            <View style={[styles.jogador, { left: largura_rua * posicao_jogador }]}>
              <Text style={styles.jogador_texto}>A</Text>
            </View>
          </View>
          <View style={styles.controles}>
            <TouchableOpacity onPress={() => mover_jogador(-1)} style={styles.botao_controle}>
              <Text style={styles.texto_botao}>←</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => mover_jogador(1)} style={styles.botao_controle}>
              <Text style={styles.texto_botao}>→</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default App;
