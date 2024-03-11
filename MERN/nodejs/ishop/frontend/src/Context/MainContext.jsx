import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Toastify__toast Toastify__toast-theme--light Toastify__toast--error
const Context = createContext();
export default function MainContext(props) {
    const [category, setCategory] = useState([]);
    const [categoryImageUrl, setCategoryImageUrl] = useState("");
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    const CATEGORY_BASE_URL = process.env.REACT_APP_CATEGORY_BASE_URL;
    const [colors, setColor] = useState([]);
    const COLOR_BASE_URL = process.env.REACT_APP_COLOR_BASE_URL;
    const PRODUCT_BASE_URL = process.env.REACT_APP_PRODUCT_BASE_URL;
    const [products, setProduct] = useState([]);
    const [productImageUrl, setProductImageUrl] = useState("");
    const [loader, setLoader] = useState(false);


    const fetchProduct = (limit = 0, color_id = null, category_slug = null) => {
        const urlQuery = new URLSearchParams({ limit, color_id, category_slug });
        axios.get(API_BASE_URL + PRODUCT_BASE_URL + `?${urlQuery.toString()}`)
            .then(
                (success) => {
                    if (success.data.status == 1) {
                        setProduct(success.data.product);
                        setProductImageUrl(success.data.imageBaseUrl)
                    }
                }
            ).catch(
                () => {

                }
            )
    }

    const fetchCategory = () => {
        axios.get(API_BASE_URL + CATEGORY_BASE_URL)
            .then(
                (success) => {
                    if (success.data.status == 1) {
                        setCategory(success.data.category);
                        setCategoryImageUrl(success.data.imageBaseUrl);
                    } else {

                    }
                }
            ).catch(
                (error) => {

                }
            )
    }

    const fetchColor = () => {
        axios.get(API_BASE_URL + COLOR_BASE_URL)
            .then(
                (success) => {
                    if (success.data.status == 1) {
                        setColor(success.data.colors);
                    } else {

                    }
                }
            ).catch(
                (error) => {

                }
            )
    }

    const openToast = (msg, flag) => {
        toast(msg, { type: flag });
    }

    useEffect(
        () => {
            fetchCategory();
            fetchColor();
        },
        []
    )

    return (
        <Context.Provider value={{ products, productImageUrl, fetchProduct, openToast, categoryImageUrl, fetchCategory, category, API_BASE_URL, CATEGORY_BASE_URL, COLOR_BASE_URL, colors, fetchColor, PRODUCT_BASE_URL, setLoader }}>
            <div style={
                {
                    background: "rgba(0,0,0,0.8)",
                    display: loader ? 'flex' : 'none'
                }
            } className="fixed top-0 left-0 justify-center items-center h-screen w-full z-[99999]">
                <div role="status">
                    <svg aria-hidden="true" className="w-[100px] h-[100px] text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            <ToastContainer />
            {props.children}
        </Context.Provider>
    )
}


export { Context };