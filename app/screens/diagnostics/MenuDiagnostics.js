import React, {useRef} from "react";
import { StyleSheet,View, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import { Divider, Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-easy-toast";
import { StatusBar } from "expo-status-bar";
import InfoView from "../../components/general/InfoView";
import Title from "../../components/general/Title";

export default function MenuDiagnostics() {
    const toastRef = useRef();
    const navigation = useNavigation();

    return (
        //Visualization of screen
        <ScrollView
            vertical style={styles.viewBody}
        >
            <StatusBar
                animated={true}
                backgroundColor="#fff"
                style={"auto"}
                hidden={false} />
            <Avatar
                rounded
                size="xlarge"
                containerStyle={styles.userInfoAvatar}
                source={
                    require("../../../assets/img/avatar.png")}
            />
            <Title text="Anónimo"/>
            <Divider style={{ backgroundColor: '#E37B58', marginTop: 40, width: "90%", alignSelf: "center" }} />
            <View style={styles.containerInfoStyle} >

                <TouchableOpacity
                    style={styles.diagnosticStyle}
                    onPress={() => navigation.navigate("newDiagnostic")}
                >
                    < InfoView
                        section="Nuevo Diagnóstico"
                        iconName="user-md"
                        iconStyle={styles.iconStyle1}
                        padding ={40}
                    />

                </TouchableOpacity >

                <TouchableOpacity
                    style={styles.historialStyle}
                    onPress={() => navigation.navigate("typeDiagnostics")}
                >
                    < InfoView
                        section={"Mis Diagnósticos"}
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
        marginTop: 40,
        backgroundColor: "white",
    },
    containerInfoStyle: {
        backgroundColor: "white",
        height: 540,
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
        marginVertical: 110,
        height: 250,
        width: "38%",
        borderRadius: 30,
        alignItems: "center"
    },

    historialStyle: {
        //position: "absolute",
        backgroundColor: "#F2A891",
        marginHorizontal: 230,
        marginVertical: 110,
        height: 250,
        width: "38%",
        borderRadius: 30,
        alignItems: "center",
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
    userInfoAvatar: {
        marginTop: 60,
        alignSelf:"center",
    }

});