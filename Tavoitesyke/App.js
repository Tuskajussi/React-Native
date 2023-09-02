import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [lowerhr, setLowerhr] = useState(0);
  const [higherhr, setHigherhr] = useState(0);

  function updateHR(age){
    setAge(age);
    setLowerhr((220-age) * 0.65);
    setHigherhr((220-age) * 0.85);
  }

  return (
    <View style={styles.container}>
      <Text>Age:</Text>
      <TextInput placeholder='Please type your age' 
        keyboardType='decimal-pad'
        value={age}
        onChangeText={text => updateHR(text)}>
      </TextInput>
      <Text>HR Limits:</Text>
      <Text>{lowerhr.toFixed(0)} - { higherhr.toFixed(0)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 60
  },
});
