import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native'

const Input = (props) => {
    const [text, onChangeText] = React.useState('');
    return (
        <View>
            <Text>{props.nombreLabel}:</Text>
            <TextInput
                style={[styles.input]}
                onChangeText={onChangeText}
                value={text}
                placeholder="Usuario"
            />
        </View>
    )
};
const styles = StyleSheet.create({
    input: {
        borderColor: 'blue',
        borderWidth: '50',
        backgroundColor: 'pink',
    }

  });
export default Input;