import React from "react";
import { StyleSheet, View, } from "react-native";
import { Picker } from "@react-native-community/picker";

export function InputPicker(props){
    const {setValue, value, opcion} = props;
    let niveles = eleccion(opcion);
    
    return(
        <View style={styles.picker}>
            <Picker
                selectedValue={value}
                mode="dropdown"
                prompt="Nivel de sintoma"
                onValueChange={(itemValue) => {
                    setValue(itemValue)
                }}
            >
                <Picker.Item label={niveles[1]} value = {0} color={"#525252"} />
                <Picker.Item label={niveles[2]} value={0.2} color={"#525252"} />
                <Picker.Item label={niveles[3]} value={0.4} color={"#525252"} />
                <Picker.Item label={niveles[4]} value={0.5} color={"#525252"} />
                <Picker.Item label={niveles[5]}  value={0.7} color={"#525252"} />
                <Picker.Item label={niveles[6]} value={0.9} color={"#525252"} />
            </Picker>
    </View>
    );
}

function eleccion(opcion){
    switch (opcion) {
        case 1:
            return niveles={
                1:"Nada",
                2:"Muy leve",
                3:"Leve",
                4:"Medio",
                5:"Intenso",
                6:"Muy intenso"
            }
        case 2:
            return niveles={
                1:"Nada",
                2:"Muy poco",
                3:"Poco",
                4:"Medio",
                5:"Mucho",
                6:"Demasiado"
            }
        case 3:
            return niveles={
                1:"Nada",
                2:"Muy Bajo",
                3:"Bajo",
                4:"Medio",
                5:"Alto",
                6:"Muy Alto"
            }
        case 4:
            return niveles={
                1:"Nunca",
                2:"Casi nunca",
                3:"Poco",
                4:"A veces",
                5:"A menudo",
                6:"Siempre"
            }
    
        default:
            break;
    }
}

const styles = StyleSheet.create({
    picker: {
        marginBottom: 45,
        width: "80%",
        height: 55,
        opacity: 0.7,
        backfaceVisibility: "hidden",
        backgroundColor: "#A9C4A7",
        borderRadius: 10,
    },
})
