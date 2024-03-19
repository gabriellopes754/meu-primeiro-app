import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function App() {
  const [novaVariavel, setNovaVariavel] = React.useState('');
  const [novaVar, setNovaVar] = React.useState('');
  const calculo = (parseFloat(novaVariavel) + parseFloat(novaVar)) / 2;
  return (
    <View style={styles.container}>
      <Text style={styles.field}>numero 1:</Text>
      <TextInput keyboardType='numeric' onChangeText = {setNovaVariavel} style={styles.textinho} />
      

      <Text style={styles.field}>numero 2:</Text>
      <TextInput keyboardType='numeric' onChangeText = {setNovaVar} style={styles.textinho} />
      {!isNaN(calculo) && <Text style={styles.field}>{calculo}</Text>}

      <TouchableOpacity style={Text.button}>
        <Text style={styles.field}>enviar</Text>  
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(105,105,105)',
    //alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  field: {
    color:'#fff',
    fontSize: 25,
  },

  textinho: {
    backgroundColor: 'rgb(54,54,54)',
    width: 'auto',
    borderRadius:10,
    padding:10,
    marginTop:10,
  },
  button: {
    backgroundColor: 'rgb(54,54,54)',
    width: 'auto',
    borderRadius:10,
    padding:10,
    marginTop:10,
    alignItems: 'center'
  }
});