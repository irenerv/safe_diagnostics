import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TotalDiagnCom from "../screens/diagnostics/TotalDiagnCom";
import TotalDiagnEsp from "../screens/diagnostics/TotalDiagnEsp";
import TypeDiagnostic from "../screens/diagnostics/TypeDiagnostic";
import MenuDiagnostics from "../screens/diagnostics/MenuDiagnostics";
import NewDiagnostic from "../screens/diagnostics/NewDiagnostic";
import DiagnosticsInfoEsp from "../screens/diagnostics/DiagnosticsInfoEsp";
import DiagnosticsInfoCom from "../screens/diagnostics/DiagnosticsInfoCom";
import TypeDiagnosticResult from "../screens/diagnostics/TypeDiagnosticResult";;
import MyDiagnostics from "../screens/diagnostics/MyDiagnostics";
const Stack = createStackNavigator();

//Stack de settings
export default function SettingStack() {

    return (
        <Stack.Navigator
            options={{ headerShown: false }}
        >
            <Stack.Screen
            name="menuDiagnostics"
            component={MenuDiagnostics}
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen
            name="typeDiagnostics"
            component={TypeDiagnostic}
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen
                name="diagnosticsEsp"
                component={TotalDiagnEsp}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="diagnosticsCom"
                component={TotalDiagnCom}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="diagnosticsInfoEsp"
                component={DiagnosticsInfoEsp}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="diagnosticsInfoCom"
                component={DiagnosticsInfoCom}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="typeResult"
                component={TypeDiagnosticResult}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
            name="newDiagnostic"
            component={NewDiagnostic}
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen
                name="myDiagnostics"
                component={MyDiagnostics}
                options={{
                    headerShown: false
                }}
            />  
            
        </Stack.Navigator>


    );
}