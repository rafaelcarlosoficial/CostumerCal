import React from 'react'
import ButtonsContainer from '../ButtonsContainer/ButtonsContainer';
import Panel from '../Panel/Panel';
import Provider from '../../context/Provider.jsx';

import './CalculatorContainer.css'
const CalculatorContainer = () => {
  return (
    <div className='calculatorContainer'>
      <Provider>
        <Panel/>
        <ButtonsContainer/>
      </Provider>
    </div>
  )
}

export default CalculatorContainer;