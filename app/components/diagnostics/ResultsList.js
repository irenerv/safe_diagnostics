import React from "react";
import { StyleSheet, View, FlatList,SafeAreaView, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GeneralText from "../../components/general/GeneralText"

export default function ListResultRegister(props) {
    const { results, userInfo } = props;
    const navigation = useNavigation();
    return (
        <View >
                <FlatList
                    nestedScrollEnabled 
                    data={results}
                    numColumns={1}
                    keyExtractor={
                        (item, index) => index.toString()}
                    renderItem={(resultData) => <ResultRegister resultData={resultData} navigation={navigation} userInfo={userInfo}/>}
                    onEndReachedThreshold={0.5}
                    
                />
        </View>
    );
}

function ResultRegister(props) {
    const { resultData} = props;
    const {fuente, info, name, nivel, }=resultData.item;

    return (
        <View >
            <View style={styles.viewResultRegister}>
                <GeneralText text=  "Nivel" align={"center"}/>
                <GeneralText text= {nivel} align={"center"}/>
                <GeneralText text={name} align={"center"} size={28}/>
                <GeneralText text=  {info} size={18}/>
                <GeneralText text=  "Fuente:" size={18} paddingVertical={40}/>
                <GeneralText text= {fuente} size={18}/>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    loaderResults: {
        alignItems: "center",
    },
    viewResultRegister: {
        marginTop: 100,
        marginHorizontal: 30,
        paddingVertical:35, 
        paddingHorizontal:20,
        backgroundColor: "#E37B58",
        borderRadius: 24,
        width: 380,
        height: 600,
        alignSelf: "center",

    },
});