import React, {useEffect, useState} from "react"



function Youtube ({car}){
    const [load, setLoad] = useState('')


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
                title="Car Video"
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
