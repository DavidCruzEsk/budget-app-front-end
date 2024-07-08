import { Link } from 'react-router-dom';

const Transactions = ({ transactions }) => {

    function totalAccounts() {
        let count = 0;

        transactions.forEach(account => {
            count++;
        });

        return count;
    }

    return (
        <div>
            <h2 className='total-accounts'>Total Bank Accounts: {totalAccounts()}</h2>
            <ul className='transaction-list'>
                {transactions.map((trans, index) => {
                    const { item_name } = trans;
                    return (
                        <li className='account' key={index}>
                            {index + 1 + '. '}<Link className='account-link' to={`/transactions/${index}`}>{item_name}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Transactions;