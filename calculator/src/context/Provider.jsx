import React, { useState } from "react";
import AppContext from "./context";

function Provider({ children }){

    const [number, setNumber] = useState(0);
    const [oldNumber, setOldNumber] = useState(null);
    const [operator, setOperator] = useState();
    const [oldOperator, setOldOperator] = useState(null);
    const [previousValue, setPreviousValue] = useState();


    const contentOfTheButtons = 
    ['%', 'CE', 'C', '⌫', '1/X', 
    'X²', '²√x', '÷', '7', '8', 
    '9','X', '4', '5', '6', '-', 
    '1', '2', '3', '+', '+/-', 
    '0', '.', '=']

    const secondaryCalculations = (e) => {
        let operator = e.target.innerText;
        setPreviousValue('')
        
        switch(operator){
            case '²√x':
                if(Math.sign(number) === -1) return;
                setNumber((Math.sqrt(number)))
                break;
            case 'X²':
                setNumber((Math.pow(number, 2)))
                break; 
            case '1/X':
                if(number !== '0'){
                    setNumber(1 / number);
                }
                break;
            case '%':
                setNumber(number / 100)
                break;
            case '+/-':
                setNumber(number * -1)
                break;
            case 'CE':
                setNumber(0)
                break;
            default:
                console.log('Este operador não foi encontrado. (secondaryOperator)')
                break;
        }



    }

    const deleteFromScreen = (e) => {
        const button = e.target.innerText;

        switch(button){
            case 'C':
                setNumber(number.toString().slice(0, -1))
                break;
            case '⌫':
                setNumber(number.toString().slice(0, -1))
                break;
            default:
                console.log('oi')
                break;
        }
      
    }


    const calculate = () => {
   
        if((oldNumber === null && oldOperator === null) || number === ''){
            return;
        }

        
        switch (oldOperator){
            case '/':
                setNumber(parseFloat(oldNumber) / parseFloat(number))
                break;
            case '+':
                setNumber(parseFloat(oldNumber) + parseFloat(number))
                break;
            case '-':
                setNumber(parseFloat(oldNumber) - parseFloat(number))
                break;
            case 'X':
                setNumber(parseFloat(oldNumber) * parseFloat(number))
                break;
            default:
                console.log('operador não encontrado')
                break;
        } 

        setPreviousValue(oldNumber + oldOperator + number)
        setOldNumber(null)
        setOldOperator(null)

    }


    const insertOperator = (e) => {
        if(number === '') return;
        let currentOperator = e.target.innerText;

        if(oldOperator === null && oldNumber === null){
            setPreviousValue('')
            setOldNumber(number)
            setOldOperator(currentOperator)
            setNumber('')
        } else {
            calculate()
        }
    
    }


    const insertNumber = (e) => { 

        let currentNumber = e.target.innerText;
        
        if(currentNumber === '.' && (number.toString().includes('.') || number === '')){
            return;
        }

        if(number === 0){
            setNumber(currentNumber)
        } else {
            setNumber(previousNumber => previousNumber + currentNumber)
        }

    }

  

    const value = {
        number, 
        setNumber,
        insertNumber,
        operator, 
        setOperator, 
        insertOperator,
        oldOperator, 
        setOldOperator,
        oldNumber, 
        setOldNumber,
        calculate,
        previousValue, 
        setPreviousValue,
        secondaryCalculations,
        deleteFromScreen
    }


    return (
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
    )
}

export default Provider;