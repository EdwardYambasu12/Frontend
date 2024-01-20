import React, { useRef } from 'react'

export default function Modern() {
    const inputFile = useRef(null)
    
    const onButtonClick = ()=>{
        inputFile.current.click()
    }
  return (
    <div>Modern
           <button> <input type = "date" value={"Date"}  id = "file" placeholder="Date" ref = {inputFile}></input></button>

   

    </div>

  )
}
