import React from "react";
import Layout from "./general_components/Layout";

interface CheckAPIProps {
    isAdmin: boolean;
}

const CheckAPI: React.FC<CheckAPIProps> = ({ isAdmin }) => {
    // return <>ЗДЕСЬ БУДЕТ ИНФОРМАЦИЯ О ДАННЫХ С API-МОСТА.</>
    return (
        <>
            <Layout pagename="API">
                {
                    !isAdmin ?
                        <><p>Извините, но вы не являетесь администратором.</p></> :
                        <h1>Ваши данные с API-моста будут отображаться здесь.</h1>
                }
            </Layout>
        </>
    );
}

export default CheckAPI;
