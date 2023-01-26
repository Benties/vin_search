import React, {useEffect, useContext, useState} from "react"
import { VinContext } from "../context";



function Google ({car}){
    const [load, setLoad] = useState([])
    // const {car} = useContext(VinContext)

    const googleThis = async () => {
        const res = await fetch(`/google?keyword=${car.Results[7].Value} ${car.Results[9].Value} ${car.Results[10].Value}`)
        if(res){
            const data = await res.json()
            console.log(data)
            setLoad([data[0].url, data[1].url])
            console.log(load)
        }
    }

    useEffect(() => {
        googleThis()
    },[])

    return (
        <div>
            <img
                src={load[0]}
                loading='lazy'
                width='300px'
                />
            <img
                width='300px'
                src={load[1]}
                loading='lazy'
                />
        </div>
    )
}


export default Google
