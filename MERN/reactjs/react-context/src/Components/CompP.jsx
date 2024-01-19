import React, { useContext } from 'react'
import CompQ from './CompQ'
import { MainContext } from '../Context/Main'

export default function CompP() {
    const {count} = useContext(MainContext);
    return (
        <div>
            Comp P - ₹ {500*count}
            <br/>
            <CompQ/>
        </div>
    )
}
