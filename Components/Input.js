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
        display: 'flex',
        width: "100%",
        height: "6%",
        alignItems: 'center',
        marginTop: 12
    },
    input: {
        borderRadius: 7,
        backgroundColor: '#d9d9d9',
        width: "70%",
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10.16, 
        height: "100%",
        marginTop: 5,
        
    },
    texto: {
        color: "#00000080",
        fontSize: 15,
        fontWeight: 300,
    },

  });
export default Input;