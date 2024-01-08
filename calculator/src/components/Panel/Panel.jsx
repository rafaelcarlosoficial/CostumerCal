import React, { useContext } from 'react';
import './Panel.css';
import AppContext from '../../context/context';
const Panel = () => {
  const { number, setNumber, operator, previousValue} = useContext(AppContext);
  return (
    <div className='panelContainer'>
        <div className='previousNumber'>{previousValue}</div>
        <div className='currentNumber'>{number}{operator}</div>
    </div>
  )
}

export default Panel;