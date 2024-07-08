import React from 'react';
import { Link } from 'react-router-dom';

const FourOFour = () => {
    return (
        <div>
            <h1 className='fourOfour-message'>404: Page not found</h1>
            <Link to='/transactions'>
                <button className='buttons-inFourOFour'>Transactions</button>
            </Link>
            <Link to='/'>
                <button className='buttons-inFourOFour'>Home</button>
            </Link>
        </div>
    );
};

export default FourOFour;