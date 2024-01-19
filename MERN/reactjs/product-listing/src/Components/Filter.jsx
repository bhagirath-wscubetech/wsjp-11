import React, { useContext, useRef } from 'react'
import { MainCotext } from '../Context/Index';

export default function Filter({ rating, ratingHandler, categories, cat, catHandler, range, rangeHandler }) {
    const ratingForm = useRef();
    const {products} = useContext(MainCotext);

    const clearFilter = () => {
        catHandler(null);
        rangeHandler({ to: 0, from: 0 });
        ratingHandler(null);
        ratingForm.current.reset();
    }


    const getItemsCount = (category) => {
        let itemCount = 0;
        for (let p of products) {
            if (p.category == category) {
                itemCount++;
            }
        }
        return "(" + itemCount + ")";
    }

    return (
        <div className='p-3'>
            <div className='p-2 shadow'>
                <div className='text-xl font-bold'>Categories</div>
                <hr className='mt-3' />
                <ul className='items-box'>
                    <li onClick={() => catHandler(null)} className={`capitalize duration-[250ms] cursor-pointer p-2 border-b
                            ${cat.length == 0 ? 'active-cat' : ''}
                        `}> All ({products.length})</li>
                    {
                        categories.map(
                            (category, index) => {
                                return <li onClick={() => catHandler(category)} className={`duration-[250ms] capitalize cursor-pointer p-2
                                ${cat.indexOf(category) != -1 ? 'active-cat' : ''}
                                ${(index == categories.length - 1) ? '' : 'border-b'}`} key={index}>
                                    {category} {cat.indexOf(category) != -1 ? getItemsCount(category) : ""}
                                </li>
                            }
                        )
                    }
                </ul>
            </div>

            <div className='p-2 shadow my-3'>
                <div className='text-xl font-bold'>Price</div>
                <hr className='my-3' />
                <input type='number' value={range.from} onChange={
                    (e) => {
                        rangeHandler({
                            from: parseInt(e.target.value),
                            to: range.to
                        })
                    }
                } className={`w-full m-1 p-1 border focus:outline-none ${range.from > range.to ? '!border-red-400' : ''}`} />
                <div className='text-center'>To</div>
                <input type='number' min={parseInt(range.from) + 1} value={range.to} onChange={
                    (e) => {
                        rangeHandler({
                            to: parseInt(e.target.value),
                            from: range.from
                        })
                    }
                } className="w-full m-1 p-1 border focus:outline-none" />
            </div>


            <div className='p-2 shadow my-3'>
                <div className='text-xl font-bold'>Rating</div>
                <hr />
                <ul className='my-3'>
                    <form ref={ratingForm}>
                        <li onClick={() => ratingHandler(4)} className={`${rating == 4 ? 'font-bold' : ''} cursor-pointer mt-1`}>
                            <input type="radio" name='rating' />
                            4 & Above
                        </li>
                        <li onClick={() => ratingHandler(3)} className={`${rating == 3 ? 'font-bold' : ''} cursor-pointer mt-1`}>
                            <input type="radio" name='rating' />
                            3 & Above
                        </li>
                        <li onClick={() => ratingHandler(2)} className={`${rating == 2 ? 'font-bold' : ''} cursor-pointer mt-1`}>
                            <input type="radio" name='rating' />
                            2 & Above
                        </li>
                        <li onClick={() => ratingHandler(1)} className={`${rating == 1 ? 'font-bold' : ''} cursor-pointer mt-1`}>
                            <input type="radio" name='rating' />
                            1 & Above
                        </li>
                    </form>
                </ul>
            </div>

            <button onClick={clearFilter} className='p-3 text-white bg-red-600 w-full block'>Clear Filter</button>
        </div>
    )
}
