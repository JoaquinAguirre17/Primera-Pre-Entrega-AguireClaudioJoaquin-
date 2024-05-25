import { useEffect, useRef, useState } from 'react'
import './RefBasic.css'

function RefBasic(){
    const [count, setCount] = useState(0)

    useEffect(()=>{
        //alert('Se modifica el contador')
    },[count])

    const handleInc= ()=>{
        setCount(count+1);
        clicks.current++
        console.log(`contador de clics ${clicks.current}`);
    }

    const handleDec= ()=>{
        setCount(count-1);
        clicks.current++
        console.log(`contador de clics ${clicks.current}`);
    }

    const clicks = useRef(0);
return(
    <>
    <h3>Contador con ref</h3>
    <section>
        <button onClick={handleInc}>Incrementar</button>
        <p>{count}</p>
        <button onClick={handleDec}>Decrementar</button>
    </section>
    </>
)
}
export default  RefBasic