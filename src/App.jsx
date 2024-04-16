import { useEffect, useState } from "react";

function App() {
   const [render, setRender] = useState(true)

   //let r = render;

   useEffect(()=>{
    setTimeout(() => {
      setRender(false)
    }, 2000);
   },[])

  return (
    <div>
      {render ? <Rendering /> : <div>2nd div</div>}
    </div>
  );
}

// function MyComponent() {
//   const [count, setCount] = useState(0);

//   function incrementCount() {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={incrementCount}>Increment</button>
//     </div>
//   );
// }

function Rendering() {
  useEffect(() => {
    console.error("component mounted");
    return function unmounted(){
      console.log("component unmounted");
    }
  }, []);
  return <div>from inside my component</div>;
}

export default App;
