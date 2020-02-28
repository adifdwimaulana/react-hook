import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20000 },
        { id: 2, text: 'Salary', amount: 500000 },
        { id: 3, text: 'Book', amount: -100000 },
        { id: 4, text: 'Camera', amount: 1500000 }
    ]
}


// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value={{ transactions: state.transactions }}>
            {children}
        </GlobalContext.Provider>
    )
}