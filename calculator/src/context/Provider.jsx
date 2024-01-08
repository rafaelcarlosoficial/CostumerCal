import React, { useState } from "react";
import AppContext from "./context";

function Provider({ children }){
    const [number, setNumber] = useState(0)


    const insertNumber = (e) => {
        let number = e.target.value;
        if(number === 0){
            setNumber(number)
        } else {
            setNumber(previousNumber => previousNumber + number)
        }

    }
    const value = {
        number, 
        setNumber
    }


    return (
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
    )
}

export default Provider;