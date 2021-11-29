import React, { createContext,useContext,useReducer } from "react";

//this is  the data-layer

export const StateContext = createContext();

//Wrap our app and provide datat-layer
//build a provider 

export const StateProvider = ({reducer, initialState, children}) => (

    <StateContext.Provider value = {useReducer(reducer, initialState)} >

       {children}
    </StateContext.Provider>
);


//pull information from the data-layer
//this is how we use it inside of a component

export const useStateValue = () => useContext(StateContext);