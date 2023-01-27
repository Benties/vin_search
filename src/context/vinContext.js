import { createContext, useState } from "react";

export const VinContext = createContext()

export function VinProvider(props){
    const [car, setCar] = useState('')

    return (
        <VinContext.Provider value={{car, setCar}}>
            {props.children}
        </VinContext.Provider>
    )
}
