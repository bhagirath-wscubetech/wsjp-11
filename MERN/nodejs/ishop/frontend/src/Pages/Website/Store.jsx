import React, { useContext, useEffect, useState } from 'react';
import Container from '../../Components/Container';
import { Context } from '../../Context/MainContext';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import ProductBox from '../../Components/Website/ProductBox';

export default function Store() {
    const { category, products, colors, API_BASE_URL, categoryImageUrl, productImageUrl, fetchProduct, fetchCategory, fetchColor } = useContext(Context);
    const [limit, setLimit] = useState(5);
    const { category_slug } = useParams();
    const [selColor, setSelColor] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    useEffect(
        () => {

            fetchCategory();
            fetchColor()

            if (searchParams.get('color_id')) {
                setSelColor(searchParams.get('color_id'));
            }
            if (searchParams.get('limit')) {
                setLimit(searchParams.get('limit'));
            }
        },
        []
    )

    useEffect(
        () => {
            fetchProduct(limit, selColor, category_slug);
            const searchQuery = {
                limit
            };
            if (selColor) {
                searchQuery.color_id = selColor
            }
            setSearchParams(searchQuery);

        }, [limit, category_slug, selColor]
    )



    function generateRandomColor() {
        // Generate random values for red, green, and blue
        var r = Math.floor(Math.random() * 100);
        var g = Math.floor(Math.random() * 100);
        var b = Math.floor(Math.random() * 100);

        // Construct a CSS color string
        return "rgb(" + r + "," + g + "," + b + ")";
    }

    function generateRandomGradient() {
        // Generate two random colors
        var color1 = generateRandomColor();
        var color2 = generateRandomColor();

        // Construct the gradient CSS string
        var gradient = "linear-gradient(to right, " + color1 + ", " + color2 + ")";

        return gradient;
    }


    return (
        <Container>
            <div className='grid grid-cols-4 gap-5 my-4'>
                <div className='h-[500px]'>
                    <div className='bg-[#F6F7F8] p-3'>
                        <div className='text-[18px] font-semibold'>Categories</div>
                        <ul>
                            <Link to={"/store"}>
                                <li className='my-2 cursor-pointer'>All</li>
                            </Link>
                            {
                                category.map(
                                    (cat) => {
                                        return (
                                            <Link key={cat._id} to={"/store/" + cat.slug}>
                                                <li style={
                                                    {
                                                        fontWeight: category_slug == cat.slug ? 'bold' : 'normal'
                                                    }
                                                } className='my-2 cursor-pointer'> {cat.name} </li>
                                            </Link>
                                        )

                                    }
                                )
                            }
                        </ul>
                    </div>
                    <div className='bg-[#F6F7F8] p-3 my-3'>
                        <div className='text-[18px] font-semibold'>Colors</div>
                        <ul>
                            {
                                colors.map(
                                    (col) => {
                                        return <li onClick={() => setSelColor(col._id)} key={col._id} className='flex gap-2 items-center my-2 cursor-pointer'
                                            style={
                                                {
                                                    fontWeight: selColor == col._id ? 'bold' : 'normal'
                                                }
                                            }
                                        >
                                            <span style={{
                                                display: "inline-block",
                                                padding: 10,
                                                background: col.code,
                                            }}></span>
                                            {col.name}
                                        </li>
                                    }
                                )
                            }
                        </ul>
                        <button onClick={() => setSelColor(null)} className='w-full p-3 border bg-black text-white block'>Reset</button>
                    </div>
                </div>
                <div className='h-[500px] col-span-3'>
                    <Slider {...settings}>
                        {
                            category.map(
                                (cat) => {
                                    return <div key={cat._id} className='h-[350px] relative'>
                                        <div style={{
                                            background: generateRandomGradient(),
                                            height: "100%"
                                        }} >
                                            <div className='ml-5 pt-10'>
                                                <div className='text-white text-3xl'>{cat.name}</div>
                                                <Link to={"/store/" + cat.slug}>
                                                    <div className='text-white'>Shop Now</div>
                                                </Link>
                                            </div>
                                            <img className='w-[300px] absolute bottom-[10px] right-[10px]' src={API_BASE_URL + categoryImageUrl + cat.image} alt="" />
                                        </div>
                                    </div>
                                }
                            )
                        }
                    </Slider>
                    {/* product listing */}
                    <div className='bg-[#F6F7F8] py-3 my-7'>
                        <select value={limit} onChange={(e) => setLimit(e.target.value)} className='p-2 ml-3 focus:outline-none bg-transparent'>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                            <option value="0">All</option>
                        </select>
                    </div>
                    <div className='my-3 grid grid-cols-3 gap-4'>
                        {
                            products.map(
                                (prod) => {
                                    return <ProductBox {...prod} key={prod._id} />
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        </Container>
    )
}
