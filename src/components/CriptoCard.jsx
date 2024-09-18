import React, { useEffect, useState } from 'react'
import './CriptoCard.css'
import { formatNumber } from '../helpers/numberFormat'
import { addCriptoToFavorite, checkFavoriteCripto, deleteFavoriteCripto } from '../helpers/handleLocalStorage'

const CriptoCard = ({ cripto, showFavorites }) => {
    const { name, symbol, priceUsd, rank, id } = cripto
    const [checkFavorite, setCheckfavorite] = useState(false) 

    useEffect(() => {
        checkFavoriteCripto(id) && setCheckfavorite(true)
    }, [])

    const addFavorite = (idCripto) => {
        addCriptoToFavorite(idCripto);
        setCheckfavorite(true)
    }

    const deleteFromFavorites = (idCripto) => {
        deleteFavoriteCripto(idCripto)
        setCheckfavorite(false);
    }

    if(showFavorites && !checkFavorite){
        return null
    }

    return (
        <div className="card">
            <div className='left-side-card'>
                <h2 className="card-title">{name}</h2>
                <p>Precio: {formatNumber(priceUsd)}</p>
            </div>
            <div className="right-side-card">

                <p className="card-text"><b>S&iacute;mbolo:</b> {symbol}</p>
                <p className="card-text"><b>Ranking:</b> {rank}</p>
                {
                    !checkFavorite ?
                        <button onClick={() => addFavorite(id)}>Agregar a favoritos</button> :
                        <button onClick={() => deleteFromFavorites(id)}>Eliminar de favoritos</button>
                }

            </div>
        </div>
    )
}

export default CriptoCard