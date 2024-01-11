// import React, {useContext} from 'react'
// import Button from '../Button/Button'
// import './ButtonsContainer.css';
// import AppContext from '../../context/context';

// const ButtonsContainer = () => {
//     const contentOfTheButtons = 
//     ['%', 'CE', 'C', '⌫', '1/X', 
//     'X²', '²√x', '÷', '7', '8', 
//     '9','X', '4', '5', '6', '-', 
//     '1', '2', '3', '+', '+/-', 
//     '0', '.', '=']

//     const grayButtons = 
//     ['7', '8', '9', 
//     '4', '5', '6', 
//     '1', '2', '3', 
//     '+/-', '0', '.' ]

//     const numberButtons = 
//     ['1', '2', '3', 
//     '4', '5', '6', 
//     '7', '8', '9', 
//     '0', '.'];

//     const operators = [
//       'X', '÷', '+', '-', 
//     ]

//     const deleteNumbers = ['C', '⌫']
     
//     const secondayOperator = ['²√x', 'X²', '1/X', '%', '+/-', 'CE']

//     const { insertNumber, insertOperator, calculate, secondaryCalculations, deleteFromScreen } = useContext(AppContext);
//     return (
//     <div className='buttonsContainer'>
//         {contentOfTheButtons.map((content, index) => {
//            //fazer um switch e deixar isso mais organizado
//            if(grayButtons.includes(content)  && content !== '+/-'){
              
//              if(grayButtons.includes(content) && numberButtons.includes(content)){
//                 return (<Button key={index} content={content} background={'#3B3B3B'} handleClick={insertNumber} />);
//               } else {
//                 return (<Button key={index} content={content} background={'#3B3B3B'} />);
//               }

//            } 
           
//            else if(content === '=') {
            
//             return (<Button key={index} content={content} background={'#76B9ED'} textColor={'#202020'} handleClick={calculate} />);
           
//            } else if (operators.includes(content)){
            
//             return (<Button key={index} content={content} handleClick={insertOperator} />);

//            } else if (secondayOperator.includes(content)) {

//             return (<Button key={index} content={content} handleClick={secondaryCalculations}/>)
//            }

//            else if (deleteNumbers.includes(content)) {
//             return (<Button key={index} content={content} handleClick={deleteFromScreen} />);
//            }
          
//         })}
  
//     </div>
//   )
// }


// export default ButtonsContainer


import React, { useContext, useMemo, useCallback } from 'react';
import Button from '../Button/Button';
import './ButtonsContainer.css';
import AppContext from '../../context/context';

const ButtonsContainer = () => {
  const contentOfTheButtons = useMemo(() => [
    '%', 'CE', 'C', '⌫', '1/X',
    'X²', '²√x', '÷', '7', '8',
    '9', 'X', '4', '5', '6', '-',
    '1', '2', '3', '+', '+/-',
    '0', '.', '='
  ], []);

  const grayButtons = useMemo(() => [
    '7', '8', '9',
    '4', '5', '6',
    '1', '2', '3',
    '+/-', '0', '.'
  ], []);

  const numberButtons = useMemo(() => [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    '0', '.'
  ], []);

  const operators = useMemo(() => [
    'X', '÷', '+', '-',
  ], []);

  const deleteNumbers = useMemo(() => ['C', '⌫'], []);

  const secondayOperator = useMemo(() => [
    '²√x', 'X²', '1/X', '%', '+/-', 'CE'
  ], []);

  const { insertNumber, insertOperator, calculate, secondaryCalculations, deleteFromScreen } = useContext(AppContext);

  const handleButtonClick = useCallback((content) => {
    switch (content) {
      case '=':
        return <Button key={content} content={content} background={'#76B9ED'} textColor={'#202020'} handleClick={calculate} />;
      case '+':
      case '-':
      case 'X':
      case '÷':
        return <Button key={content} content={content} handleClick={insertOperator} />;
      case '²√x':
      case 'X²':
      case '1/X':
      case '%':
      case '+/-':
      case 'CE':
        return <Button key={content} content={content} handleClick={secondaryCalculations} />;
      case 'C':
      case '⌫':
        return <Button key={content} content={content} handleClick={deleteFromScreen} />;
      default:
        if (grayButtons.includes(content) && numberButtons.includes(content)) {
          return <Button key={content} content={content} background={'#3B3B3B'} handleClick={insertNumber} />;
        } else {
          return <Button key={content} content={content} background={'#3B3B3B'} />;
        }
    }
  }, [calculate, deleteFromScreen, grayButtons, insertNumber, insertOperator, numberButtons, secondaryCalculations]);

  return (
    <div className='buttonsContainer'>
      {contentOfTheButtons.map((content) => handleButtonClick(content))}
    </div>
  );
};

export default ButtonsContainer;