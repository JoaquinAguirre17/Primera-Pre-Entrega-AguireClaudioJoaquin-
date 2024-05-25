// src/components/CategoryComponent/CategoryComponent.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategoria } from "../../asincronia";
import CardComponent from "../CardComponent/CardComponent";

function CategoryComponent() {
    const { categoria } = useParams(); // Obtén la categoría desde los parámetros de la URL
    const [productosFiltrados, setProductosFiltrados] = useState([]);

    useEffect(() => {
        // Filtra los productos por categoría
        const productosFiltrados = getCategoria(categoria);
        setProductosFiltrados(productosFiltrados);
    }, [categoria]);

    return (
        <div className="productos">
            {productosFiltrados.map((product) => (
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

export default CategoryComponent;
