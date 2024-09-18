import { useEffect, useState } from 'react'
import { API_URL } from '../constants/env'

const useFetch = (endpoint) => {

  const [criptosData, setCriptosData] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    fetch(`${API_URL}${endpoint}`)
      .then((response) => response.json())
      .then(({ data }) => setCriptosData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [])

  return [criptosData, loading, error]
}

export default useFetch;