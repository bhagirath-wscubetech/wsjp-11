import React, { useState } from 'react'
import Container from '../Container';
import { FaCaretDown } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { IoCloseSharp } from "react-icons/io5";


export default function Header() {
    const [toggle, setToggle] = useState(false);
    const menuItems = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Store",
            url: "/store"
        },
        {
            name: "Iphone",
            url: "/iphone"
        },
        {
            name: "Ipad",
            url: "/ipad"
        },
        {
            name: "Macbook",
            url: "/macbook"
        },
        {
            name: "Accessories",
            url: "/accessories"
        }
    ]
    return (
        <header>
            <div className='py-3 shadow hidden md:block'>
                <Container className="px-3 flex justify-between items-center">
                    <div className='flex items-center gap-3'>
                        <span>EN</span>
                        <FaCaretDown />
                        <span>$</span>
                        <FaCaretDown />
                    </div>
                    <div className='flex items-center gap-3'>
                        <FaRegUser />
                        <span>My profile</span>
                        <FaBagShopping />
                        <span>2 Items</span>
                        <span className='text-gray-500'>$998</span>
                        <FaSearch className='ml-[50px]' />
                    </div>
                </Container>
            </div>
            <Container className="my-7 flex justify-between px-3 md:justify-center items-center">
                <img src="images/logo.svg" alt="" />
                <GiHamburgerMenu onClick={() => setToggle(true)} className='md:hidden text-3xl' />
            </Container>
            <Container className="flex justify-center">
                <ul className='hidden md:flex gap-4 font-semibold uppercase' typeof='none'>
                    {
                        menuItems.map(
                            (item, index) => {
                                return <Link key={index} to={item.url}>
                                    <li>{item.name}</li>
                                </Link>
                            }
                        )
                    }
                </ul>
                {/* Responsive nav */}
                <div className={`z-[9999999] w-full ${toggle ? ' left-0' : ' left-[-100%]'} duration-100 h-full md:hidden flex flex-col justify-center items-center gap-9 uppercase fixed top-0 responsive-nav`}>
                    <div className='gap-2 bg-white rounded-[10px] w-[80%] flex items-center overflow-hidden'>
                        <FaSearch className='m-2 text-black' />
                        <input type="text" className='text-gray-500 flex-1 py-3 focus:outline-none h-full' placeholder='Search karlo.....' />
                    </div>
                    {
                        menuItems.map(
                            (item, index) => {
                                return <Link key={index} to={item.url}>
                                    <div>{item.name}</div>
                                </Link>
                            }
                        )
                    }
                    <IoCloseSharp onClick={() => setToggle(false)} className='md:hidden text-3xl' />
                </div>
            </Container>
        </header>
    )
}
