import React from 'react'
import { FaStar } from "react-icons/fa";

export default function ProductBox({name, img, rating, price, discount, hot}) {
    return (
        <div className='py-3 shadow-lg my-3 text-center relative'>
            {
                hot ? <div className='bg-[#FF4858] text-white p-2 absolute'> Hot </div> : ""
            }
            <img src={img} className='mx-auto my-4 block' alt="" />
            <Stars yellow={rating} />
            <div className='font-bold'>{name}</div>
            <div className='my-4 flex justify-center gap-3'>
                <span className='text-[#FF4858]'>${discount}</span>
                <span className='text-[#C1C8CE] line-through'>${price}</span>
            </div>
        </div>
    )
}


function Stars({ yellow }) {
    let starts = [];
    for (var i = 1; i <= 5; i++) {
        if (i <= yellow) {
            starts.push(<FaStar color='#FFC600' />);
        } else {
            starts.push(<FaStar color='#C1C8CE' />);
        }
    }
    return <div className='mt-[30px] flex justify-center'>{starts}</div>;

}
