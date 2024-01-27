import React, { useContext, useEffect, useState } from 'react';
import { MainContext } from '../Context/Main';
import { useNavigate } from 'react-router-dom';

const Play = () => {
    const { user } = useContext(MainContext);
    const navigate = useNavigate();

    useEffect(
        () => {
            if (user == null) {
                navigate("/login");
            }
        }, [user]
    )

    return (
        <h1 className='text-center text-5xl'>Play</h1>
    )
}

export default Play;
