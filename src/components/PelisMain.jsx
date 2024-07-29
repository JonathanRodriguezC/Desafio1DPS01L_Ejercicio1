import React from 'react'
import { useState } from 'react'
import DataPelis from '../app/pelis.json'
import { PelisPicker } from './PelisPicker'
import { PelisList } from './PelisList'
import Style from '../app/page.module.css'

export const PelisMain = () => {
    const [listPelis, setListPelis] = useState([])


    const addPelis = (pelis) => {

        if (!listPelis.includes(pelis)) {
            setListPelis([...listPelis, pelis]);
            return
        }

        alert("Esta pelicula ya fue agregada")

    }
    const deletePelis = (pelis) => {
        const updatedList = listPelis.filter(item => item !== pelis);
        setListPelis(updatedList);
    }


    return (
        <div className={Style.mainlist}>
            <PelisPicker DataPelis={DataPelis} addPelis={addPelis}></PelisPicker>

            {listPelis.length > 0 ? (
                <PelisList setListPelis={setListPelis} listPelis={listPelis} deletePelis={deletePelis}></PelisList>
            ) : (
                <h2>No hay peliculas seleccionadas</h2>
            )}
        </div>
    )
}