import React, { useState } from 'react'

export default function Display(props) {
    return (
        <ul className='list-unstyled'>
            {
                props.items.map(
                    (item, index) => {
                        return <ListItem task={item} key={index} handler={() => props.removeHandler(index)} />
                    }
                )
            }
        </ul>
    )
}


const ListItem = (props) => {
    const [toggle, setToggle] = useState(false);
    return (
        // <li onClick={() => setToggle(!toggle)} className='p-2 shadow-sm rounded my-3 position-relative' style={{
        //     textDecoration: toggle == true ? 'line-through' : '',
        //     color: toggle == true ? 'gray' : ''
        // }}>
        // 
        
        // dynamic styling
        <li onClick={() => setToggle(!toggle)}
            className={`p-2 shadow-sm rounded my-3 position-relative ${toggle == true ? 'text-decoration-line-through text-muted' : ""}`}>
            {props.task}
            <span onClick={props.handler} className='fw-bold position-absolute'
                style={{ right: "20px", cursor: "pointer" }}>X</span>
        </li>
    )
}