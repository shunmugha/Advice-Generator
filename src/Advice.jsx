import {useEffect, useState} from 'react'
import './Advice.css'
export const Advice = () => {
    const [advice,setAdvice] = useState("Click button to get an Advice");
    const [count, setCount] = useState(0);
    async function getAdvice()
    {
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setAdvice(data.slip.advice);
        setCount((c)=>c+1);
    }

    useEffect(function() 
{
    getAdvice();
}, []);
  return (
    <div>
        <h3>{advice}</h3>
        <button onClick={getAdvice}>Get an Advice</button>
        <p>You have read <b>{count}</b> pieces of Advice</p>
    </div>
  )
}
