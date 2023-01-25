import { useEffect, useState } from "react"
import { useDispatch } from 'react-redux';
import { getCarThunk } from "../store/cars"
function Search(){
    const dispatch = useDispatch()
    const [vin, setVin] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        // const payload = { format:'json', data : vin }
        const car = await dispatch(getCarThunk(vin))
        console.log(car)
}
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder="VIN"
                    value={vin}
                    onChange={(e) => setVin(e.target.value)}
                    />
                    <button>Enter</button>
            </form>
        </div>
    )
}


export default Search
