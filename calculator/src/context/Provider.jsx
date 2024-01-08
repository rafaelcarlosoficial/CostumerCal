import React, { useState } from "react";
import AppContext from "./context";

function Provider({ children }){
    const [number, setNumber] = useState(0)
    const [operator, setOperator] = useState();
    const [previousValue, setPreviousValue] = useState()

    const insertOperator = (e) => {

        let currentOperator = e.target.innerText;

        setOperator(currentOperator)
        setPreviousValue(number + currentOperator)

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
        previousValue, 
        setPreviousValue
    }


    return (
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
    )
}

export default Provider;