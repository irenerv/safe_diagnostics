import React from "react";
import { StyleSheet,  View, FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
import { size } from "lodash";
import { useNavigation } from "@react-navigation/native";
import Subtitle from "../../components/general/Subtitle"
import GeneralText from "../../components/general/GeneralText"

export default function ListResultRegister(props) {
    const { results, isLoading, userInfo, tipo} = props;
    const navigation = useNavigation();

    return (
        <View styles={{paddingBottom:100,}}>
            {size(results) > 0 ? (
                <FlatList
                    nestedScrollEnabled 
                    data={results}
                    numColumns={1}
                    renderItem={(resultData) => <ResultRegister resultData={resultData} navigation={navigation} userInfo={userInfo} tipo={tipo}/>}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReachedThreshold={0.5}
                />
            ) : (
                <View style={styles.loaderResults}>
                    <ActivityIndicator size="large" color="black" />
                    <GeneralText text="Cargando" color="#3b3835" size={14} />
                </View>
            )}
        </View>
    );
}

function ResultRegister(props) {
    const { resultData, navigation,tipo } = props;
    const data= resultData.item;
    console.log(resultData.item)
    const goInfoResult = () => {
        navigation.navigate("myDiagnostics", {
            data, tipo
        });
    }

    return (
        <TouchableOpacity onPress={goInfoResult}>
            <View style={styles.viewResultRegister}>
                <View style={styles.previewInfo}>
                    <GeneralText text={"Diagnostico realizado el: "} align={"center"}/>
                    <Subtitle text={resultData.item.createAt} />
                </View>
            </View>
        </TouchableOpacity>
    );

}


const styles = StyleSheet.create({
    loaderResults: {
        marginTop: 50,
        marginBottom: 10,
        alignItems: "center",
    },
    viewResultRegister: {
        marginTop: 100,
        marginHorizontal: 30,
        backgroundColor: "#A9C4A7",
        borderRadius: 24,
        width: "80%",
        height: 170,
        alignSelf: "center",

    },
    notFoundResult: {
        marginTop: 40,
        marginBottom: 20,
        alignItems: "center",
    },
    noMoreResults: {
        marginTop: 50,
    },
    previewInfo: {
        marginTop: 40,
    }
});