import React from 'react'
import { getDateFromStamp, getTimeDifference } from './helper'

export default function History({ history }) {
    return (
        <div className='border'>
            <div className='text-2xl font-bold p-3 text-center'>History</div>
            <ul className='px-2'>
                {
                    history.map(
                        (h, i) => {
                            return <li key={i} className='relative'>
                                {h.name}
                                <span className='text-gray-500 right-[20px] absolute text-sm'>
                                    ({getTimeDifference(h.timestamp, h.name)})
                                </span>
                            </li>
                        }
                    )
                }
            </ul>
        </div>
    )
}
