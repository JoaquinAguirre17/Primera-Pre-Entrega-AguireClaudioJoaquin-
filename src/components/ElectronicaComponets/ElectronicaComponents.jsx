import { useState } from 'react'
import { useParams } from "react-router-dom"
import CardComponent from '../CardComponent/CardComponent'
import ProductosComponent from '../PruebaProductos/ProductosComponents'
import './ElectronicaComponents.css'
import CategoryComponent from '../CategoryComponent/CategotyComponent'
function ElectronicaComponents() {


    return (
        <>
            < ProductosComponent />
        </>
    )
}
export default ElectronicaComponents