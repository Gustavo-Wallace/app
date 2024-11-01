import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    marginBottom: 16,
  },
  botao: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: 'transparent',
  },
  textoBotao: {
    color: 'black',
    fontSize: 18,
  },
  itemTarefa: {
    backgroundColor: 'lightgrey',
    padding: 15,
    borderRadius: 8,
    marginBottom: 8,
  },
  textoTarefa: {
    fontSize: 16,
    color: 'black',
  },
});

export default styles;
