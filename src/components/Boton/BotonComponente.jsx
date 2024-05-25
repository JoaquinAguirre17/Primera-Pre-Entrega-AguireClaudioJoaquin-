import { Link } from 'react-router-dom'
import React from 'react'
import './BotonComponente.css'

function BotonComponente({ ruta, nombre }) {
    return (
        <>

            <Link to={ruta}>
                <button className="btn btn-secondary">
                    {nombre}
                </button>
            </Link>
        </>
    )
}
export default BotonComponente