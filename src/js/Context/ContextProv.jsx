import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const ContextProv = ({ children }) => {

    const [info, setInfo] = useState('information 1');

    return (
        <MyContext.Provider value={{info, setInfo}}>
            {children}
        </MyContext.Provider>
    );
};

