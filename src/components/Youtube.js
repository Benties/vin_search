import React, {useEffect, useContext, useState} from "react"
import { VinContext } from "../context/vinContext";



function Youtube ({car}){
    const [load, setLoad] = useState('')
    // const {car} = useContext(VinContext)


       /*** youtubeThis will fetch a backend route, the keyword is
        Make Model Year respectively. This gets sent to the youtube-search-api API,
        returning an obj with an embed id of a youtube video.
                                                                        ***/
    const youtubeThis = async () => {
        const res = await fetch(`/youtube?keyword=${car.Results[7].Value} ${car.Results[9].Value} ${car.Results[10].Value}`)
        const data = await res.json()
        if(data){
            setLoad(data.items[0].id)
        }
    }

    useEffect(() => {
        youtubeThis()
    },[])

    return (
        <div>
              <iframe
                width='100%'
                height='320'
                frameBorder='0'
                loading='lazy'
                allowFullScreen
                src={`https://www.youtube.com/embed/${load}`}
            />
        </div>
    )
}


export default Youtube
