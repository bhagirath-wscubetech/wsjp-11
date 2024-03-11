import React, { useContext } from 'react'
import { FaStar } from "react-icons/fa";
import { Context } from '../../Context/MainContext';

export default function ProductBox({ name, image, rating = 4, price, discount_price, discount_precent, hot }) {
    const { API_BASE_URL, productImageUrl } = useContext(Context);
    return (
        <div className='py-3 shadow-lg my-3 text-center relative'>
            {
                hot ? <div className='bg-[#FF4858] text-white p-2 absolute'> Hot </div> : ""
            }
            <img src={API_BASE_URL + productImageUrl + image} className='mx-auto my-4 block' alt="" />
            <Stars yellow={rating} />
            <div className='font-bold'>{name}</div>
            <div className='my-4'>
                {
                    discount_precent == 0
                        ? <span className='text-[#FF4858]'>${price}</span>
                        :
                        <>
                            <span className='text-[#FF4858]'>${discount_price} ({discount_precent} % off)</span>
                            <br />
                            <span className='text-[#C1C8CE] line-through'>${price}</span>
                        </>
                }

            </div>
        </div>
    )
}


function Stars({ yellow }) {
    let starts = [];
    for (var i = 1; i <= 5; i++) {
        if (i <= yellow) {
            starts.push(<FaStar key={i} color='#FFC600' />);
        } else {
            starts.push(<FaStar key={i} color='#C1C8CE' />);
        }
    }
    return <div className='mt-[30px] flex justify-center'>{starts}</div>;

}
