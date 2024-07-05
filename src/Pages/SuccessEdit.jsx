import React from 'react';
import { Link } from 'react-router-dom';

const SuccessEdit = () => {
    return (
        <div>
            <h1>DATA SUCCESSFULLY EDITED</h1>
            <Link to='/transactions'>
                <button>Transactions</button>
            </Link>
            <Link to='/'>
                <button>Home</button>
            </Link>
        </div>
    );
};

export default SuccessEdit;