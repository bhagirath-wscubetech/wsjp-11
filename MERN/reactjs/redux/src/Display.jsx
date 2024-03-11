import React from 'react'
import { useSelector } from 'react-redux';

export default function Display() {
    const counter = useSelector(store => store.counter);
    return (
        <div>{counter.count}</div>

    )
}
