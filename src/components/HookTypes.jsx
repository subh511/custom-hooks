//import React from 'react'

import {useEffect,useState} from "react";

function useIsOnline(){
    const [isOnline,setIsOnline] = useState(window.navigator.onLine);

    useEffect(()=>{
        window.addEventListener("online",()=>{
            setIsOnline(true);
        })
        window.addEventListener("offline",()=>{
            setIsOnline(false);  
        }
    )
    },[])

    return isOnline;
}

export default function HookTypes() {

const isOnline = useIsOnline();

if(isOnline){
    return "you are online";
}
 return "you are offline"
}
