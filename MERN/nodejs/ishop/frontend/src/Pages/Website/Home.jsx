import React, { useContext, useEffect, useState } from 'react'
import Container from '../../Components/Container';
import ProductBox from '../../Components/Website/ProductBox';
import { Context } from '../../Context/MainContext';

export default function Home() {
    let { category, fetchCategory, setLoader, products, fetchProduct } = useContext(Context);
    const [selCat, setSelCat] = useState(0);
    const [filterProducts, setFilterProduct] = useState([]);
    useEffect(
        () => {
            fetchCategory();
            fetchProduct();
        }, []
    )
    useEffect(
        () => {
            setLoader(true);
            if (selCat != 0) {
                const data = products.filter(
                    (prod) => {
                        if (prod.category_id._id == selCat) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                )
                setFilterProduct(data);
            }
            setTimeout(
                () => {
                    setLoader(false);
                },
                300
            )
        }, [selCat]
    )
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
                    <li onClick={() => setSelCat(0)} className={`${selCat == 0 ? 'text-blue-500 font-bold ' : ''} cursor-pointer`}>All</li>
                    {
                        category.map(
                            (cat) => {
                                return <li onClick={() => setSelCat(cat._id)}
                                    className={`${selCat == cat._id ? 'text-blue-500 font-bold' : ''} cursor-pointer`}>
                                    {cat.name}</li>
                            }
                        )
                    }
                </ul>
                <select onChange={(e) => setSelCat(e.target.value)} className='mx-auto block md:hidden my-3 w-[70%] bg-[#F8F8F8] p-3 focus:outline-none'>
                    <option value={0}>All</option>
                    {
                        category.map(
                            (cat) => {
                                return <option value={cat._id}>{cat.name}</option>
                            }
                        )
                    }
                </select>
            </Container>
            <BestSeller products={selCat == 0 ? products : filterProducts} />
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

