import React, { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Context } from '../../../Context/MainContext';
import axios from 'axios';

export default function Edit() {
    const { id } = useParams();
    const { API_BASE_URL, COLOR_BASE_URL, openToast } = useContext(Context);
    const [color, setColor] = useState({ name: "", code: "" });
    useEffect(
        () => {
            if (id != undefined) {
                axios.get(API_BASE_URL + COLOR_BASE_URL + "/" + id)
                    .then(
                        (success) => {
                            if (success.data.status) {
                                setColor(success.data.colors);
                            } else {
                                openToast(success.data.msg, "error");
                            }
                        }
                    ).catch(
                        () => {

                        }
                    )
            }
        }, [id]
    )

    const formSubmitHandler = () => {

    }
    return (
        <div className='shadow m-5 p-2'>
            <div className='text-2xl'>Edit Color</div>
            <hr className='my-2' />
            <form className="p-3" onSubmit={formSubmitHandler}>
                <div className='grid grid-cols-2 gap-4'>
                    <div className="mb-5">
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Color Name
                        </label>
                        <input
                            value={color?.name}
                            onChange={
                                (e) => {
                                    setColor({ ...color, name: e.target.value })
                                }
                            }
                            type="text"
                            id="name"
                            name='name'
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="color"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Color
                        </label>
                        <input
                            value={color?.code}
                            onChange={(e) => { setColor({ ...color, code: e.target.value }) }}
                            type="color"
                            id="color"
                            name='color'
                            className="h-[50px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}
