import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20
    },
    tempo: {
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 30
    },
    botoes_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
    },
    botao: {
        backgroundColor: 'blue',
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 10
    },
    texto_botao: {
        color: 'white',
        fontSize: 18
    }
});

export default styles;
