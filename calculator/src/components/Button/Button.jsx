import React from 'react'
import './Button.css'
const Button = ({ content, background, textColor, handleClick }) => {

  return (
    <button 
    style={{backgroundColor: `${background}`, color:`${textColor}` }}
    onClick={handleClick}>{content}</button>
  )
}

export default Button