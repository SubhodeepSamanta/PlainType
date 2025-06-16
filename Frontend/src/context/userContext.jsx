import { useState } from "react";
import { createContext } from "react";

export const userContext= createContext({});

export const userContextProvider= ({children})=>{
    const [userInfo,setUserInfo]= useState({});
    return (
        <userContext.Provider value={{userInfo,setUserInfo}}>
    <>{children}</>
    </userContext.Provider>
    )
}