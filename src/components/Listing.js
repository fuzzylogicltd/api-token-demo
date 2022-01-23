import { useEffect, useState } from 'react'
import './Listing.css'

export default function Listing({ indexFrom, indexTo, token, apiUrl, updateToken }) {

    const [data, setData] = useState([])
    const [fetchError, setFetchError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(apiUrl + 'data?token=' + token +'&from=' + indexFrom + '&to=' + indexTo)
                if (!response.ok) throw Error('Error while accessing data')
                const result = await response.json()
                setData(result.data)
                updateToken(result.token)
            } catch (err) {
                setFetchError(err.message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
      },[indexFrom, indexTo])

    return (
        <>
        { isLoading && <span>Loading...</span> }
        { fetchError && <span>{fetchError}</span> }
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
                    { data.map(record => <tr key={record.index}>
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
  