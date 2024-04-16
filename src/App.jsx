import { useState } from 'react'

function App() {
 // const [count, setCount] = useState(0)

  return (
    <div>
    <MyComponent/>
    </div>
  )
}


function MyComponent(){

  const [count,setCount] = useState(0);

  function incrementCount(){
    setCount(count + 1)
  }

  return(
    <div>
    <p>{count}</p>
    <button onClick={incrementCount}>Increment</button>
    </div>
  )
}


export default App
