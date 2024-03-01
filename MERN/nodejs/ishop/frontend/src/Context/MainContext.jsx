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

    const fetchProduct = () => {
        axios.get(API_BASE_URL + PRODUCT_BASE_URL)
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
        <Context.Provider value={{ products, productImageUrl, fetchProduct, openToast, categoryImageUrl, fetchCategory, category, API_BASE_URL, CATEGORY_BASE_URL, COLOR_BASE_URL, colors, fetchColor, PRODUCT_BASE_URL }}>
            <ToastContainer />
            {props.children}
        </Context.Provider>
    )
}


export { Context };