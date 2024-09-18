import './HomePage.css'
import CriptoList from './CriptoList'


const HomePage = () => {

return (
  <>
    <h1 className='title'> Aplicación CoinCap API  </h1>
    <h2 className='subtitle'> Lista de criptomonedas</h2>
    <CriptoList />
  </>
)
}

export default HomePage
