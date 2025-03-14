import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Nav from './Components/Nav';
import Home from './Pages/Home';
import Show from './Pages/Show';
import New from './Pages/New';
import Edit from './Pages/Edit';
import About from './Pages/About';
import FourOFour from './Pages/FourOFour';
import Transactions from './Pages/Transactions';
import Footer from './Components/Footer';
import SuccessNew from './Pages/SuccessNew';
import SuccessEdit from './Pages/SuccessEdit';
import SuccessDelete from './Pages/SuccessDelete';
import EmptyForm from './Pages/EmptyForm';

function App() {
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
  }, [transactions]);

  return (
    <div className='container'>
      <Nav transactions={transactions}/>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/transactions' element={<Transactions transactions={transactions} />}/>
          <Route path='/transactions/:index' element={<Show />}/>
          <Route path='/transactions/new' element={<New />}/>
          <Route path='/transactions/:index/edit' element={<Edit />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/success-new' element={<SuccessNew />}/>
          <Route path='/success-edit' element={<SuccessEdit />}/>
          <Route path='/success-delete' element={<SuccessDelete />}/>
          <Route path='/emptyForm' element={<EmptyForm />}/>
          <Route path='*' element={<FourOFour />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
