import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Row({person}){
    return <View>
        <Text style={styles.row}>{person.lastname} {person.firstname}</Text>
      </View>
  }

  const styles = StyleSheet.create({
    row: {
        marginTop: 8,
        marginBottom: 8,
    },
  });