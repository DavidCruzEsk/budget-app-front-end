import React from 'react';
import { Link } from 'react-router-dom';

const SuccessEdit = () => {
    return (
        <div>
            <h1 className='success-edit'>DATA SUCCESSFULLY EDITED</h1>
            <Link to='/transactions'>
                <button  className='buttons-inEdit'>Transactions</button>
            </Link>
            <Link to='/'>
                <button  className='buttons-inEdit'>Home</button>
            </Link>
        </div>
    );
};

export default SuccessEdit;