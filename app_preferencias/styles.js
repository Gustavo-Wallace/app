import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginTop: 20,
  },
  picker: {
    width: '100%',
    height: 50,
  },
  slider: {
    width: '90%',
    height: 40,
    marginTop: 20,
  },
  botao: {
    marginTop: 30,
    padding: 15,
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    width: '90%',
  },
  textoBotao: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
