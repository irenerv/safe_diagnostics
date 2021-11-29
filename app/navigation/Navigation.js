import React from "react";
import { AuthProvider } from "../context/AuthProvider";
import Routes from "./Routes";

//Componente de navegación del sistema
export default function Navigation() {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    );
}
