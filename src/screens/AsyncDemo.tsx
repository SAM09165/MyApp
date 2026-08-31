import React, { useState } from 'react';
import { View , Text, StyleSheet, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function AsyncDemo() {
    const [inputValue, setInputValue] = useState('');

        const getFun = () => {AsyncStorage.getItem('name').then((value) => {
            if (value !== null) {
                setInputValue(value);
            }
        })};
        const setFun = () => {AsyncStorage.setItem('name', inputValue).then(() => {
            console.log('Data saved successfully');
        })};

    return (
    
        <View style={styles.container}>
        <Text>Async Demo Screen</Text>
        <TextInput
        placeholder="Name"
        onChangeText={(text) => setInputValue(text)}
        />
        <Button title="Get" onPress={getFun} />
        <Button title="Submit" onPress={setFun} />
        </View>
    );
    }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
    icon: {
    fontSize: 100,
    marginBottom: 20,
  } 
})