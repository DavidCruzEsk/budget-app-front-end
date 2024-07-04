import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);
    const API = import.meta.env.VITE_BASE_URL;

    useEffect(() => {
        fetch(API)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setTransactions(data);
            })
            .catch(error => {
                console.error(error);
            })
    }, []);

    return (
        <div>
            <ul>
                {transactions.map((trans, index) => {
                    const { item_name } = trans;
                    return (
                        <li key={index}>
                            <Link to={`/transactions/${index}`}>{item_name}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Transactions;