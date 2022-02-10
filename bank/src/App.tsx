import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './action-creators';
import { State } from './reducer';
import './index.css';
import React, { useState } from 'react';

function App() {
  const [inputNumber, setInputNumber] = useState('');
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, bankroptMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const amount = useSelector((state: State) => state.bank);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputNumber(e.currentTarget.value);
  };

  return (
    <div className="app">
      <h1>{amount}</h1>
      <input type="text" value={inputNumber} onChange={handleChange} />
      <div className="btns">
        <button onClick={() => depositMoney(parseFloat(inputNumber))}>
          Deposit
        </button>
        <button onClick={() => withdrawMoney(parseFloat(inputNumber))}>
          Withdraw
        </button>
        <button onClick={() => bankroptMoney()}>Bankropt</button>
      </div>
    </div>
  );
}

export default App;
