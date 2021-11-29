import React, {useRef } from "react";
import {View,  StyleSheet,} from "react-native";
import Toast from "react-native-easy-toast";
import ResultsList from "../../components/diagnostics/ResultsList"
import "firebase/firestore";
import { StatusBar } from "expo-status-bar";
import Title from "../../components/general/Title";

export default function TotalDiagnEsp(props){
    const {navigation, route} =props;   
    const {datos}=route.params.data;
    const {tipo}=route.params;
    const toastRef = useRef();
    return(
        <View style={styles.containerInfoStyle}>
            <StatusBar
                animated={true}
                backgroundColor="#fff"
                style={"auto"}
                hidden={false} />
            <View style={{marginTop:60,}}> 
                <Title text={tipo}/>
            
            <ResultsList
                results={datos}
                userInfo={route}
                />
                </View>
            <Toast ref={toastRef} position="center" opacity={0.9} />
        </View>      
    );
}
const styles = StyleSheet.create({
    containerInfoStyle: {
        backgroundColor: "#fff",
    },
})