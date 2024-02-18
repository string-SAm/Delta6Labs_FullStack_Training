import React, { useState } from 'react'

function HandlingExample() {

    const [buttonText,setButtonText]=useState('Click me')

    const habdleClick=()=>{
        setButtonText(buttonText==='Click me'?'ButtonClick':'Click me')
    }
  return (
    <div>
      <button onClick={habdleClick}>{buttonText}</button>
    </div>
  )
}

export default HandlingExample
