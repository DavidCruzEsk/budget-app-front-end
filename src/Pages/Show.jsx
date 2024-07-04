import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import SuccessDelete from './SuccessDelete';

const Show = () => {
    const { index } = useParams();
    const [showData, setShowData] = useState([]);
    const navigate = useNavigate();

    const API = import.meta.env.VITE_BASE_URL;

    useEffect(() => {
        fetch(`${API}/${index}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setShowData(data);
            })
            .catch(error => {
                console.error(error);
            })
    }, [API, index]);

    const { item_name, amount, date, from, category } = showData;

    function deleteTransData() {
        fetch(`${API}/${index}`, {
            method: 'DELETE',
        })
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log('Data deleted:',data);
                navigate(`/success-delete`);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div>
            <h1>Show Page</h1>
            <ul>
                <li>{item_name}</li>
                <li>{`Amount: ${amount}`}</li>
                <li>{`Purchase date: ${date}`}</li>
                <li>{`Buyer: ${from}`}</li>
                <li>{`Category: ${category}`}</li>
            </ul>
            
            <div className='showButtons'>
                <button onClick={() => navigate( - 1)}>Back</button>
                <Link to={`/transactions/${index}/edit`}>
                    <button>Edit</button>
                </Link>
                <button onClick={() => deleteTransData()}>Delete</button>
            </div>
        </div>
    );
};

export default Show;