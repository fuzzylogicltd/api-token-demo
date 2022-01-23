import { useState, useEffect } from "react"

export const useFetch = (node, queryparams, token) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    //const [token, setToken] = useState('')
    const [params, setParams] = useState('')

    let url = 'https://typhoon-jasper-celsius.glitch.me/api/'

    if(node === 'data') {
        setParams(queryparams)
    }

    console.log("starting fetch hook:", node, token, queryparams)

    useEffect(() => {
    const fetchData = async () => {
        if ((token && params) || (!token && !params)) {
            
            if(node === 'data') {
                url += "data?token=" + token + params
            } else {
                url += "token"
            }
            
            setIsPending(true)
            console.log("FETCHING", url)
            try {
                const response = await fetch(url)
                if (!response.ok) throw Error('Error while accessing data')
                const data = await response.json()
                setData(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setIsPending(false)
            }
            
            
        } else {
            console.log("conditions not met")
        }
            
    }
    fetchData()
    },[url])

    return { data, isPending, error }
}


