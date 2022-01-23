import { useState } from 'react'
import './Filter.css'

export default function Filter({ indexFrom, indexTo, updateRange}) {

    const [from, setFrom] = useState(indexFrom)
    const [to, setTo] = useState(indexTo)
    const [valError, setValError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (to < from)  {
            setValError('Invalid index range')
        } else {
            updateRange(from, to)
            setValError(null)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>From</span> 
                    <input type="number" min={1} value={from} onChange={(e) => setFrom(e.target.value)} />
                </label>
                <label>
                    <span>To</span> 
                    <input type="number" max={1000} value={to} onChange={(e) => setTo(e.target.value)}/>
                </label>
                <button>Load</button>
            </form>
            {valError && <span>{valError}</span>}
        </>
    );
  }
  