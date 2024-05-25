import { useEffect, useRef, useState } from 'react'
import './SearchComponent.css'
function SearchComponent(){
    const referenciaIInput = useRef(null);
    useEffect(()=>{
        console.log('Efecto funcional en el onMout');
        referenciaIInput.current.focus()
    },[])


    return(
        <>
        <section>
            <input type="text" placeholder="Looking for something" ref={referenciaIInput} />
            <button>🔎</button>
        </section>
        </>
    )
}
export default SearchComponent