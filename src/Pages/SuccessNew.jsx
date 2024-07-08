import React from 'react';
import { Link } from 'react-router-dom';

const SuccessNew = () => {
    return (
        <div>
            <h1 className='success-new'>SUCCESSFULLY CREATED A NEW TRANSACTION RECORD</h1>
            <Link to='/transactions'>
                <button className='buttons-inNew'>Transactions</button>
            </Link>
            <Link to='/'>
                <button className='buttons-inNew'>Home</button>
            </Link>
        </div>
    );
};

export default SuccessNew;