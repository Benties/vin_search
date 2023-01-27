import { useState, useContext} from "react"
import { VinContext } from "../context/vinContext";
import {useNavigate} from 'react-router-dom'

function Search({theme}){

    const {car , setCar} = useContext(VinContext)
    const [vin, setVin] = useState('')
    const navigate = useNavigate()


    const onSubmit = async (e) => {
        e.preventDefault()
        const data = await fetch(`/vin/${vin}`)
        const car = await data.json()
        if(car){
            sessionStorage.setItem('data', JSON.stringify(car))
            setCar(car)
            navigate('/car')
        }
    }


    return(
        <div className={theme ? 'master-container':'master-container dark'}>
            <form onSubmit={onSubmit} className='search-form'>
            <div>VIN SEARCH</div>
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
