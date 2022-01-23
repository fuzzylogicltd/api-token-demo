import { useEffect, useState } from 'react'
import './App.css'

import Filter from './components/Filter'
import Listing from './components/Listing'

function App() {

  const [indexFrom, setIndexFrom] = useState(1)
  const [indexTo, setIndexTo] = useState(20)
  const [token, setToken] = useState('')
  
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  
  const API_URL = 'https://typhoon-jasper-celsius.glitch.me/api/'
  
  const updateRange = (from, to) => {
    setIndexFrom(from)
    setIndexTo(to)
  }

  const updateToken = (token) => {
    setToken(token)
  }

  useEffect(() => {
    const fetchToken = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(API_URL + 'token')
        if (!response.ok) throw Error('Error while accessing token')
        const result = await response.json()
        setToken(result.token)
      } catch (err) {
          setFetchError(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchToken()
  },[])

  return (
    <div className="App">
      <h1>React test demo</h1>
      <Filter indexFrom={indexFrom} indexTo={indexTo} updateRange={updateRange} />
      { isLoading && <span>Loading...</span> }
      { fetchError && <span>{fetchError}</span> }
      { token && <Listing indexFrom={indexFrom} indexTo={indexTo} token={token} apiUrl={API_URL} updateToken={updateToken} /> }
    </div>
  );
}

export default App
