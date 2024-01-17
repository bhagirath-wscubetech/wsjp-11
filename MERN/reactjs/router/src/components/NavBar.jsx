import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        < nav className="bg-blue-500 p-4" >
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-white text-2xl font-bold">
                    YourEdTech
                </a>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-white hover:text-gray-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-white hover:text-gray-300">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/courses" className="text-white hover:text-gray-300">
                            Courses
                        </Link>
                    </li>
                    <li>
                        <Link to="/gallery" className="text-white hover:text-gray-300">
                            Gallery
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
