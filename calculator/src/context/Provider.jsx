import React, { useState } from "react";
import AppContext from "./context";

function Provider({ children }){

    const [number, setNumber] = useState(0);
    const [oldNumber, setOldNumber] = useState(null);
    const [operator, setOperator] = useState();
    const [oldOperator, setOldOperator] = useState(null);
    const [previousValue, setPreviousValue] = useState();




    const calculate = () => {

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
        setOldNumber('')
        setOldOperator('')

    }


    const insertOperator = (e) => {
    
        let currentOperator = e.target.innerText;

        if(oldOperator === null && oldNumber === null){
            setOldNumber(number)
            setOldOperator(currentOperator)
            setNumber('')
        } else {
            calculate()
        }
    
    }


    const insertNumber = (e) => { 

        
        let currentNumber = e.target.innerText;
        
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
        setPreviousValue
    }


    return (
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
    )
}

export default Provider;