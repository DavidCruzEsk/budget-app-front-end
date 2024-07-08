import React from 'react';
import { Link } from 'react-router-dom';

const SuccessDelete = () => {
    return (
        <div>
            <h1 className='success-delete'>DATA SUCCESSFULLY DELETED</h1>
            <Link to='/transactions'>
                <button className='buttons-inDelete'>Transactions</button>
            </Link>
            <Link to='/'>
                <button className='buttons-inDelete'>Home</button>
            </Link>
        </div>
    );
};

export default SuccessDelete;