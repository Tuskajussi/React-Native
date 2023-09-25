import React, { useEffect, useLayoutEffect } from 'react';
import {StyleSheet, View, Text, BackHandler} from "react-native";

export default function SecondScreen({route, navigation}){
    useEffect(() =>{
        if(route.params?.message){
            alert(route.params.message);
        }
        BackHandler.addEventListener('hardwareBackPress', close);
        return() => {
            BackHandler.removeEventListener('hardwareBackPress', close);
        }
    }, [route.params?.message]);

    function close(){
        navigation.goBack(null);
        return true;
    }

    return (
        <View style={StyleSheet.container}>
            <Text>Secondos des Screnosdos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    navButton:{
        marginRight: 5,
        padding: 4,
    }
  });