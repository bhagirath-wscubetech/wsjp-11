import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

const MainCotext = createContext();
export default function Index(props) {
    const [cart, setCart] = useState([]);
    const [products, setProduct] = useState([]);

    useEffect(
        () => {
            axios.get(
                "https://fakestoreapi.com/products",
            ).then(
                (success) => {
                    setProduct(success.data);
                }
            ).catch(
                (error) => {
                    console.log(error);
                }
            )
        },
        []
    )
    const addToCart = (pId) => {
        if (cart.indexOf(pId) == -1) {
            setCart([...cart, pId]);
        }
    }
    const removeFromCart = (pId) => {

    }

    return (
        <MainCotext.Provider value={{ products, cart, addToCart, removeFromCart }}>
            {props.children}
        </MainCotext.Provider>
    )
}

export { MainCotext };