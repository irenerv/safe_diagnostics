import React, { useState} from "react";
import { StyleSheet, View,} from "react-native";
import { Button} from "react-native-elements";
import {CheckBox} from "react-native-elements";
import Modal from "../general/Modal";

export function InputCheckBox(props){
    const {isVisibleBox, setIsVisibleBox,setValue, toastRef} = props;
    const [state1, setState1] = useState(false);
    const [state2, setState2] = useState(false);
    const [state3, setState3] = useState(false);
    const [state4, setState4] = useState(false);
    const [state5, setState5] = useState(false);
    const [state6, setState6] = useState(false);
    const [state7, setState7] = useState(false);
    const [state8, setState8] = useState(false);
    const [state9, setState9] = useState(false);
    const [state10, setState10] = useState(false);
    const [state11, setState11] = useState(false);
    
    
    const confirmation = () => {
        const seleccion={
            1:{"valor":state1},
            2:{"valor":state2},
            3:{"valor":state3},
            4:{"valor":state4},
            5:{"valor":state5},
            6:{"valor":state6},
            7:{"valor":state7},
            8:{"valor":state8},
            9:{"valor":state9},
            10:{"valor":state10},
            11:{"valor":state11},
        }
        const select=[];
        for(let i=1; i<=11; i++){
            if(seleccion[i].valor === true){
                select.push(i);
            }
        }
    

        setValue(select);
        toastRef.current.show("Elección guardada correctamente");
        setIsVisibleBox(false);
    }
  
    return(
        
    <Modal isVisible={isVisibleBox} setIsVisible={setIsVisibleBox}>
        <View>
            <CheckBox
                title="Diagnóstico Completo"
                checked={state11}
                onPress={() => setState11(!state11)}
                containerStyle={styles.container}
                textStyle={styles.textStyle}
                checkedColor="#fff"
                uncheckedColor="#C6E6D3"
            />
            <CheckBox
                title="Diabetes"
                checked={state1}
                onPress={() => setState1(!state1)}
                containerStyle={styles.container}
                textStyle={styles.textStyle}
                checkedColor="#fff"
                uncheckedColor="#C6E6D3"
            />
            <CheckBox
                title="Hipertiroidismo"
                checked={state2}
                onPress={() => setState2(!state2)}
                containerStyle={styles.container}
                textStyle={styles.textStyle}
                checkedColor="#fff"
                uncheckedColor="#C6E6D3"
            />  
            <CheckBox
                title="Hipotiroidismo"
                checked={state3}
                onPress={() => setState3(!state3)}
                containerStyle={styles.container}
                textStyle={styles.textStyle}
                checkedColor="#fff"
                uncheckedColor="#C6E6D3"
            />
            <CheckBox
                title="Enfermedad de Addison"
                checked={state4}
                onPress={() => setState4(!state4)}
                containerStyle={styles.container}
                textStyle={styles.textStyle}
                checkedColor="#fff"
                uncheckedColor="#C6E6D3"
            />
            <CheckBox
                title="La enfermedad de Cushing"
                checked={state5}
                onPress={() => setState5(!state5)}
                containerStyle={styles.container}
                textStyle={styles.textStyle}
                checkedColor="#fff"
                uncheckedColor="#C6E6D3"
            />
            <CheckBox
                title="Acromegalia"
                checked={state6}
                onPress={() => setState6(!state6)}
                containerStyle={styles.container}
                textStyle={styles.textStyle}
                checkedColor="#fff"
                uncheckedColor="#C6E6D3"
            />
            <CheckBox
                title="Hipogonadismo masculino"
                checked={state7}
                onPress={() => setState7(!state7)}
                containerStyle={styles.container}
                textStyle={styles.textStyle}
                checkedColor="#fff"
                uncheckedColor="#C6E6D3"
            />
            <CheckBox
                title="Hipogonadismo femenino"
                checked={state8}
                onPress={() => setState8(!state8)}
                containerStyle={styles.container}
                textStyle={styles.textStyle}
                checkedColor="#fff"
                uncheckedColor="#C6E6D3"
            />
            <CheckBox
                title="Síndrome del Ovario Poliquístico"
                checked={state9}
                onPress={() => setState9(!state9)}
                containerStyle={styles.container}
                textStyle={styles.textStyle}
                checkedColor="#fff"
                uncheckedColor="#C6E6D3"
            />
            <CheckBox
                title="Transtornos del crecimiento"
                checked={state10}
                onPress={() => setState10(!state10)}
                containerStyle={styles.container}
                textStyle={styles.textStyle}
                checkedColor="#fff"
                uncheckedColor="#C6E6D3"
            /> 

            <View style={styles.viewBoxBtn}>
                <Button
                    title="Guardar"
                    containerStyle={styles.viewBoxBtnContainerSave}
                    buttonStyle={styles.viewBoxSave}
                    onPress={confirmation}
                />
                <Button
                    title="Cancelar"
                    containerStyle={styles.viewBoxCancelContainer}
                    buttonStyle={styles.viewBoxCancel}
                    onPress={() => { setIsVisibleBox(false) }}
                />
            </View>
        </View>
    </Modal>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#A9C4A7", 
        borderRadius:10
    },
    textStyle:{
        color:"#fff"
    },
    viewBoxBtn:{
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
    },
    
    viewBoxCancelContainer: {
        paddingLeft: 5,
    },
    viewBoxCancel: {
        backgroundColor: "red",
        borderRadius: 10,
    },
    viewBoxBtnContainerSave: {
        paddingRight: 5,

    },
    viewBoxSave: {
        backgroundColor: "blue",
        borderRadius: 10,
    },
})
