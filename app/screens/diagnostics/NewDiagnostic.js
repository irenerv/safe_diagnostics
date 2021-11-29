import React, { useState, useRef } from "react";
import {View, Text} from "react-native";
import Toast from "react-native-easy-toast";
import Loading from "../../components/general/Loading";
import NewDiagnosticForm from "../../components/diagnostics/NewDiagnosticForm";

export default function NewDiagnostic(props){
    const {navigation, route} =props;
    const toastRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    return(
        <View>
            <NewDiagnosticForm
                toastRef={toastRef}
                setIsLoading={setIsLoading}
                navigation={navigation}
                diagnosticInfo={route}
            />
            <Toast ref={toastRef} position="center" opacity={0.9} />
            <Loading isVisible={isLoading} text="Generado diagnóstico"/>
        </View>    
    );
}
