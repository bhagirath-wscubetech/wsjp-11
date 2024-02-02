import React from 'react'
import Header from '../../Components/Website/Header'
import Footer from '../../Components/Website/Footer'
import { Outlet } from 'react-router-dom'

export default function Main() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}
