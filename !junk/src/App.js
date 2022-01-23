import { useState, useEffect } from 'react'
import { useFetch } from './hooks/useFetch'
import './App.css'

import Filter from './components/Filter'
import Listing from './components/Listing'

function App() {

  console.log("loading app")

  // state
  const [indexFrom, setIndexFrom] = useState(1)
  const [indexTo, setIndexTo] = useState(20)

  // const [fetchError, setFetchError] = useState(null)
  // const [isLoading, setIsLoading] = useState(true)

  const updateRange = (from, to) => {
    console.log('updateRange', from, to)
    setIndexFrom(from)
    setIndexTo(to)
    console.log("updateRange state:", indexFrom, indexTo)
  }


    //const queryoparams = API_URL + 'token'
    // const { error, isPending, data } = useFetch('token','')
    // console.log('app comp', error, isPending, data)

    // useEffect(() => { 
    //   if (data) {
    //     setToken(data.token)
    //     console.log('app uf token:', data.token)
    //   }
    // },[data])


  return (
    <div className="App">
      <h1>React test demo</h1>
      <Filter indexFrom={indexFrom} indexTo={indexTo} updateRange={updateRange} />

      {/* { error && <p className="error">{error}</p> }
      { isPending && <p className="loading">Loading...</p> } */}

      { <Listing indexFrom={indexFrom} indexTo={indexTo} /> }

      
    </div>
  );
}

export default App
