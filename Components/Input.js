import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native'

const Input = (props) => {
    return (
        <View style={[styles.container]}>
            <Text style={styles.texto}>{props.nombreLabel}:</Text>
            <TextInput
                style={[styles.input]}
                onChangeText={props.setText}
                value={props.text}
            />
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: 'center'
    },
    input: {
        borderRadius: 10,
        backgroundColor: '#d9d9d9',
        width: "70%",
        elevation: 8,
    },
    texto: {
        color: "#00000080",
        fontSize: 15,
        fontWeight: 300,
    },

  });
export default Input;