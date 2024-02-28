import React, { useContext, useEffect, useRef, useState } from 'react';
import Select from 'react-select';
import { Context } from '../../../Context/MainContext';
import { FileUploader } from "react-drag-drop-files";

export default function Add() {
    const { fetchCategory, category, fetchColor, colors } = useContext(Context);
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };
    console.log(file);

    useEffect(
        () => {
            fetchCategory();
            fetchColor();
        },
        []
    )

    const discount_price_ref = useRef();
    const discount_pre_ref = useRef();
    const nameRef = useRef();
    const slugRef = useRef();
    const price_ref = useRef();

    // const categoryOptions = [
    //     {
    //         label: "First",
    //         value: 123
    //     },
    //     {
    //         label: "Second",
    //         value: 4332
    //     }
    // ];
    const categoryOptions = category.map(
        (cat) => {
            return {
                label: cat.name,
                value: cat._id
            }
        }
    )
    const colorOptions = colors.map(
        (color) => {
            return {
                label: color.name,
                value: color._id
            }
        }
    )

    // WINDOW + . / V
    function calDiscount() {
        const price = price_ref.current.value;
        const discountPer = discount_pre_ref.current.value;
        if (price != "" && discountPer != "") {
            const d = price * (discountPer / 100);
            discount_price_ref.current.value = price - d;
        }
    }

    const titleToSlug = () => {
        const slug = nameRef.current.value.toLowerCase().trim().replaceAll(" ", "-").replaceAll("'", "");
        slugRef.current.value = slug;
    }

    const formSubmitHandler = () => {

    }

    return (
        <div className='shadow m-5 p-2'>
            <div className='text-2xl'>Add Product</div>
            <hr className='my-2' />
            <form className="p-3" onSubmit={formSubmitHandler}>
                <div className='grid grid-cols-2 gap-4'>
                    <div className="mb-5">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Product Name
                        </label>
                        <input
                            type="text"
                            ref={nameRef}
                            id="name"
                            name='name'
                            onChange={titleToSlug}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Product Slug
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
                </div>
                <div className='grid grid-cols-3 gap-4'>
                    <div className="mb-5">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            ₹ Price
                        </label>
                        <input
                            onChange={calDiscount}
                            ref={price_ref}
                            type="number"
                            id="price"
                            name='price'
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Discount (%)
                        </label>
                        <input
                            onChange={calDiscount}
                            ref={discount_pre_ref}
                            defaultValue={0}
                            type="number"
                            max={99}
                            min={0}
                            id="discount_per"
                            name='discount_per'
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            ₹ Price After Discount
                        </label>
                        <input
                            readOnly
                            ref={discount_price_ref}
                            type="number"
                            id="discount_price"
                            name='discount_price'
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                        />
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <div className="mb-5">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Category
                        </label>
                        <Select
                            className="basic-single"
                            classNamePrefix="select"
                            isSearchable={true}
                            name="category"
                            options={categoryOptions}
                        />

                    </div>
                    <div className="mb-5">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Color
                        </label>
                        <Select
                            closeMenuOnSelect={false}
                            className="basic-single"
                            classNamePrefix="select"
                            isSearchable={true}
                            isMulti
                            name="color"
                            options={colorOptions}
                        />
                    </div>
                </div>
                <div className='mb-5'>
                    <label htmlFor="">Image</label>
                    <FileUploader handleChange={handleChange} name="file" />
                    <span>{file?.name}</span>
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
