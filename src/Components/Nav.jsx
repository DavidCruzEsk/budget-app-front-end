import { Link } from 'react-router-dom';

const Nav = ({ transactions }) => {

    function grossSumOfAllAccounts() {
        let grossSum = 0;
    
        transactions.forEach(trans => {
            return grossSum += trans.amount;
        });

        function grossStyleColor() {
            if (grossSum <= 0) {
                return 'grossLessThan0';
            } else if (grossSum > 0 && grossSum <= 10000) {
                return 'betweenZeroandTenK';
            } else if (grossSum > 10000) {
                return 'grossHigherThanTenK';
            }
        }
    
        return (
            <section className='gross-section'>
                <h3 className='gross-header'>
                    <span className='gross-intro'>Gross Sum of All Accounts: </span><span className={grossStyleColor()} id='gross-number'>${grossSum}</span>
                </h3>
            </section>
        )
    }

    return (
        <nav className='nav-div'>
            <Link to='/'>
                <h3 className='nav-mainHeader'>BudgetApp</h3>
            </Link>
            {grossSumOfAllAccounts()}
            <ul className='nav-ul'>
                <li>
                    <Link to='/transactions'>
                        <span className='nav-transactions'>Transactions</span>
                    </Link>
                </li>
                <li>
                    <Link to='/transactions/new'>
                        <span className='nav-new'>New</span>
                    </Link>
                </li>
                <li>
                    <Link to='/about'>
                        <span className='nav-about'>About</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;