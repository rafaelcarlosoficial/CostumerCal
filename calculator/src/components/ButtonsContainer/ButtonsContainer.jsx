import React from 'react'
import Button from '../Button/Button'
import './ButtonsContainer.css';

const ButtonsContainer = () => {
    const contentOfTheButtons = ['%', 'CE', 'C', '⌫', '1/X', 'X²', '²√x', '÷', '7', '8', '9',' X', '4', '5', '6', '-', '1', '2', '3', '+', '+/-', '0', ',', '=']
    return (
    <div className='buttonsContainer'>
        {contentOfTheButtons.map((content, index) => {
         return (
            <Button key={index} content={content} />
         );
        })}
    </div>
  )
}

export default ButtonsContainer