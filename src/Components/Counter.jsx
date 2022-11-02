
import React from 'react'

export const Counter = () => {
    let initial=0
    let [count,setCount]=React.useState(0)
  return (
    <div>
        <p aria-label='counter'>{count}</p>
        <button aria-label='incrementcounter' onClick={()=>setCount(count+1)}>Click to increment</button>
        <button aria-label='decrementcounter' onClick={()=>setCount(count-1)}>Click to decrement</button>
    </div>
    
  )
}