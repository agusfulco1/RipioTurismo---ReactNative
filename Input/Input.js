import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native'

const Input = (props) => {
    
    return (
        <View>
            <Text>{props.nombreLabel}:</Text>
            <TextInput
                style={[styles.input]}
                onChangeText={props.setText}
                value={props.text}
            />
        </View>
    )
};
const styles = StyleSheet.create({
    input: {
        borderColor: '#1573ff',
        borderWidth: '50',
        backgroundColor: '#d9d9d9'
    }

  });
export default Input;