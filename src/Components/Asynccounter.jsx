import React from 'react'

export const Asynccounter = () => {
   
    let [count,setCount]=React.useState(0)
    let handleIncrement=()=>{
        setTimeout(()=>{
            setCount(count+1)
        },2000)
    }
    let handleDecrement=()=>{
        setTimeout(()=>{
            setCount(count-1)
        },2000)
    }
  return (
    <div>
        <p aria-label='asyncDefault'>{count}</p>
        <button aria-label='asyncincrementcounter' onClick={handleIncrement}>Click to asycincrement</button>
        <button aria-label='asyncdecrementcounter' onClick={handleDecrement}>Click to asyncdecrement</button>
    </div>
    
  )
} 
