import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardComponent from "../CardComponent/CardComponent.jsx";
import './ItemListContainer.css'
import ReactLoading from 'react-loading';

import { getProducts } from "../../firebase/firebase.js";

function ItemListContainer() {
    const { categoriaId } = useParams();
    const [products, setProducts] = useState([]);
    const [categoria, setCategoria] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const filterProdsByCategoria = (products, category) => {
        return products.filter(product => product.categoria === category);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
                if (categoriaId) {
                    const filteredProducts = filterProdsByCategoria(data, categoriaId);
                    setCategoria(filteredProducts);
                } else {
                    setCategoria(data);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [categoriaId]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <>

            <div className='titulo'>
                <h1>Bienvenidos a Techno Shop</h1>
            </div>
            {isLoading ? 
            (<div className="loading-container">
                <ReactLoading type="spin" color="orange" height={200} width={200} />
            </div>)
                : (
                    <div className="productos">
                        {categoria.map((product) => (
                            <CardComponent
                                key={product.id}
                                titulo={product.titulo}
                                precio={product.precio}
                                stock={product.stock}
                                imagen={product.imagen}
                                idProd={product.id}
                            />
                        ))}
                    </div>
                )}
        </>);
}

export default ItemListContainer;
