import React, {useRef, useState } from "react";
import {View,  StyleSheet,Text} from "react-native";
import Toast from "react-native-easy-toast";
import ResultsList from "../../components/diagnostics/ResultsList"
import "firebase/firestore";
import { StatusBar } from "expo-status-bar";
import GeneralText from "../../components/general/GeneralText";
import Title from "../../components/general/Title";

export default function DiagnosticsInfoCom(props){
    const {navigation, route} =props; 
    const toastRef = useRef();
    const datosCom = route.params.datosCom;
    

    return(
        <View style={styles.containerInfoStyle}>
            <StatusBar
                animated={true}
                backgroundColor="#fff"
                style={"auto"}
                hidden={false} />
            
            {(datosCom!== false && datosCom.length!==0) ? (
            <View>
                <Text style={{
                    fontFamily: "Quicksand-Medium",
                    color: "#c2c2c2",
                    fontSize:  20,
                    paddingTop:  13,
                    paddingVertical: 10, 
                    textAlign:"center"
                }}>Completos</Text>
                <ResultsList
                    results={datosCom}
                    userInfo={route}
                />
            </View>
            ):
            ( <View style={{height:"100%", backgroundColor:"#fff"}}>
            <View style={{marginTop:40}}>
                <Title text="Resultados"/>
            </View>
            
            <View style={{backgroundColor:"#A9C4A7", borderRadius: 30,height:"40%", marginTop:100, width:400, alignSelf:"center"}}>
                <Text style={{
                    fontFamily: "Quicksand-Medium",
                    color: "#525252",
                    fontSize:  25,
                    //paddingTop:  100,
                    paddingVertical: 90,
                    paddingHorizontal: 30, 
                    textAlign:"center"
                }}>Su diagnóstico no ha coincidido con ninguna enfermedad. Favor de consultar a su médico.</Text>
        </View>
    </View>)}
            <Toast ref={toastRef} position="center" opacity={0.9} />
        </View>      
    );
}
const styles = StyleSheet.create({
    containerInfoStyle: {
        backgroundColor: "#fff",
    },
})