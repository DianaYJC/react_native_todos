import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [person,setPerson]=useState({name:"Shuan",age:"50"});

  return (
    <View style={styles.container}>
      <View >
        <Text>Enter Name:</Text>
        <TextInput style={styles.input}/>
      </View>
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
    margin:2
  }

});
