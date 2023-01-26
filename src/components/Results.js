import React from "react"
import Youtube from "./Youtube";
import Google from "./Google";
function Result ({car}){


    return (
        <div id='outer-container'>
            <div id='stat-box'>
                <div id='stat-header'>Base Stats</div>
                <div id='base-stats'>
                    <div>Model: {car.Results[9].Value}</div>
                    <div>Year: {car.Results[10].Value}</div>
                    <div>Make: {car.Results[7].Value}</div>
                    <div>Doors: {car.Results[24].Value}</div>
                    <div>Body Style: {car.Results[23].Value}</div>
                    <div>Drive Type: {car.Results[51].Value}</div>
                    <div>Manufacturer Name: {car.Results[8].Value}</div>
                    <div>Vehicle Type: {car.Results[14].Value}</div>
                    <div>VIN: {car.Results[5].Value}</div>
                    <div>Trim: {car.Results[13].Value}</div>
                </div>
            </div>
            <div id='img-container'>
                <Google car={car}/>
            </div>
            <div id='vid-container'>
                <Youtube car={car}/>
            </div>
        </div>
    )
}

export default Result
