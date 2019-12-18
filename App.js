import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [person,setPerson]=useState({name:"Shuan",age:"50"});
  
  const handlePress = ()=>{
    setPerson({name:"MinLu",age:"45"})
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>      
        <Text style>Hello World</Text>
      </View>
      <View style={styles.body}>      
        <Text>name is {person.name}</Text>
        <Text>age is {person.age}</Text>
      </View>
      <View style={styles.button}>
        <Button title='Update state' onPress={handlePress}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor: 'yellow',
  },
  body:{
    backgroundColor: 'pink',
    fontWeight:"bold"
  },
  bold:{
    fontWeight:"bold"
  },
  button:{
    marginTop:20,
    
  }
});
