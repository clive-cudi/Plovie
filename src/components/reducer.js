import React from "react";


export const initialState ={
    user: "",
}


//auth reducer

export const AuthReducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case "SET_LOGIN":
            return{
                ...state,
                user: action.user
            };
        default : return initialState;
    }
}