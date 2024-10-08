// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
    textTransform: 'uppercase',
    letterSpacing: 2
  },
  imagem_autor: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    borderWidth: 5,
    borderColor: '#4CAF50',
    resizeMode: 'cover'
  },
  citacao: {
    fontSize: 22,
    fontStyle: 'italic',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
    color: '#666'
  },
  autor: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    color: 'GREEN',
    fontWeight: 'bold'
  },
  botao: {
    backgroundColor: 'green',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    width: '60%',
    alignItems: 'center'
  },
  texto_botao: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
});

export default styles;
