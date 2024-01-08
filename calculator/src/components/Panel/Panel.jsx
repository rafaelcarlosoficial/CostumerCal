import React, { useContext } from 'react';
import './Panel.css';
import AppContext from '../../context/context';
const Panel = () => {
  const { number, setNumber } = useContext(AppContext);
  return (
    <div className='panelContainer'>
        <div className='previousNumber'>12+</div>
        <div className='currentNumber'>{number}</div>
    </div>
  )
}

export default Panel;