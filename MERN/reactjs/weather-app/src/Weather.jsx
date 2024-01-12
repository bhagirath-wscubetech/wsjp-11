import React from 'react'
import { getDateFromStamp } from './helper'
export default function Weather({ weather, fetchWeather }) {

    function keyUpHandler(e) {
        if (e.key == "Enter") {
            fetchWeather(e.target.value)
        }
    }

    return (
        <div className='col-span-3'>
            <input className='text-xl border p-3 w-full' onKeyUp={keyUpHandler} />
            <hr className='my-4' />
            <div className=''>
                {
                    weather == null
                        ? <h1 className='text-5xl text-gray-500 text-center'>Enter the city name</h1>
                        : <>
                            <div className='text-5xl text-center'>{weather.main.temp}° C</div>
                            <div className='py-2 text-center text-xl'>
                                <div>Sunrise: {getDateFromStamp(weather.sys.sunrise * 1000, 1)}</div>
                                <div>Sunset: {getDateFromStamp(weather.sys.sunset * 1000, 1)}</div>
                            </div>
                        </>
                }

            </div>
        </div>
    )
}
