import React, { useEffect } from "react";
import { useState } from "react";
import Style from "../app/page.module.css";


export const PelisList = ({ listPelis, setListPelis, deletePelis }) => {

    const [quantities, setQuantities] = useState({});
    const [totalGLobal, setTotalGlobal] = useState(0);


    // Función para manejar el cambio en la cantidad de una película
    const handleQuantityChange = (index, value) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [index]: value,
        }));
        calculateTotal();
    };

    // Función para calcular el total
    const calculateTotal = () => {
        let total = 0;
        listPelis.forEach(pelis => {
            total += (quantities[pelis.nombre] || 0) * pelis.precio;
        });
        setTotalGlobal(total);
    };

    useEffect(() => {
        calculateTotal();
    }, [quantities, deletePelis, listPelis]);
    return (
        <div className={Style.pelis_list_container}>
            {listPelis.map((pelis, index) => (
                <div key={pelis.nombre} className={Style.pelis_list_item}>
                    <div>
                        <p className={Style.pelis_list_title}>{pelis.nombre}</p>
                        <p className={Style.pelis_list_precio}>precio: ${pelis.precio} </p>
                    </div>

                    <input type="number" placeholder="Cantidad" min={0} onChange={(e) => handleQuantityChange(pelis.nombre, Number(e.target.value))} />
                    <button className={Style.pelis_list_button_delete} onClick={() => deletePelis(pelis)}>Delete</button>
                </div>
            ))}

            <p>Total: ${totalGLobal.toFixed(2)}</p>

        </div>
    );
};