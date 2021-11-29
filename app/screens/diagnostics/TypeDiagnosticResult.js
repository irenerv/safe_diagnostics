import React, {useRef} from "react";
import { StyleSheet,View, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import { Divider, Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-easy-toast";
import { StatusBar } from "expo-status-bar";
import InfoView from "../../components/general/InfoView";
import Title from "../../components/general/Title";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function TypeDiagnosticResult(props) {
    const {navigation, route} =props; 
    const datosEsp = route.params.diagnostic[1].statusEsp;
    const datosCom = route.params.diagnostic[0].statusCom;
    const toastRef = useRef();

    const goDiagnostic = () => {
        if(datosEsp !== false){
            navigation.navigate("diagnosticsInfoEsp",{datosEsp});
        }
        if(datosCom !== false){
            navigation.navigate("diagnosticsInfoCom",{datosCom});
        }
    }

    return (
        //Visualization of screen
        <ScrollView vertical >
            <View style={styles.containerInfoStyle} >
            <View style={{marginTop:150}}>
                <Title text="Elige una opción"/>
            </View>
                <TouchableOpacity
                    style={styles.diagnosticStyle}
                    onPress={goDiagnostic}>
                    < InfoView
                        section="Diagnóstico Específico"
                        iconName="user-md"
                        iconStyle={styles.iconStyle1}
                        padding ={40}
                    />
                </TouchableOpacity >

                <TouchableOpacity
                    style={styles.historialStyle}
                    onPress={goDiagnostic}
                >
                    < InfoView
                        section={"Diagnóstico Completo"}
                        iconName="heart"
                        iconStyle={styles.iconStyle2}
                        padding ={40}
                    />
                </TouchableOpacity >

            </View>
            <Toast ref={toastRef} position="center" opacity={0.9} />
        </ScrollView >
    )
}


const styles = StyleSheet.create({
    viewBody: {
        flex: 1,
        backgroundColor: "white",
    },
    containerInfoStyle: {
        backgroundColor: "white",
        height: screenHeight,
        width:screenWidth,
    },
    btnContainer: {
        position: "absolute",
        bottom: 5,
        right: 5,
    },
    diagnosticStyle: {
        position: "absolute",
        backgroundColor: "#BFDDBC",
        marginHorizontal: 40,
        marginVertical: 400,
        height: 300,
        width: "38%",
        borderRadius: 30,
        alignItems: "center"
    },

    historialStyle: {
        position: "absolute",
        backgroundColor: "#F2A891",
        marginHorizontal: 230,
        marginVertical: 400,
        height: 300,
        width: "38%",
        borderRadius: 30,
        alignItems: "center"
    },
    iconStyle1: {
        color: "#A9C4A7",
        alignSelf: "center",
        marginTop: 30
    },
    iconStyle2: {
        color: "#E37B58",
        alignSelf: "center",
        marginTop: 30
    },
});