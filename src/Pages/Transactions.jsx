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

    // function grossSumOfAllAccounts() {
    //     let grossSum = 0;

    //     transactions.forEach(trans => {
    //         return grossSum += trans.amount;
    //     });

    //     return (
    //         <section className='gross-section'>
    //             <h3 className='gross-header'>
    //                 <span className='gross-intro'>Gross Sum of All Accounts: </span><span id='gross-number'>${grossSum}</span>
    //             </h3>
    //         </section>
    //     )
    // }

    return (
        <div>
            {/* {grossSumOfAllAccounts()} */}
            <ul className='transaction-list'>
                {transactions.map((trans, index) => {
                    const { item_name } = trans;
                    return (
                        <li className='account' key={index}>
                            <Link to={`/transactions/${index}`}>{item_name}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Transactions;