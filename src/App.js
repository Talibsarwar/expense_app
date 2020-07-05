import React from 'react';
import './App.css';
import Footer from "./Footer";
import Child from './child';
import {TransactionProvider} from './transContext';

function App() {
  return (
    <div className="Bk">
    <TransactionProvider>
      <Footer/>
      <Child />
    </TransactionProvider>
    </div>
  );
}

export default App;
