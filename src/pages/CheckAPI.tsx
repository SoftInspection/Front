import React, { useEffect, useState } from "react";
import Layout from "./general_components/Layout";

interface CheckAPIProps {
    isAdmin: boolean;
}

const MAX_LOCAL_STORAGE_SIZE_MB = 10;
const MAX_LOCAL_STORAGE_SIZE_BYTES = MAX_LOCAL_STORAGE_SIZE_MB * 1024 * 1024;

const CheckAPI: React.FC<CheckAPIProps> = ({ isAdmin }) => {
    const [localStorageSize, setLocalStorageSize] = useState<number>(0);

    const calculateLocalStorageSize = () => {
        let totalSize = 0;
        for (const key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                const value = localStorage.getItem(key);
                if (value) {
                    totalSize += key.length + value.length;
                }
            }
        }
        return totalSize * 2; 
    };

    useEffect(() => {
        const size = calculateLocalStorageSize();
        setLocalStorageSize(size);
    }, []);

    return (
        <Layout pagename="API">
            {
                !isAdmin ?
                    <p>Извините, но вы не являетесь администратором.</p> :
                    <p>
                        Вес localStorage: {localStorageSize} байт из {MAX_LOCAL_STORAGE_SIZE_BYTES} байт
                        ({(localStorageSize / MAX_LOCAL_STORAGE_SIZE_BYTES * 100).toFixed(2)}% от максимального объема).
                    </p>
            }
        </Layout>
    );
}

export default CheckAPI;
