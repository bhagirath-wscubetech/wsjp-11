import React from 'react'

export default function Listing({ products, cat, range, rating }) {

    if (cat.length != 0) {
        products = products.filter(
            (prod) => {
                if (cat.indexOf(prod.category) != -1) {
                    return true;
                } else {
                    return false;
                }
            }
        )
    }
    if (range.to != 0 && (range.to > range.from)) {
        products = products.filter(
            (prod) => {
                if (prod.price >= range.from && prod.price <= range.to) {
                    return true;
                } else {
                    return false;
                }
            }
        )
    }

    if (rating != null) {
        products = products.filter(
            (prod) => {
                if (prod.rating.rate >= rating) {
                    return true;
                } else {
                    return false;
                }
            }
        )
    }

    return (
        <div className='col-span-4'>
            <div className='px-2 my-3'>
                {products.length} items found
                <hr  className='my-1'/>
            </div>
            <div className="mx-auto max-w-2xl px-4  sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {
                        products.map(
                            (product) => {
                                return (
                                    <div className="group relative" key={product.id}>
                                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                            <img
                                                src={product.image}
                                                alt="Front of men's Basic Tee in black."
                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                            />
                                        </div>
                                        <div className="mt-4 flex gap-2 justify-between">
                                            <div>
                                                <h3 className="text-sm text-gray-700">
                                                    <a href="#">
                                                        <span aria-hidden="true" className="absolute inset-0" />
                                                        {product.title}
                                                    </a>
                                                </h3>
                                                <p className="mt-1 text-sm text-gray-500">{product.rating.rate} / 5</p>
                                            </div>
                                            <p className="text-sm font-medium text-gray-900">${product.price}</p>
                                        </div>
                                    </div>
                                )
                            }
                        )
                    }

                    {/* More products... */}

                </div>


            </div>

        </div>
    )
}
