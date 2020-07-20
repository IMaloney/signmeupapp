import React, { useReducer } from 'react';


const Context = React.createContext();

const Provider = (reducer, actions, initialState) => {
	const [state, dispatch] = useReducer(reducer, initialState);


	 
};