import { createContext, useReducer } from "react";
import { initialState } from "./initialState";
import { reducer } from "./reducer";

export const MyContext = createContext();

export const MyContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <MyContext.Provider value={{state, dispatch}}>
        {children}
        </MyContext.Provider>
    )
}