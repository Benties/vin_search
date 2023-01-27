import { useState, useContext} from "react"
import { VinContext } from "../context/vinContext";
import {useNavigate} from 'react-router-dom'

function Search({theme}){

    const {setCar} = useContext(VinContext)
    const [vin, setVin] = useState('')
    const navigate = useNavigate()

    /*** onSubmit sends a fetch to a backend route which fetches
        an API, returning the search results from the VIN entered.
        The result is then given to the VinContext and wrapped around
        the app as  a provider.                               ***/

    const onSubmit = async (e) => {
        e.preventDefault()
        const data = await fetch(`/vin/${vin}`)
        const car = await data.json()
        if(!car.err){
            sessionStorage.setItem('data', JSON.stringify(car))
            setCar(car)
            navigate('/car')
        } else {
            window.alert('Manufacturer is not registered with NHTS')
        }
    }


    return(
        <div className={theme ? 'master-container':'master-container dark'}>
            <div>
                <div id='search-title'>VIN SEARCH</div>
                <form onSubmit={onSubmit} className='search-form'>
                    <input
                        type='text'
                        placeholder="VIN"
                        value={vin}
                        onChange={(e) => setVin(e.target.value)}
                        />
                    <button>Enter</button>
                </form>
            </div>
        </div>
    )
}


export default Search
