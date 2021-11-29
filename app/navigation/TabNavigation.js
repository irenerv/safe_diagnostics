import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Icon } from "react-native-elements";
import DiagnosticsStack from "./DiagnosticsStack";
import SettingsStack from "./SettingsStack";

const Tab = createMaterialBottomTabNavigator();

//Componnete de navegación Tab
export default function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => screenOptions(route, color),
            })}
            initialRouteName="Home"
            activeColor="#515151"
            inactiveColor="#f0edf6"
            barStyle={{ backgroundColor: '#E37B58', paddingBottom: 8 }}
        >
            {/* Stacks de la navegación */}
            <Tab.Screen
                name="diagnostics"
                component={DiagnosticsStack}
                options={{ title: "Diagnosticos" }}
            />
            <Tab.Screen
                name="settings"
                component={SettingsStack}
                options={{ title: "Configuración" }}
            />

        </Tab.Navigator>
    );
}

//Carga de iconos para cada sección
function screenOptions(route, color) {
    let iconName;

    switch (route.name) {
        case "diagnostics":
            iconName = "note-text-outline";
            break;
        case "settings":
            iconName = "cog-outline";
            break;
        case "autenticacion":
            iconName = "cog-outline";
            break;
        default:
            break;
    }

    return (
        <Icon type="material-community" name={iconName} size={22} color={color} />
    );
}
