import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

export default function Main() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <NavBar/>
            {/* the changing content  */}
            <Outlet/>
            {/* -------------- */}
            <footer className="bg-gray-800 text-white text-center py-4">
                <p>&copy; 2024 YourEdTech. All rights reserved.</p>
            </footer>
        </div>
    )
}
