import { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'

export default function Listing({ indexFrom, indexTo }) {

    console.log("loading listing")

    const [from, setFrom] = useState(indexFrom)
    const [to, setTo] = useState(indexTo)
    const [token, setToken] = useState('')
    //const [isFetchPending, setIsFetchPending] = useState(false)

    // const url = apiUrl + 'data?token=' + token + '&from=' + from + '&to=' + to

    let queryparams = ''
    let endpoint = 'token'


    const { data, isPending, error } = useFetch(endpoint, queryparams, token)

    if (data) {
        setToken(data.token)
        console.log('setting token', data.token)
    }

    if (token) {
        queryparams = 'from=' + from + '&to=' + to
        endpoint = 'data'
        console.log('we have token')
    } else {
        console.log('we have no token')
    }

    // useEffect(() => {
    //     setIsFetchPending(isPending)
    // })

    // useEffect(() => {
    //     if (data) {
    //         setToken(data.token)
    //         console.log('setting token to', data.token)
    //     }
    // },[data])


    // console.log("range inside listing", indexFrom, indexTo)
    // console.log("range inside listing local", from, to)
    

    return (
        <>
        {/* { error && <p className="error">{error}</p> }
        { isPending && <p className="loading">Loading...</p> } */}
        { data && 
            <table>
                <thead>
                    <tr>
                        <td>Index</td>
                        <td>Slot</td>
                        <td>City</td>
                        <td>Velocity</td>
                    </tr>
                </thead>
                <tbody>
                    { data.data && data.data.map(record => <tr key={record.index}>
                        <td>{record.index}</td>
                        <td>{record.slot ? record.slot : 0}</td>
                        <td>{record.city ? record.city : 'none'}</td>
                        <td>{record.velocity ? record.velocity : '0.00'}</td>
                        </tr>) 
                    }
                </tbody>
            </table>
        }
        </>
    )
}
  