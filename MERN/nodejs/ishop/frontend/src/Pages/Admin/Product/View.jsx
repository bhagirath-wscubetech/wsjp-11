import React, { useContext, useEffect } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
import { Context } from '../../../Context/MainContext';
import { MdDelete } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
export default function View() {
    const { fetchProduct, API_BASE_URL, products, productImageUrl } = useContext(Context);

    useEffect(
        () => {
            fetchProduct();
        }, []
    )

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
                                Slug
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Image
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
                        {products.map(
                            (product, index) => {
                                return (
                                    <tr key={product._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td scope="row" className="px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white">
                                            {index + 1}
                                        </td>
                                        <td scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                            {product.name}
                                            <br />
                                            Original ₹ {product.price}
                                            <br />
                                            Discounted ₹ {product.discount_price}
                                        </td>
                                        <td className="px-6 py-4">
                                            {product.slug}
                                        </td>
                                        <td className="px-6 py-4">
                                            {product.category_id.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            <ul>
                                                {
                                                    product.color.map(
                                                        (color) => {
                                                            return <li>{color.name}</li>
                                                        }
                                                    )
                                                }
                                            </ul>
                                        </td>
                                        <td className="px-6 py-4">
                                            {/* {cat.image} */}
                                            <img width={150} src={API_BASE_URL + productImageUrl + product.image} alt="" />
                                        </td>
                                        <td className="px-6 py-4 text-white">
                                            {
                                                product.status == true
                                                    ? <button className='p-2 border bg-green-500'>Active</button>
                                                    : <button className='p-2 border bg-orange-500'>Inactive</button>
                                            }
                                        </td>
                                        <td className="px-6 py-4 text-xl flex gap-3">
                                            <MdDelete className='cursor-pointer text-red-500' />
                                            <Link to={"/admin/product/edit/" + product._id}>
                                                <CiEdit className='cursor-pointer' />
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            }
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
