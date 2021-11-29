import React, { useState, useContext, useCallback, useRef } from "react";
import {View,  StyleSheet,} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Toast from "react-native-easy-toast";
import Loading from "../../components/general/Loading";
import MyDiagnosticsList from "../../components/diagnostics/MyDiagnosticsList"
import { AuthContext } from "../../context/AuthProvider";
import { firebaseApp } from "../../utils/firebase";
import firebase from "firebase/app";
import "firebase/firestore";
const db = firebase.firestore(firebaseApp);
import Title from "../../components/general/Title";

export default function TotalDiagnCom(props){
    const {navigation, route,} =props;
    const { user } = useContext(AuthContext);
    const [result, setResult] = useState([]);
    const toastRef = useRef();
    const [isLoading, setIsLoading] = useState(false);

    useFocusEffect(
    useCallback(() => {
        navigation.setOptions({ headerShown: false })

        const resultCom = [];
        db.collection("completeDiagnostic")
            .get()
            .then((response) => {
                //Obtaining every pet in the database
                response.forEach((doc) => {
                    const diagn = doc.data();
                    diagn.id = doc.id;
                    resultCom.push(diagn);
                });
                setResult(resultCom);
                //Storing data of every pet in an array
            }).catch((error) => {
                toastRef.current.show("Ha habido un error, inténtelo más tarde");
                console.log(error);

            });
            
    }, []));

    
    return(
        <View style={styles.containerInfoStyle}>
            <View style={{marginTop:150}}>
                <Title text="Total completos"/>
            </View>
            <MyDiagnosticsList
                results={result}
                tipo={"Completos"}
                isLoading={isLoading}
                userInfo={route}
                />
            <Toast ref={toastRef} position="center" opacity={0.9} />
            <Loading isVisible={isLoading} text="Generado diagnóstico"/> 
        </View>      
    );
}
const styles = StyleSheet.create({
    containerInfoStyle: {
        flex:1,
        backgroundColor: "#fff",
        
    },
})