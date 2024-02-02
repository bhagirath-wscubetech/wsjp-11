import React from 'react'
import Container from '../../Components/Container';
import ProductBox from '../../Components/Website/ProductBox';

export default function Home() {
    const products = [
        {
            name: "Apple Macbook Pro",
            img: "images/Apple Macbook Air.png",
            price: 599,
            discount: 499,
            rating: 4,
            hot:true
        }, {
            name: "Apple Macbook Pro",
            img: "images/apple_macbook.png",
            price: 599,
            discount: 499,
            rating: 3,
            hot:true
        }, {
            name: "Apple Macbook Pro",
            img: "images/Apple Macbook Air.png",
            price: 599,
            discount: 499,
            rating: 4
        }, {
            name: "Apple Macbook Pro",
            img: "images/Apple Macbook Air.png",
            price: 599,
            discount: 499,
            rating: 4
        },
    ]
    return (
        <>
            <div className='h-[500px] md:h-[650px] my-1 md:my-6 banner-bg'>
                <Container className="relative h-full">
                    <img src="images/2_corousel.png" className='h-full absolute right-0 bottom-0' alt="" />
                </Container>
            </div>

            <Container>
                <div className='text-[30px] font-bold text-center uppercase'>Best Seller</div>
                <ul className='md:flex hidden justify-center my-3 gap-10'>
                    <li>All</li>
                    <li>Mac</li>
                    <li>iPhone</li>
                    <li>iPad</li>
                    <li>iPod</li>
                    <li>Accessories</li>
                </ul>
                <select className='mx-auto block md:hidden my-3 w-[70%] bg-[#F8F8F8] p-3 focus:outline-none'>
                    <option>All</option>
                    <option>Mac</option>
                    <option>iPhone</option>
                    <option>iPad</option>
                    <option>iPod</option>
                    <option>Accessories</option>
                </select>
            </Container>
            <BestSeller products={products} />
        </>
    )
}


function BestSeller({ products }) {
    return (
        <Container className="lg:grid-cols-4 md:grid-cols-2 px-3 grid gap-5  mb-[400px]">
            {
                products.map(
                    (prod, index) => <ProductBox {...prod} key={index} />
                )
            }

        </Container>
    )
}

