import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: 'white'
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'black'
  },
  imagem_biscoito: {
    width: 300,
    height: 300,
    marginBottom: 30
  },
  imagem_papel: {
    width: 200,
    height: 100,
    marginBottom: 20,
    resizeMode: 'contain'
  },
  frase_sorte: {
    fontSize: 22,
    fontStyle: 'italic',
    textAlign: 'center',
    paddingHorizontal: 20,
    color: 'green'
  },
  botao: {
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 10,
    marginTop: 20
  },
  texto_botao: {
    color: 'white',
    fontSize: 20
  },
  botao_reiniciar: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 10,
    marginTop: 20
  },
  texto_botao_reiniciar: {
    color: 'white',
    fontSize: 20
  }
});

export default styles;
