import React, { useContext, useReducer } from 'react';
import { AuthReducer, initialState } from './reducer';
import { useState } from 'react';

//create a context that determines if a user is logged in or not
//loggedin ? hasToken = true : has token = false

//auth state context

const AuthStateContext = React.createContext();
const AuthDispatchContext = React.createContext();
const AuthStateCurrentContext = React.createContext();
const CurrentUserContext = React.createContext();

export const AuthStateProvider = ({children}) =>{
    const [authState, setAuthState] = useState(false);
    const [user, setUser] = useState(null);

    return (
        <AuthStateCurrentContext.Provider value={[authState, setAuthState]}>
            <CurrentUserContext.Provider value={[user, setUser]}>
                {children}
            </CurrentUserContext.Provider>
        </AuthStateCurrentContext.Provider>
    )
}


//custom hooks for AuthStateContext and AuthDispatchContext

export function useAuthState(){
    const context = React.useContext(AuthStateContext);
    if (context === undefined){
        throw new Error("useAuthState must be used within provider")
    } else {
        return context;
    }
}

export function useAuthDispatch() {
    const context = React.useContext(AuthDispatchContext);
    if (context === undefined){
        throw new Error("useAuthDispatch must be used within provider")
    } else {
        return context;
    }
}

export const AuthProvider = ({children}) =>{
    const [user, dispatch] = useReducer(AuthReducer, initialState);

    return (
        <AuthStateContext.Provider value={user} >
            <AuthDispatchContext.Provider value={dispatch} >
                {children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    )
}


export {AuthStateContext, AuthDispatchContext, AuthStateCurrentContext};