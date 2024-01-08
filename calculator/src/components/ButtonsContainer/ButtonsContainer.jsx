import React, {useContext} from 'react'
import Button from '../Button/Button'
import './ButtonsContainer.css';
import AppContext from '../../context/context';

const ButtonsContainer = () => {
    const contentOfTheButtons = 
    ['%', 'CE', 'C', '⌫', '1/X', 
    'X²', '²√x', '÷', '7', '8', 
    '9','X', '4', '5', '6', '-', 
    '1', '2', '3', '+', '+/-', 
    '0', ',', '=']

    const grayButtons = 
    ['7', '8', '9', 
    '4', '5', '6', 
    '1', '2', '3', 
    '+/-', '0', ',' ]

    const numberButtons = 
    ['1', '2', '3', 
    '4', '5', '6', 
    '7', '8', '9', 
    '0'];

    const operators = [
      'X', '÷', '+', '-', 
    ]
     

    const { insertNumber, insertOperator } = useContext(AppContext);
    return (
    <div className='buttonsContainer'>
        {contentOfTheButtons.map((content, index) => {
           //fazer um switch e deixar isso mais organizado
           if(grayButtons.includes(content)){
              
             if(grayButtons.includes(content) && numberButtons.includes(content)){
                return (<Button key={index} content={content} background={'#3B3B3B'} handleClick={insertNumber} />);
              } else {
                return (<Button key={index} content={content} background={'#3B3B3B'} />);
              }

           } 
           
           else if(content === '=') {
            
            return (<Button key={index} content={content} background={'#76B9ED'} textColor={'#202020'} />);
           
           } else if (operators.includes(content)){
            
            return (<Button key={index} content={content} handleClick={insertOperator} />);

           } else {
            return (<Button key={index} content={content} />);
           }
          
        })}

    </div>
  )
}

export default ButtonsContainer