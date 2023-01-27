import React, {useEffect, useState} from "react"

function Google ({car}){
    const [load, setLoad] = useState([])


    /*** googleThis will fetch the backend route, the keyword is
        Make Model Year respectively. This gets sent to the google-this API,
        returning an array of images.
                                                                        ***/
    const googleThis = async () => {
        const res = await fetch(`/google?keyword=${car.Results[7].Value} ${car.Results[9].Value} ${car.Results[10].Value}`)
        if(res){
            const data = await res.json()
            setLoad([data[0].url, data[1].url, data[2].url])
        }
    }

    useEffect(() => {
        googleThis()
    },[])

    return (
        <div id='img-container'>
            <div className="img-box">
                <img
                    src={load[0]}
                    alt='Car Picture'
                    loading='lazy'
                    />
            </div>
            <div className="img-box">
                <img
                    src={load[1]}
                    alt='Car Picture'
                    loading='lazy'
                    />
            </div>
            <div className="img-box">
                <img
                    src={load[2]}
                    alt='Car Picture'
                    loading='lazy'
                    />
            </div>
        </div>
    )
}


export default Google
