import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

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
                navigate(`/transactions`);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className='show-div'>
            <h1 className='show-header'>Show Page</h1>
            <div className='show-content'>
                <ul className='show-ul'>
                    <li  className='show-li'>{item_name}</li>
                    <li  className='show-li'>{`Amount: ${amount}`}</li>
                    <li  className='show-li'>{`Purchase date: ${date}`}</li>
                    <li  className='show-li'>{`Buyer: ${from}`}</li>
                    <li  className='show-li'>{`Category: ${category}`}</li>
                </ul>
                
                <div className='showButtons'>
                    <button className='buttons-inShow' onClick={() => navigate( - 1)}>Back</button>
                    <Link to={`/transactions/${index}/edit`}>
                        <button className='buttons-inShow'>Edit</button>
                    </Link>
                    <button className='buttons-inShow' onClick={() => deleteTransData()}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Show;