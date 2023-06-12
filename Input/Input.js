import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native'

const Input = () => {
    const [text, onChangeText] = React.useState('');
    return (
        <View>
            <Text>Escriba su usuario:</Text>
            <TextInput
                style={[styles.input, styles.shadowProp]}
                onChangeText={onChangeText}
                value={text}
                placeholder="Usuario"
            />
        </View>
    )
};
const styles = StyleSheet.create({

  });
export default Input;