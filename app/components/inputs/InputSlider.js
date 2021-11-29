import React, { useState, useContext} from "react";
import { StyleSheet, View, ScrollView, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import Slider from '@react-native-community/slider';

export function InputSlider(props){
    const {setValue, value} = props;
    let color;
    
    if(value<0.5){
        color="#B3E59F";
    }else{
        color="#DA387D";
    }
    
    return(
        <View style={styles.container}>
            <Slider
            style={{width: 330, height: 40}}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#DA387D"
                maximumTrackTintColor="#B3E59F"
                step={0.20}
                onValueChange={(value)=> setValue(Number(value.toFixed(2)))}
            />
            <View style={{flexDirection:"row", justifyContent:"space-between", height:70,}}>
                <Image
                        source={require("../../../assets/img/smile.png")}
                        resizeMode="contain"
                        style={{width: "10%", height:"50%", }}
                    />
                <View style={{backgroundColor:color, width: "10%", height:"40%", borderRadius: 10, }}>
                    
                    <Text style={{color:"#fff",alignSelf:"center"}}>{value*100}</Text>
                    
                </View>
                <Image
                        source={require("../../../assets/img/cry.png")}
                        resizeMode="contain"
                        style={{width: "12%",height:34}}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "80%",
        marginVertical: 10
    },
})
