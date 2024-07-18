import React, { createContext, useContext, useState, useEffect } from 'react';

interface SavedProductsContextProps {
    savedCount: number;
    updateSavedCount: () => void;
}

const SavedProductsContext = createContext<SavedProductsContextProps>({
    savedCount: 0,
    updateSavedCount: () => { },
});

export const SavedProductsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [savedCount, setSavedCount] = useState<number>(0);

    const updateSavedCount = () => {
        const savedProducts = JSON.parse(localStorage.getItem('savedProducts') || '[]');
        setSavedCount(savedProducts.length);
    };

    useEffect(() => {
        updateSavedCount();
    }, []);

    return (
        <SavedProductsContext.Provider value={{ savedCount, updateSavedCount }}>
            {children}
        </SavedProductsContext.Provider>
    );
};

export const useSavedProducts = () => useContext(SavedProductsContext);
