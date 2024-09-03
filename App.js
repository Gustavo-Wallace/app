import { useState } from 'react'
import { View, Text, Image, Button, StyleSheet } from 'react-native'

function App() {
  const [nome, setName] = useState('')
  const [idade, setIdade] = useState('')
  const [curso, setCurso] = useState('')
  const [cidade, setCidade] = useState('')

  function pegarNome(nome, idade, curso, cidade){
    setName(nome)
    setIdade(idade)
    setCurso(curso)
    setCidade(cidade)
  }


  return (



    <View style={{ marginTop: 50}}>

    <Text style={styles.titulo}>Título</Text>

    <View style={{ marginTop: 50}}></View>

    <Text style={{ fontSize: 40}}>Nome: {nome}</Text>
    <Text style={{ fontSize: 40}}>Idade: {idade}</Text>
    <Text style={{ fontSize: 40}}>Curso: {curso}</Text>
    <Text style={{ fontSize: 40}}>Cidade: {cidade}</Text>
    <Button
      title='Save'
      onPress={() => pegarNome('Gustavo', 23, 'BCC', 'Taguatinga')}
    />

      <View style={{marginTop: 20}}>
        <Header />
        <Imagem2 />
        <Imagem1 />
        <Footer />
      </View>

  </View>)

}

function Header(){
  return <Text style={{fontSize: 40, padding: 25, fontWeight: 'bold', color: 'red', marginLeft: 30}}>
    cabecaçalho
    </Text>
}

function Footer(){
  return <Text style={{fontSize: 15, padding: 25, fontWeight: 'bold', color: 'red', marginLeft: 30}}>@COPYRIGHT</Text>
}

function Imagem1(){
  return <Image style={{width: '100%', height: 300}} 
    source={{uri: 'https://th.bing.com/th/id/OIP.zDzjX5hZ1gKezIKKgEWigAHaE7?w=276&h=184&c=7&r=0&o=5&pid=1.7'}}
  />
}

function Imagem2(){
  return <Image style={{width: '100%', height: 300}} 
    source={{uri: 'https://th.bing.com/th/id/OIP.92zJ4IDmz0A-zh_tYRzzqwHaEK?w=301&h=180&c=7&r=0&o=5&pid=1.7'}}
  />
}



export default App

let styles = StyleSheet.create({
  titulo: {
    marginTop: 16,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: 'green',
    textAlign: 'center',
    fontSize: 60,
    fontWeight: 'bold',
  }
})