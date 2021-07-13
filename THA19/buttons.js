import React, { useState } from 'react';
import './App.css';
export default function Clicking() {
    var [count,setCount] = useState(0);
     const plusone=()=>{
        setCount(count+1);
     }
    return (
        <button onClick={plusone}>{count}</button>
    )
}