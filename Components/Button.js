import {Animated, View,StyleSheet, Text, TouchableOpacity} from 'react-native';
import AppLoading from "expo-app-loading";
import {
    useFonts,
    Fredoka_300Light,
  } from "@expo-google-fonts/fredoka";
TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

export default function Button(props) {
    let [fontsLoaded] = useFonts({
        Fredoka_300Light,
    });
    const animation = new Animated.Value(0);
    const inputRange = [0, 1];
    const outputRange = [1, 0.8];
    const scale = animation.interpolate({inputRange, outputRange});

    const onPressIn = () => {
        Animated.spring(animation, {
        toValue: 1,
        useNativeDriver: true,
        }).start();
    };
    const onPressOut = () => {
        Animated.spring(animation, {
        toValue: 0,
        useNativeDriver: true,
        }).start();
    };
    return (
        <View>
            {!fontsLoaded ? (
            <AppLoading/>
            
        ) : (
            <View style={styles.container}>
            <Animated.View style={[styles.button, {transform: [{scale}]}]}>
                <TouchableOpacity onPress={props.onPress} onPressIn={onPressIn} onPressOut={onPressOut} style={styles.botonContainer}>
                    <Text style={styles.textoBoton}>{props.title}</Text>
                </TouchableOpacity>
            </Animated.View>
            </View>
            
        )} 
        </View>
        
    );
}

const styles = StyleSheet.create({
    botonContainer: {
        backgroundColor: "#1573FF",
        borderRadius: 50,
        padding: 10,
        marginTop: 20,
        outlineColor: "#1573FF",
        outlineStyle: "solid",
        outlineWidth: 2,
        outlineOffset: 3,
        width: 200,
        height: 40,
    },
    textoBoton: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        fontFamily: "Fredoka_300Light",
        justifyContent: "center"
    }
})
