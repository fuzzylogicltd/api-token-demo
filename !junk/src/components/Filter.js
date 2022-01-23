import { useState } from 'react'

export default function Filter({ indexFrom, indexTo, updateRange}) {

    const [from, setFrom] = useState(indexFrom)
    const [to, setTo] = useState(indexTo)

    const handleSubmit = async (e) => {
        console.log('submitting')
        e.preventDefault()
        updateRange(from, to)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <span>From</span> 
                <input type="number" value={from} onChange={(e) => setFrom(e.target.value)} />
            </label>
            <label>
                <span>To</span> 
                <input type="number" value={to} onChange={(e) => setTo(e.target.value)}/>
            </label>
            <button>Load</button>
        </form>
    );
  }
  