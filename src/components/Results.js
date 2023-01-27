import React, { useEffect, useState } from "react"
import Youtube from "./Youtube";
import Google from "./Google";
import {useNavigate} from 'react-router-dom'
function Result ({car, theme}){
    const navigate = useNavigate()
    const [data, setData] = useState(car)

    const returnHome = () => {
        navigate('/')
    }
    /*** refresh is preventing data loss when the page is refreshed by using
         browser's session storage   ***/
    const refresh = async () => {
        const newCar = await JSON.parse(sessionStorage.getItem('data'))
        setData(newCar)
    }

    useEffect(() => {
        if(!data){
            refresh()
        }
    },[])

    if(!data){
        return null
    }
    return (
        <div className={theme ? 'master-container':'master-container dark'}>
            <div id='outer-container'>
                <div id='results-header'>
                    <button id='home-button' onClick={returnHome}>Home</button>
                    Results
                </div>
                <div id='stat-box'>
                    <div id='stat-header'>Base Stats</div>
                    <div id='base-stats'>
                        <div className="grid-box 3">Make:  {data.Results[7].Value !== null ? data.Results[7].Value : 'N/A'}</div>
                        <div className="grid-box 1">Model:  {data.Results[9].Value ? data.Results[9].Value : 'N/A'}</div>
                        <div className="grid-box 2">Year:  {data.Results[10].Value ? data.Results[10].Value : 'N/A'}</div>
                        <div className="grid-box 10">Trim:  {data.Results[13].Value ? data.Results[13].Value : 'N/A'}</div>
                        <div className="grid-box 5">Body Style:  {data.Results[23].Value ? data.Results[23].Value : 'N/A'}</div>
                        <div className="grid-box 4">Doors:  {data.Results[24].Value ? data.Results[24].Value : 'N/A'}</div>
                        <div className="grid-box 6">Drive Type:  {data.Results[51].Value ? data.Results[51].Value : 'N/A'}</div>
                        <div className="grid-box 8">Vehicle Type:  {data.Results[14].Value ? data.Results[14].Value : 'N/A'}</div>
                        <div className="grid-box 9">VIN:  {data.Results[5].Value ? data.Results[5].Value : 'N/A'}</div>
                        <div className="grid-box 7">Manufacturer Name:  {data.Results[8].Value ? data.Results[8].Value : 'N/A'}</div>
                    </div>
                </div>
                <div id='vid-container'>
                    <Youtube car={data}/>
                </div>
                <div>
                    <Google car={data}/>
                </div>
            </div>

        </div>
    )
}

export default Result
