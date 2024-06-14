import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../Contex/CartContex';

function CartComponent() {
    const { cart, removeItem, getTotalPrice, clear } = useCart();

    if (cart.length === 0) {
        return (
            <div>
                <h2>No hay ítems en tu carrito</h2>
                <Link to="/">Volver al inicio para comprar</Link>
            </div>
        );
    }

    const groupedItems = cart.reduce((acum, item) => {
        // Busca si ya existe un elemento con el mismo id
        const foundItem = acum.findIndex(i => i.id === item.id);

        if (foundItem !== -1) {
            // Si encuentra el elemento, incrementa la cantidad
            acum[foundItem].quantity += item.quantity;
        } else {
            // Si no encuentra el elemento, añade uno nuevo al array acc
            acum.push({ ...item });
        }

        return acc;
    }, []);

    return (
        <div>
            <h2>Carrito de Compras</h2>
            <ul>
                {groupedItems.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price} x {item.quantity}
                        <button onClick={() => removeItem(item.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
            <hr />
            <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
            <button onClick={clear}>Vaciar Carrito</button>
        </div>
    );
}

export default CartComponent;

