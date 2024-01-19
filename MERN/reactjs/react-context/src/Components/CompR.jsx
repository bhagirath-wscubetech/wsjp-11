import React, { useContext } from 'react'
import { MainContext } from '../Context/Main'

export default function CompR() {
    const { count, setCount } = useContext(MainContext);
    return (
        <div>
            Comp R
            <button onClick={() => setCount(count - 1)}>Desc</button>
            <button onClick={() => setCount(count + 1)}>Inc</button>
        </div>
    )
}
