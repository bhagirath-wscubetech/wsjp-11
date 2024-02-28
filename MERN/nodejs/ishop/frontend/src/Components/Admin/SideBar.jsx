import React from 'react'
import { MdDashboard } from "react-icons/md";
import { Link } from 'react-router-dom';
import { MdCategory } from "react-icons/md";

export default function SideBar() {
    return (
        <div className='bg-gray-600 min-h-screen'>
            <h2 className='text-white text-4xl text-center my-3'>ISHOP Admin</h2>
            <hr />

            <ul className='text-white ml-[20px] mt-3'>
                <Link to={'/admin'}>
                    <li className='flex gap-3 items-center'>
                        <MdDashboard /> Dashboard
                    </li>
                </Link>
                <Link to={'/admin/category'}>
                    <li className='flex gap-3 items-center'>
                        <MdCategory />  Category
                    </li>
                </Link>
                <Link to={'/admin/color'}>
                    <li className='flex gap-3 items-center'>
                        <MdCategory />  Color
                    </li>
                </Link>
                <Link to={'/admin/product'}>
                    <li className='flex gap-3 items-center'>
                        <MdCategory />  Product
                    </li>
                </Link>
            </ul>
        </div>
    )
}
