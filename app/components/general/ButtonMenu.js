import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function ButtonMenu() {
    const navigation = useNavigation();
    return (
        <View style={styles.ViewMenuBotton}>
            <Icon
                type="material-community"
                name="menu"
                style={{ color: "black" }}
                onPress={() => navigation.openDrawer()}
            />
        </View >
    )
}

const styles = StyleSheet.create({
    ViewMenuBotton: {
        position: "absolute",
        left: 26,
        top: 28
    }
})
