//Importaciones
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

//Componente de texto personalizado
export default function GeneralText(props) {
    const { text, color, size, style, viewStyle, padding, paddingVer, align} = props;
    return (
        <View style={!viewStyle ? styles.viewStyle : viewStyle}>
            <Text style={!style ? {
                fontFamily: "Quicksand-Medium",
                color: color ? color : "#fff",
                fontSize: size ? size : 20,
                paddingTop: padding ? padding : 13,
                paddingVertical: paddingVer, 
                textAlign:align ? align : "justify"
            } : style}>
                {text}
            </Text>
        </View>
    )
}

//Hoja de estilos
const styles = StyleSheet.create({
    viewStyle: {
        marginHorizontal: 8,
    },
})



