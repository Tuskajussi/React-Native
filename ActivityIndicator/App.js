import { useState, useEffect } from 'react';
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ActivityIndicator, View, Text } from 'react-native';

export default function App() {
const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading &&
        <ActivityIndicator/>
      }
      <Text>Loading...</Text>
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
});
