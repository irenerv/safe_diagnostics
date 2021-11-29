import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/account/Account";
import Login from "../screens/account/Login";
import Register from "../screens/account/Register";
import UserGuest from "../screens/account/UserGuest";

const Stack = createStackNavigator();

export default function AuthNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="account"
                component={Account}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="register"
                component={Register}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="userGuest"
                component={UserGuest}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}
