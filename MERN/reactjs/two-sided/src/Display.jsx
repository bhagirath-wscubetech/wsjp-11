import React from 'react'

export default function Display(props) {
    return (
        <div className='col-6 p-2 my-5'>
            <h2 className='text-center'>{props.title}</h2>
            <ul className='list-unstyled'>
                {
                    props.data.map(
                        (d, i) => {
                            return <li key={i} onClick={() => props.handler(i)} className='position-relative p-2 my-2 shadow-sm rounded'>
                                {d}
                                <span className='position-absolute fw-bold' style={{
                                    right: "20px",
                                    cursor: "pointer",
                                    color: props.color
                                }}>X</span>
                            </li>
                        }
                    )
                }

            </ul>
        </div>
    )
}
