import React, { useRef } from 'react'

export default function Input(props) {
    const inpRef = useRef();

    function getData(){
        props.handler(inpRef.current.value);
        inpRef.current.value = "";
    }

    return (
        <div className='my-3 row'>
            <div className='col-10'>
                <input type="text" className='form-control' ref={inpRef}/>
            </div>
            <div className='col-2'>
                <button onClick={getData} className='btn btn-primary d-block container-fluid'>Add</button>
            </div>
        </div>
    )
}
