import React, { useState } from 'react';
import { addOrder } from '../../firebase/firebase';
import { useCart } from '../../Contex/CartContex';
import './ItemDetailContainer.css';


function ItemDetailContainer() {
    const { cart, getTotalPrice, removeItem ,clearCart } = useCart();
    const [orderId, setOrderId] = useState(null);

    const handleAddOrder = () => {
        const order = {
            items: cart,
            total: getTotalPrice()
        };
        addOrder(order).then(id => {
            setOrderId(id);
            const myModal = new window.bootstrap.Modal(document.getElementById('orderModal'));
            myModal.show();
        });
        clearCart()
    };

    const handleDeleteFromCart = (itemId) => {
        removeItem(itemId);
    };

    return (
        <div>
            <h1 className='titulocarrito'>Mi Carrito</h1>
            <div className='productoscarrito'>
                {cart.map(item => (
                    <div className="carrito-card" key={item.id}>
                        <div className="carrito-row">
                            <img src={item.imagen} className="carrito-img-fluid carrito-rounded-start" alt={item.titulo}></img>
                            <div className="carrito-card-body">
                                <h5 className="carrito-card-title">{item.titulo}</h5>
                                <p className="carrito-card-text">Cantidad: {item.count}</p>
                                <p className="carrito-card-text">Precio ${item.precio}</p>
                                <button className='eliminaritem' onClick={() => handleDeleteFromCart(item.id)}>🗑️</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="totalcarrito">
                <p>Total: ${getTotalPrice()}</p>
            </div>
            <div className="d-grid gap-2">
                <button className="btn btn-primary" type="button" onClick={handleAddOrder}>Finalizar Compra</button>
            </div>

            <div className="modal fade" id="orderModal" tabIndex="-1" aria-labelledby="orderModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="orderModalLabel">Mi  compra</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {orderId ? `El ID de la orden de compra es: ${orderId}` : 'Procesando orden...'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetailContainer;






