import React from "react";
import { useCart } from "../../Contex/CartContex";
import BotonComponente from "../Boton/BotonComponente";

function CartWidgetComponente() {
    const { getTotalItems } = useCart();
    const totalItems = getTotalItems();

    return (
        <div>
            <BotonComponente nombre={`Carrito🛒 ${totalItems}`} ruta={'/carrito'} />
        </div>
    );
}

export default CartWidgetComponente;


