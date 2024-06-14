import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardComponent from "../CardComponent/CardComponent.jsx";
import './ProductsComponent.css'

import { filterProdsByCategoria, getProducts } from "../../firebase/firebase";

function ProductosComponent() {
    const { categoriaId } = useParams();
    const [products, setProducts] = useState([]);
    const [categoria, setCategoria] = useState([]);

    const filterProdsByCategoria = (products, category) => {
        return products.filter(product => product.categoria === category);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts(); // Llama a getProducts como una función asincrónica
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

    return (
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
    );
}

export default ProductosComponent;
