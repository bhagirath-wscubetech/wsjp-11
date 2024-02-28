import React, { useContext, useEffect } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
import { Context } from '../../../Context/MainContext';
import { MdDelete } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
export default function View() {

    return (
        <div className='py-7 px-3'>
            <div className='flex justify-between text-3xl'>
                <h2>Product Listing</h2>
                <button>
                    <Link to={"/admin/product/add"}>
                        <IoIosAddCircleOutline />
                    </Link>
                </button>
            </div>
            <div className="relative mt-5 overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Sr
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                       
                    </tbody>
                </table>
            </div>
        </div>
    )
}
