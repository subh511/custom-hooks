//import React from 'react'
import { useEffect, useState } from "react";


function useInterval(fn,timeout){

    useEffect(()=>{
        setInterval(()=>{
            fn()
        },timeout)
    },[])

}


export default function Performance() {

    const [count, setCount] = useState(0);

    useInterval(() => {
    setCount(c => c + 1);
    }, 1000)

  return (
    <div>
    Timer is at {count}
    </div>
  )
}
