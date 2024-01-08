import React from 'react'
import Button from '../Button/Button'
import './ButtonsContainer.css';

const ButtonsContainer = () => {
    const contentOfTheButtons = 
    ['%', 'CE', 'C', '⌫', '1/X', 
    'X²', '²√x', '÷', '7', '8', 
    '9',' X', '4', '5', '6', '-', 
    '1', '2', '3', '+', '+/-', 
    '0', ',', '=']

    const grayButtons = 
    ['7', '8', '9', 
    '4', '5', '6', 
    '1', '2', '3', 
    '+/-', '0', ',' ]

    return (
    <div className='buttonsContainer'>
        {contentOfTheButtons.map((content, index) => {
           
           if(grayButtons.includes(content)){
            
            return (<Button key={index} content={content} background={'#3B3B3B'} />);

           } 
           
           else if(content === '=') {
            
            return (<Button key={index} content={content} background={'#76B9ED'} textColor={'#202020'} />);
           
           } else {
            
            return (<Button key={index} content={content} />);

           }
          
        })}

    </div>
  )
}

export default ButtonsContainer