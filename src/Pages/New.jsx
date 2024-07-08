import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const New = () => {
    const API = import.meta.env.VITE_BASE_URL;
    const navigate = useNavigate();

    const [newData, setNewData] = useState({
        item_name: '',
        amount: '',
        date: '',
        from: '',
        category:  ''
    });

    function handleChange(e) {
        const { name, value } = e.target;
        return setNewData(prevState => {
            return { ...prevState, [name]: value };
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`${API}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newData)
        })
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                navigate('/success-new');
            })
            .catch(error => {
                console.error(error);
            })
    }

    // BUG - The success page is still navigated to, even if there is a bad request in the fetch.
    //BUG - When I send the wrong date format and recieve a bad request, the server claims that the "amount" data is not number, even though the amount is a number, and the actual problem is NOT the amount input type, but the date format being sent in an incorrect format.

    return (
        <form className='new-form' onSubmit={handleSubmit}>
            <fieldset>
                <legend>New Transaction Form</legend>

                <label htmlFor="item-name">Item name: </label><br/>
                <input onChange={handleChange} id='item-name' name='item_name' type="text" placeholder='Item Name' required/><br/><br/>

                <label htmlFor="amount">Amount: </label><br/>
                <input onChange={handleChange} id='amount' name='amount' type="number" placeholder='Amount' required/><br/><br/>

                <label htmlFor="date">Date: </label><br/>
                <input onChange={handleChange} id='date' name='date' type="text" placeholder='Date /mm/dd/yyyy' required/><br/><br/>

                <label htmlFor="buyer">Buyer: </label><br/>
                <input onChange={handleChange} id='buyer' name='from' type="text" placeholder='Buyer Name / Employer Name' required/><br/><br/>

                <label htmlFor="category">Category: </label><br/>
                <input  onChange={handleChange} id='category' name='category' type="text" placeholder='stocks / checkings / savings / retail' required/><br/><br/>

                <input className='new-submit' type="submit" />
            </fieldset>
        </form>
    );
};

export default New;