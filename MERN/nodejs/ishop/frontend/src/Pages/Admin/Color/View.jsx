import React, { useContext, useEffect } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
import { Context } from '../../../Context/MainContext';
import { MdDelete } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
export default function View() {
    const { fetchColor, colors } = useContext(Context);
    useEffect(
        () => {
            fetchColor();
        }
    )

    const changeStatus = () => {

    }
    return (
        <div className='py-7 px-3'>
            <div className='flex justify-between text-3xl'>
                <h2>Color Listing</h2>
                <button>
                    <Link to={"/admin/color/add"}>
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
                        {
                            colors.map(
                                (color, i) => {
                                    return <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="px-6 py-4">{i + 1}</td>
                                        <td className="px-6 py-4">{color.name}</td>
                                        <td className="px-6 py-4">
                                            <span className="block p-3" style={{ background: color.code }}></span>
                                        </td>
                                        <td className="px-6 py-4">
                                            {
                                                color.status
                                                    ? <button onClick={() => changeStatus(color._id, false)} className='p-2 border text-white bg-green-500'>Active</button>
                                                    : <button onClick={() => changeStatus(color._id, true)} className='p-2 border bg-orange-500 text-white'>Inactive</button>
                                            }
                                        </td>
                                        <td className="px-6 py-4 flex gap-3">
                                            <MdDelete className='cursor-pointer text-red-500' />
                                            <Link to={"/admin/color/edit/" + color._id}>
                                                <CiEdit className='cursor-pointer' />
                                            </Link>
                                        </td>
                                    </tr>
                                }
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
