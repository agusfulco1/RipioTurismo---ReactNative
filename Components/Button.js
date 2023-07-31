import {View,StyleSheet, Text, TouchableOpacity} from 'react-native';
import AppLoading from "expo-app-loading";
import {
    useFonts,
    Fredoka_400Regular,
  } from "@expo-google-fonts/fredoka";
TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

export default function Button(props) {
    let [fontsLoaded] = useFonts({
        Fredoka_400Regular,
      });
    return (
        <View>
            {!fontsLoaded ? (
            <AppLoading/>
            
        ) : (
            <TouchableOpacity style={styles.containerVacio}>
                <TouchableOpacity onPress={props.onPress} style={styles.botonContainer}>
                    <Text style={styles.textoBoton}>{props.title}</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        )} 
        </View>
        
    );
}

const styles = StyleSheet.create({
    containerVacio: {
        padding: 2,
        borderColor: '#1573FF',
        backgroundColor: '#EEEEEE',
        borderRadius: 100,
        borderWidth: 2,
    },
    botonContainer: {
        backgroundColor: "#1573FF",
        borderRadius: 100,
        padding: 10
    },
    textoBoton: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
        fontFamily: "Fredoka_400Regular"
    }
})

