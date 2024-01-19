import React, { useContext } from 'react';
import { MainContext } from '../Context/Main';

function CompC() {
    const { count } = useContext(MainContext);
    // consumer
    return (
        <div>
            Comp C - {count}
        </div>
    )
}

export default CompC
