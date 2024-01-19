import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'

export default function MainPage() {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}
