import { useParams } from "react-router-dom"
import {  getProduct } from "../../asincronia"
import { useEffect, useState } from "react"
import CardComponent from "../CardComponent/CardComponent"
import './ProductView.css'

function ProducView() {
    const [product, setProduct] = useState({})
   

    const { prodId } = useParams()
  

    useEffect(() => {
        setProduct(getProduct(prodId))
    }, [])

   
    return (
        <>
            
           <div className="carrta">
            <div className="card" >
                <img src={product.imagen} alt={product.titulo} ></img>
                <div className="card-body">
                    <h5 className="card-title">{product.titulo}</h5>
                    <p className="card-text">{product.descripcion}</p>
                    <p className="card-text">Precio: ${product.precio}</p>
                    <p className="card-text">Stock: {product.stock}</p>
                    
                </div>
            </div>
            </div>

        </>
    )
}
export default ProducView