import React from 'react'
import ButtonsContainer from '../ButtonsContainer/ButtonsContainer';
import Panel from '../Panel/Panel';
import './CalculatorContainer.css'
const CalculatorContainer = () => {
  return (
    <div className='calculatorContainer'>
        <Panel/>
        <ButtonsContainer/>
    </div>
  )
}

export default CalculatorContainer;