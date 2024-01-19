import React, { createContext, useState } from 'react'

const MainContext = createContext();

export default function Main(props) {
    const [count, setCount] = useState(0);
    return (
        <MainContext.Provider value={
            {
                count, setCount
            }
        }>
            {props.children}
        </MainContext.Provider>
    )
}

export { MainContext };
