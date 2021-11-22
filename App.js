import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';




export default function App(){ //Função principal;
 
 const [peso, setPeso] = useState(''); //Armazena o peso
 const [altura, setAltura] = useState(''); //Armazena o peso

function executarCalculos(){
  const alt = altura/100;
  const imc = peso / (alt * alt);
  alert (imc.toFixed(2));
  
}

  return(
   <View style={estilo.container}>
    <Text style={estilo.title}>Calcule seu IMC</Text>   



    <TextInput
       style={estilo.input} //Input (Caixa de texto)
       value={peso} //Valor dentro componente
       onChangeText={(peso) => setPeso(peso)} // toda vez que o campo mudar ele é salvo.
       placeholder="Peso (kg)"
       keyboardType="numeric"
  />


<TextInput
       style={estilo.input} //Input (Caixa de texto)
       value={altura} //Valor dentro componente
       onChangeText={(altura) => setAltura(altura)} // toda vez que o campo mudar ele é salvo.
       placeholder="Altura (cm)"
       keyboardType="numeric"
  />
   
  
  <TouchableOpacity style={estilo.botao} onPress={executarCalculos}>
    <Text style={estilo.textoBotao}>Calcular</Text>
  </TouchableOpacity>
   
   </View>
  );
}


const estilo = StyleSheet.create({
 container: {
   flex: 1
 },
 title:{
   textAlign: 'center',
   marginTop: 25,
   fontSize: 30
 },

 input: {
   backgroundColor:'#ffcbdb',
   borderRadius: 10,
   margin: 15,
   padding: 10,
   color: '#000',
   fontSize: 23
 },

 botao: {
   justifyContent:'center',
   alignItems:'center',
   margin: 15,
   backgroundColor: '#41AEF4',
   padding:'10',
 },
 textoBotao: {
   color: '#FFF',
   fontSize:25,
 }

});