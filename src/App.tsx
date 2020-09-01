import React from 'react';
import { Header } from './Components/Header';
import './App.css';
import { IncomeExpenses } from './Components/IncomeExpenses';
import { TransactionList } from './Components/TransactionList';
import { Balances } from './Components/Balances';
import { AddTransaction } from './Components/AddTransaction';
import { GlobalState } from './Components/Context/GlobalState';
import Footer from './Footer';

const App: React.FC<{}> = () => {
  return (
      <GlobalState>
        <Header />
        <div className='containers'>
          <Balances />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
          <Footer />
        </div>
      </GlobalState>
  );
};

export default App;