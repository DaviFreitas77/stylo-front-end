import React, { createContext, useState, useEffect, type ReactNode } from "react";



type Stylo = {
    name: string,
    setName: (name: string) => void,
    email: string,
    setEmail: (email: string) => void
}

export const Context = createContext<Stylo | undefined>(undefined)

type AppProviderProps = {
    children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return (
        <Context.Provider value={{ name, setName, email, setEmail }}>
            {children}
        </Context.Provider>
    );
}