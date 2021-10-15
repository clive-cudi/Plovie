import React from 'react';
// import { AuthStateContext } from './context';
// import { useContext } from 'react';
// import { userContext } from './userContext';


export function LoginUser(dispatch, data) {
    dispatch({type: 'SET_LOGIN', user: data});
    localStorage.setItem('currentUser', data);
    console.log(data)
    // const token = useContext(AuthStateContext);
}

export function logout(){
    window.onbeforeunload(()=>{
        localStorage.removeItem('currentUser');
    })
    window.location.href = '/login';
}