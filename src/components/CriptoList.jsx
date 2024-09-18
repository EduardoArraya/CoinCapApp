
import React, { useEffect, useState } from 'react'
import CriptoCard from './CriptoCard'
import './CriptoList.css'
import useFetch from '../hooks/useFetch'

const CriptoList = () => {

  const [criptosData, loading, error] = useFetch('assets')
  const [filteredData, setFilteredData] = useState([])
  const [showFavorites, setShowFavorites] = useState(false)

  useEffect(() => {
    if (criptosData) setFilteredData(criptosData)
  }, [criptosData])

  const setQueryInput = (e) => {
    const queryFilter = e.target.value
    const resultList = criptosData.filter((cripto) => cripto.name.toLowerCase().includes(queryFilter.toLowerCase()))
    setFilteredData(resultList)
  }


  if (loading) return <h1>Cargando...</h1>
  if (error) return <h1>Hubo un error en la petición</h1>

  return (
    <div className='cripto-container'>
      <div className='tool-bar'>
        <input className='input-search' placeholder='Buscar por nombre' onChange={setQueryInput} type="text" />
        <button onClick={() => setShowFavorites(false)}>Ver todas las Criptomonedas</button>
        <button onClick={() => setShowFavorites(true)}>Ver favoritos</button>
      </div>

      <div className='cripto-list'>
        {
          filteredData.map((cripto) => (
            <CriptoCard key={cripto.id} cripto={cripto} showFavorites={showFavorites} />
          ))
        }
      </div>
    </div>
  )
}

export default CriptoList