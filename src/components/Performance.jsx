//import React from 'react'
import { useState } from "react";

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
