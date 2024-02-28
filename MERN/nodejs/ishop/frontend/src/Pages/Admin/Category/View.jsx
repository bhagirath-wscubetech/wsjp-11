import React, { useContext, useRef, useState } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import { Context } from '../../../Context/MainContext';
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

export default function View() {
    const [toggle, setToggle] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const { openToast, fetchCategory, category, categoryImageUrl, API_BASE_URL, CATEGORY_BASE_URL } = useContext(Context);

    const nameRef = useRef();
    const slugRef = useRef();
    const categoryIdRef = useRef();
    const oldNameRef = useRef();

    const titleToSlug = () => {
        const slug = nameRef.current.value.toLowerCase().trim().replaceAll(" ", "-").replaceAll("'", "");
        slugRef.current.value = slug;
    }

    const deleteData = (id) => {
        axios.delete(API_BASE_URL + CATEGORY_BASE_URL + "/delete/" + id)
            .then(
                (success) => {
                    if (success.data.status == 1) {
                        fetchCategory();
                        openToast(success.data.msg, "success");
                    } else {
                        openToast(success.data.msg, "error");
                    }
                }
            )
            .catch(
                () => {
                    openToast("Client side error", "error");
                }
            )
    }

    const editCat = (category) => {
        setIsUpdate(true);
        categoryIdRef.current.value = category._id;
        nameRef.current.value = category.name;
        slugRef.current.value = category.slug;
        oldNameRef.current.value = category.image;
        setToggle(true);
    }


    const changeStatus = (id, new_status) => {
        axios.patch(API_BASE_URL + CATEGORY_BASE_URL + "/change-status/" + id + "/" + new_status)
            .then(
                (success) => {
                    if (success.data.status) {
                        openToast(success.data.msg, "success");
                        fetchCategory();
                    } else {
                        openToast(success.data.msg, "error");
                    }
                }
            ).catch(
                (error) => {
                    openToast(error.message, "error");
                }
            )
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const slug = event.target.slug.value;
        const image = event.target.image.files[0];

        if (name != "" && slug != "") {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("slug", slug);
            formData.append("image", image);
            if (isUpdate) {
                const cId = event.target.category_id.value;
                formData.append("old_name", event.target.old_name.value);
                axios.put(`${API_BASE_URL + CATEGORY_BASE_URL}/update/${cId}`, formData)
                    .then(
                        (success) => {
                            if (success.data.status == 1) {
                                event.target.reset();
                                setToggle(false);
                                openToast(success.data.msg, "success");
                                fetchCategory();
                            } else {
                                openToast(success.data.msg, "error");
                            }
                        }
                    ).catch(
                        (error) => {
                            console.log(error);
                        }
                    )
            } else {
                axios.post(`${API_BASE_URL + CATEGORY_BASE_URL}/create`, formData)
                    .then(
                        (success) => {
                            if (success.data.status == 1) {
                                event.target.reset();
                                setToggle(false);
                                openToast(success.data.msg, "success");
                                fetchCategory();
                            } else {
                                openToast(success.data.msg, "error");
                            }
                        }
                    ).catch(
                        (error) => {
                            console.log(error);
                        }
                    )
            }

        }
    }


    return (
        <div className='py-7 px-3'>

            <div className={`${toggle == true ? 'flex' : 'hidden'} justify-center items-center w-full h-full fixed top-0 left-0 z-[9999]`} style={{ background: "rgba(0,0,0,0.6)" }}>
                <div className='w-[60%] mx-auto bg-white shadow rounded'>
                    <div className='text-3xl font-semibold p-3 flex justify-between items-center'>
                        {isUpdate ? "Edit" : "Add"} Category
                        <button onClick={() => setToggle(false)} >
                            <IoMdClose />
                        </button>
                    </div>
                    <hr />
                    <form encType='multipart/form-data' className="p-3" onSubmit={formSubmitHandler}>
                        <div className='grid grid-cols-2 gap-4'>
                            <input type="hidden" name='category_id' ref={categoryIdRef} />
                            <input type="hidden" name='old_name' ref={oldNameRef} />
                            <div className="mb-5">
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Category Name
                                </label>
                                <input
                                    onChange={titleToSlug}
                                    ref={nameRef}
                                    type="text"
                                    id="name"
                                    name='name'
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="slug"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Category Slug
                                </label>
                                <input
                                    readOnly
                                    ref={slugRef}
                                    type="text"
                                    id="slug"
                                    name='slug'
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                />
                            </div>
                            <div className="mb-5 col-span-2">
                                <label
                                    htmlFor="image"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Category Image
                                </label>
                                <input
                                    type="file"
                                    id="image"
                                    name='image'
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            </div>


            <div className='flex justify-between text-3xl'>
                <h2>Category Listing</h2>
                <button>
                    <IoIosAddCircleOutline onClick={() => {
                        setToggle(true);
                        setIsUpdate(false);
                    }} />
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
                        {
                            category.map(
                                (cat, index) => {
                                    return (
                                        <tr key={cat._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td scope="row" className="px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white">
                                                {index + 1}
                                            </td>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {cat.name}
                                            </th>
                                            <td className="px-6 py-4">
                                                {cat.slug}
                                            </td>
                                            <td className="px-6 py-4">
                                                {/* {cat.image} */}
                                                <img width={150} src={API_BASE_URL + categoryImageUrl + cat.image} alt="" />
                                            </td>
                                            <td className="px-6 py-4 text-white">
                                                {
                                                    cat.status == true
                                                        ? <button onClick={() => changeStatus(cat._id, false)} className='p-2 border bg-green-500'>Active</button>
                                                        : <button onClick={() => changeStatus(cat._id, true)} className='p-2 border bg-orange-500'>Inactive</button>
                                                }
                                            </td>
                                            <td className="px-6 py-4 text-xl flex gap-3">
                                                <MdDelete onClick={() => deleteData(cat._id)} className='cursor-pointer text-red-500' />
                                                <CiEdit onClick={() => editCat(cat)} className='cursor-pointer' />
                                            </td>
                                        </tr>
                                    )
                                }
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}
