//import { StatusBar } from 'expo-status-bar';       <StatusBar style="auto" />
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [euros, setEuros] = useState('');
  const [krona, setKrona] = useState(0);

  function calculate(){
    const result = euros.replace(',', '.') * 11.85
    setKrona(result);
  }

  return (
    <View style={styles.container}>
      <Text>Insert Euros:</Text>
      <TextInput 
        placeholder='Enter the amount of Euros' 
        keyboardType='decimal-pad'
        value={euros}
        onChangeText={text => setEuros(text)}
        style={styles.field}>
      </TextInput>
      <Text style={styles.field}>Krona:</Text>
      <Text style={styles.field}>{krona.toFixed(2)}</Text>
      <Button title='Calculate' onPress={calculate}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40
  },
  field:{
    marginBottom: 10
  }
});
