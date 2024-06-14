import { useEffect, useRef, useState } from 'react'
import CardWidgetComponente from '../CardWidget/CardWidgetComponente'
import './CardComponent.css'
import BotonComponente from '../Boton/BotonComponente'
import { getProducts } from '../../asincronia'

function CardComponent({ imagen, titulo, precio, stock, idProd, categoria }) {
    
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
                   
                    <ul className='botones'>
                     
                        <BotonComponente nombre={'Ver Detalle'} ruta={`/detalle/${idProd}`} />
                    </ul>
                </div>
            </div>
        </>
    )
}
export default CardComponent;
