import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>
                        <h3>BudgetApp</h3>
                    </Link>
                </li>
                <li>
                    <Link to='/transactions'>
                        <span>Transactions</span>
                    </Link>
                </li>
                <li>
                    <Link to='/transactions/new'>
                        <span>New</span>
                    </Link>
                </li>
                <li>
                    <Link to='/about'>
                        <span>About</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;