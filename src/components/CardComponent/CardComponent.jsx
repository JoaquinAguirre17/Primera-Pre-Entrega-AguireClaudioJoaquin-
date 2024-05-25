import { useEffect, useRef, useState } from 'react'
import CardWidgetComponente from '../CardWidget/CardWidgetComponente'
import './CardComponent.css'
import BotonComponente from '../Boton/BotonComponente'
import { getProducts } from '../../asincronia'

function CardComponent({ imagen, titulo, precio, stock, idProd, categoria }) {
    const [count, setCount] = useState(0)
    const [decrement, setDecrement] = useState(true)
    const [increment, setIncrement] = useState(false)


    const handleInc = () => {
        setCount(count + 1);
        clicks.current++
        console.log(`contador de clics ${clicks.current}`);
    }

    const handleDec = () => {
        setCount(count - 1);
        clicks.current++
        console.log(`contador de clics ${clicks.current}`);
    }
    useEffect(() => {
        if (count <= 0) {
            return setDecrement(true)
        } else setDecrement(false)
    }, [count])
    /* -------------------------------------------------------------------------- */
    useEffect(() => {
        if (count === stock) {
            return setIncrement(true)
        } else setIncrement(false)
    }, [count])
    /* -------------------------------------------------------------------------- */


    /* -------------------------------------------------------------------------- */
    return (
        <>
            <div className="card"  >
                <img src={imagen} alt={titulo} ></img>
                <div className="card-body">
                    <h3 className="card-title">{titulo}</h3>
                    <h5 className="card-text">Precio: ${precio}</h5>
                    <h5 className="card-text">Stock: {stock}</h5>
                    <ul className='contador'>
                        <li>
                            <button onClick={handleInc} disabled={increment}>➕</button>
                        </li>
                        <li>
                            <p> {count} </p>
                        </li>
                        <li>
                            <button onClick={handleDec} disabled={decrement}>➖</button>
                        </li>

                    </ul>
                    <ul className='botones'>
                        <BotonComponente nombre={'Añadir al carrito'} />
                        <BotonComponente nombre={'Ver Detalle'} ruta={`/detalle/${idProd}`}/>
                    </ul>


                </div>
            </div>
        </>
    )
}
export default CardComponent;
