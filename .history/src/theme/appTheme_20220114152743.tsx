import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: "black"
    },
    calculadoraContainer : {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: "red",
        //Justify vertical, align horizontal
        justifyContent: "flex-end",
        //alignItems: "center"
    },
    resultado : {
        color: "white",
        fontSize: 60,
        textAlign: "right",
    },
    resultadoPequenio : {
        color: "rgba",
        fontSize: 30,
        textAlign: "right",
    }
})