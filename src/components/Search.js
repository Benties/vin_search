import { useState, useContext} from "react"
import { VinContext } from "../context";
import { useDispatch } from 'react-redux';
import { getCarThunk } from "../store/cars"
import {useNavigate} from 'react-router-dom'

function Search(){
    const dispatch = useDispatch()
    const {car , setCar} = useContext(VinContext)
    const [vin, setVin] = useState('')
    const navigate = useNavigate()


    const onSubmit = async (e) => {
        e.preventDefault()
        const car = await dispatch(getCarThunk(vin))
        if(car){
            setCar(car)
            navigate('/car')
        }
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
