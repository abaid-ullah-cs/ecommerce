import React, { useState } from 'react'

function Counter() {
   const [count,setCount]=useState('');

   const handelPlus=() => {
    setCount((prev) => prev + 1)
   };
   const handelMinus=() => {
    setCount((prev) => prev - 1)
   };

  return (
    <div>
        <button onClick={handelPlus}>+</button>
        {count}
        <button onClick={handelMinus}>-</button>
    </div>
  )
}

export default Counter