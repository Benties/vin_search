import React, {useEffect, useContext} from "react"
import { VinContext } from "../context";
import {useSelector, useDispatch} from 'react-redux'
import { getCarThunk } from "../store/cars"
import google from 'googlethis'

function Result (){
    const youtubesearchapi = require('youtube-search-api')

    const dispatch = useDispatch()
    // const car = useSelector(state => state?.car.Results)
    const {car} = useContext(VinContext)


    // async function googleMe() {
    //     const usearch = await youtubesearchapi.GetListByKeyword("apples",[true],[1],[{type:"video/channel/playlist/movie"}])
    //     // const response = await google.search('TWDG', options);
    //     return usearch
    // }

    const googleThis = async () => {
        const res = await fetch(`/google?keyword=${car.Results[7].Value} ${car.Results[9].Value}`)
        // if(res.ok){
        const data = await res.json()
        console.log(data)
        // }
    }

    const youtubeThis = async () => {
        const res = await fetch(`/youtube?keyword=${car.Results[7].Value} ${car.Results[9].Value}`)
        // if(res.ok){
        const data = await res.json()
        // }
        console.log(data)
        return data
    }


    useEffect(() => {
       googleThis()
       youtubeThis()
    },[])
    // `https://www.youtube.com/watch?v=${youtubeThis?.items[0].id}`
    return (
        <div>
            <video width='320' height='240' lazy='true' controls preload='none'>
                <source src='https://www.youtube.com/watch?v=34VZzBWBDN0' type='video/mp4'/>
            </video>
            <div>Year: {car.Results[10].Value}</div>
            <div>Make: {car.Results[7].Value}</div>
            <div>Model: {car.Results[9].Value}</div>
            <div>Body Style: {car.Results[23].Value}</div>
            <div>Doors: {car.Results[24].Value}</div>
            <div>Drive Type: {car.Results[51].Value}</div>
            <div>Manufacturer Name: {car.Results[8].Value}</div>
            <div>Vehicle Type: {car.Results[14].Value}</div>
            <div>VIN: {car.Results[5].Value}</div>
            <div>Trim: {car.Results[13].Value}</div>
        </div>
    )
}

export default Result
