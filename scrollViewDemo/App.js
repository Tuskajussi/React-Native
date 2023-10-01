import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';
import Constants from 'expo-constants';
import { AppBar } from '@react-native-material/core';
import { SafeAreaView } from 'react-native';

export default function App() {
  const [items, setItems] = useState([
    {id: 1, name: 'Test 1'},
    {id: 2, name: 'Test 2'}
  ]);

  useEffect(() => {
    const newItems = [];
    for (let i = 0; i < 30; i++){
      newItems.push({id: i, name: `Test ${i}`, image: 'https://reactnative.dev/img/tiny_logo.png'})
    }
    setItems(newItems);
  }, []);

  return (
    <>
    <View style={{backgroundColor: 'red', height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight}}>
        <StatusBar
          backgroundColor='red'
          translucent
          barStyle='light-content'
          />
    </View>
    <SafeAreaView style={styles.container}>
      <AppBar title="My List" backgroundColor='#333' />
      <ScrollView>
          {
            items.map(item => (
              <View key={item.id} style={styles.rowContainer}>
                <Image source = {{
                  uri: item.image,
                  width: 32,
                  height: 30,
                }} />
                <Text style={styles.row}>{item.name}</Text>
              </View>
            ) )
          }
        </ScrollView>
      </SafeAreaView>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.platform === 'android' ? Constants.statusBarHeight : 24
  },
  rowContainer:{
    flexDirection: 'row',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 4,
    paddingRight: 4,
  },
  row: {
    paddingTop: 8,
  }
});
