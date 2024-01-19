import React, { useContext } from 'react'
import { MainCotext } from './Context/Index'
export default function Cart() {
    const { products, cart } = useContext(MainCotext);
    let cartProducts = [];
    let total = 0;
    if (cart.length != 0) {
        cartProducts = products.filter(
            (product) => {
                if (cart.indexOf(product.id) == -1) return false;
                else {
                    total += Number(product.price);
                    return true;
                };
            }
        )
    }

    return (
        <div className='max-w-[1200px] mx-auto'>
            {
                cart.length == 0 ? <h1 className="mt-8 text-3xl font-bold mb-4">Cart khali hai!</h1>
                    : <div className="container mx-auto mt-8 p-4 bg-white rounded shadow">
                        <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
                        <hr className='my-2' />
                        {
                            cartProducts.map(
                                (prod) => {
                                    return <div key={prod.id} className="border-b-2 py-2 flex items-center justify-between">
                                        <div className='flex gap-3 w-[60%] items-center'>
                                            <img src={prod.image} className='w-[100px] h-[100px]' alt="" />
                                            <p className="text-lg font-semibold">{prod.title}</p>
                                        </div>
                                        <p className="text-lg font-semibold">${prod.price}</p>
                                    </div>
                                }
                            )
                        }
                        <div className="mt-4">
                            <p className="text-xl font-bold">Total: ${total}</p>
                        </div>
                    </div>
            }
        </div>
    )
}
