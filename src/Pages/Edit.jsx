import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Edit = () => {
    const { index } = useParams();
    const [transactData, setTransactData] = useState({});
    const API = import.meta.env.VITE_BASE_URL;
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${API}/${index}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setTransactData(data);
            })
            .catch(error => {
                console.error(error);
            })
    }, [API, index]);

    function handleChange(e) {
        const { name, value } = e.target;
        return setTransactData(prevState => {
            return { ...prevState, [name]: value }
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const inputs = document.getElementsByClassName('input');
        const inputsArray = Array.from(inputs);
        const allEmpty = inputsArray.every(input => input.value.trim() === '');

        if (allEmpty) {
            navigate('/emptyForm');
        } else {
            fetch(`${API}/${index}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(transactData)
            })
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    navigate('/success-edit');
                })
                .catch(error => {
                    console.error(error);
                })
        }
    }

    const { item_name, amount, date, from, category } = transactData;

    return (
        <form className='edit-form' onSubmit={handleSubmit}>
            <fieldset>
                <legend>Edit Form</legend>

                <label htmlFor="item-name">{`Item name: "${item_name}"`}</label><br/>
                <input onChange={handleChange} className='input' id='item-name' name='item_name' type="text" placeholder='New Item Name' /><br/><br/>

                <label htmlFor="amount">{`Amount: "${amount}"`}</label><br/>
                <input onChange={handleChange} className='input' id='amount' name='amount' type="number" placeholder='New Amount' /><br/><br/>

                <label htmlFor="date">{`Date: "${date}"`}</label><br/>
                <input onChange={handleChange} className='input' id='date' name='date' type="text" placeholder='New Date /mm/dd/yyyy' /><br/><br/>

                <label htmlFor="buyer">{`Buyer: "${from}"`}</label><br/>
                <input onChange={handleChange} className='input' id='buyer' name='from' type="text" placeholder='New Buyer Name / Employer Name' /><br/><br/>

                <label htmlFor="category">{`Category: "${category}"`}</label><br/>
                <input  onChange={handleChange} className='input' id='category' name='category' type="text" placeholder='New stocks / checkings / savings / retail' /><br/><br/>


                <button className='edit-back' onClick={() => navigate( - 1)}>Back</button>
                <input type="submit" />

            </fieldset>
        </form>
    );
};

export default Edit;