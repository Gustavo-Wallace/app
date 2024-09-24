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
  total: {
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'GREEN',
    textShadowColor: '#ccc',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5
  },
  botoes_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20
  },
  botao: {
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    width: 120,
    alignItems: 'center'
  },
  botao_entrar: {
    backgroundColor: '#GREEN',
  },
  botao_sair: {
    backgroundColor: '#RED',
  },
  texto_botao: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
});

export default styles;
