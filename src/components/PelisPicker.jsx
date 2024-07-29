import { useState } from "react";
import Style from "../app/page.module.css";

export const PelisPicker = ({ DataPelis, addPelis }) => {

    const [selectedItem, setSelectedItem] = useState("");

    const handleSelectPeli = (e) => {
        const peli = DataPelis.find((peli) => peli.nombre === e.target.value);
        setSelectedItem(peli);
    };

    return (
        <div className={Style.pelis_picker_container}>
            <h1 >Select Your Pelis</h1>
            <div className="Container">
                <select className={Style.pelis_picker_input} value={setSelectedItem.nombre} onChange={handleSelectPeli}>
                    <option value="" disabled>
                        Select an item
                    </option>
                    {DataPelis.map((peli) => (
                        <option key={peli.nombre} value={peli.nombre}>
                            {peli.nombre}
                        </option>
                    ))}
                </select>

                {selectedItem ? (
                    <>
                        <button className={Style.pelis_picker_button} onClick={() => addPelis(selectedItem)}>Add</button>
                        <div>
                            <p >
                                You selected: {selectedItem.nombre} price: ${selectedItem.precio}
                            </p>
                        </div>
                    </>
                ) : null}
            </div>
        </div>
    );
};
