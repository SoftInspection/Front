import React from "react";
import { useLocation } from "react-router-dom";

const UndefinedAddress: React.FC = () => {
    const currentLocation = useLocation();

    return (
        <>
            <h1>?! :/ 404</h1>
            <p>Не получилось найти адрес...</p>
            <p>{currentLocation.pathname}</p>
        </>
    );
};

export default UndefinedAddress;

