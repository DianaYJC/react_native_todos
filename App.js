import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name,setName]=useState('Shuan');
  const [age,setAge]=useState('50');

  return (
    <View style={styles.container}>
        <Text>Enter Name:</Text>
        <TextInput 
        placeholder="e.g John Olive" 
        multiline 
        onChangeText={(value)=>setName(value)} 
        style={styles.input}/>        
        <TextInput placeholder="e.g 30" keyboardType='numeric' onChangeText={(value)=>setAge(value)} style={styles.input}/>       
        <Text>I am {name} and {age}year old</Text>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems:"center",
  justifyContent:"center"
  },
 input: {
    borderWidth:1,
    borderColor:'#777',
    margin:2,
    width:200
  }

});
