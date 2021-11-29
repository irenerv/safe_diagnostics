import React from 'react'
import { View, } from 'react-native';
import { Icon } from "react-native-elements";
import GeneralText from "./GeneralText";

export default function InfoView(props) {
    const { section, iconName, iconStyle, padding } = props;
    return (
        <View>
            <GeneralText text={section} size={24} padding = {padding} align="center"/>
            <Icon
                type="font-awesome"
                name={iconName}
                iconStyle={iconStyle}
                size={40}
            />
        </View>
    );
}
