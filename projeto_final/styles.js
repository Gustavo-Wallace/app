import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const total_ruas = 5;
const largura_rua = width / total_ruas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-start',
  },
  recorde: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
  centralizar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  jogo_area: {
    flex: 1,
  },
  pontuacao: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  area_jogo: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  linha: {
    flexDirection: 'row',
    height: 40,
  },
  caractere: {
    width: largura_rua,
    height: 40,
    color: 'white',
    textAlign: 'center',
    lineHeight: 40,
    fontSize: 18,
  },
  jogador: {
    position: 'absolute',
    bottom: 100,
    width: largura_rua,
    alignItems: 'center',
  },
  jogador_texto: {
    color: 'white',
    fontSize: 24,
  },
  controles: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  botao_controle: {
    width: largura_rua,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
  },
  texto_botao: {
    color: 'white',
    fontSize: 24,
  },
  botao: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
  },
});

export default styles;
