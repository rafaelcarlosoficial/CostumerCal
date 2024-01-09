import React, { useContext } from 'react';
import './Panel.css';
import AppContext from '../../context/context';
const Panel = () => {
  const { number, setNumber, operator, oldNumber, oldOperator, previousValue, setPreviousValue} = useContext(AppContext);
  return (
    <div className='panelContainer'>
        <div className='previousNumber'>{oldNumber}{oldOperator}{previousValue}</div>
        <div className='currentNumber'>{number}</div>
    </div>
  )
}

export default Panel;