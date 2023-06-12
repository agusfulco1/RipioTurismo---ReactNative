import React from 'react';
import {StyleSheet, View, StatusBar, Text} from 'react-native';
import Input from "./Input/Input.js"
export default function App() {

  return (
    <View style={styles.container}>
      <Input nombreLabel=""></Input>
      <Input></Input>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'start',
  },
});
