import { StyleSheet } from "react-native";
export const colores = {
    primary: "#fab3b3",
    background : '#e7e7e793'
}

export const styles = StyleSheet.create({
    title : {
        fontSize : 35,
        fontWeight : 'bold',
    },
    subtitle : {
        fontSize : 20,
    },
    globalMargin :{
        marginHorizontal: 20
    },
    avatar : {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    avatarContainer : {
        alignItems:'center',
        marginTop:20
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal : 30,
        alignItems: 'flex-start'
    }, 
    menuButton : {
        marginVertical: 10    
    },
    menuButtonText : {
        fontSize : 20
    },
    mTexto : {
        fontSize : 24
    }

    /*
    fondo: {
        flex: 1,
        backgroundColor: "black"
    },
    calculadoraContainer : {
        flex: 1,
        paddingHorizontal: 20,
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
        color: "rgba(255,255,255,0.5)",
        fontSize: 30,
        textAlign: "right",
    }
    */
})