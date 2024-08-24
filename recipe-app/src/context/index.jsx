import { createContext, useState } from "react"



export const GlobalContext = createContext(null)

    const [searchParam,setSearchParam] = useState('')

export default function GlobalState({children}){
    return(
        <GlobalContext.Provider value={{searchParam,setSearchParam}}>{children}</GlobalContext.Provider>
    )
}