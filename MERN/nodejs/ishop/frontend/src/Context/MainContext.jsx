import React, { createContext } from 'react'
const Context = createContext();
export default function MainContext(props) {
    return (
        <Context.Provider>
            {props.children}
        </Context.Provider>
    )
}


export { Context };