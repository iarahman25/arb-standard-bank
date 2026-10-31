import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Deposit from './pages/Deposit';
import Withdraw from './pages/Withdraw';
import Transactions from './pages/Transactions';
import { useState, useEffect } from 'react';


function App() {

  const [account, setAccount] = useState(() => {

    const savedAccount = localStorage.getItem("account");

    if (savedAccount) {
      return JSON.parse(savedAccount);
    }

    return {
      holderName: 'Rahman',
      accountNumber: '20507770216631613',
      balance: 20000,
      totalDeposited: 0,
      totalWithdrawn: 0,
    }
  });

  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem('transactions');

    if (savedTransactions) {
        return JSON.parse(savedTransactions);
    }

    return [];
  });

  useEffect(() => {
    console.log("Account or Transactions Updated");

    localStorage.setItem("account", JSON.stringify(account));
    localStorage.setItem("transactions", JSON.stringify(transactions));

  }, [account, transactions]);

  return(
    <BrowserRouter>
      <div className='app'>
       <Navbar/>

       <main className='page-content'>
        <Routes>
          <Route path='/' element={<Dashboard account={account} />} />
          <Route path='/deposit' element={<Deposit account={account} setAccount={setAccount} setTransactions={setTransactions} />} />
          <Route path="/withdraw" element={<Withdraw account={account} setAccount={setAccount} setTransactions={setTransactions} />} />
          <Route path="/transactions" element={<Transactions transactions={transactions} />} />
        </Routes>
       </main>
      </div>
    </BrowserRouter>
  );
}


export default App;