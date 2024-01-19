import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MainCotext } from '../Context/Index'

export default function Header() {
    const { cart } = useContext(MainCotext);
    return (
        <div className='shadow-lg p-3 sticky top-0 bg-white z-[999999999]'>
            <nav className='mx-auto max-w-[1200px]'>
                <ul className='flex gap-6 justify-end'>
                    <li>
                        <Link to={"/"}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={"/cart"}>
                            Cart ({cart.length})
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
