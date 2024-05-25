import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../asincronia.js";
import CardComponent from "../CardComponent/CardComponent.jsx";
import './ProductosComponent.css';

function ProductosComponent() {
    const { categoriaId } = useParams();
    const [products, setProducts] = useState([]);
    const [categoria, setCategoria] = useState([]);

    const filterProductsByCategory = (products, category) => {
        return products.filter(product => product.categoria === category);
    };

    useEffect(() => {
        getProducts.then(data => {
            setProducts(data);
            if (categoriaId) {
                setCategoria(filterProductsByCategory(data, categoriaId));
            } else {
                setCategoria(data);
            }
        });
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