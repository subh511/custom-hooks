import { useEffect, useState } from "react";

export default function Rendering(){
    const [render, setRender] = useState(true)

    //let r = render;
   //  useEffect(()=>{
   //   setInterval(() => {
   //     setRender(r = !r)
   //   }, 2000);
   //  },[])
 
    useEffect(()=>{
     setTimeout(() => {
       setRender(false)
     }, 2000);
    },[])

    return (
        <div>
          {render ? <RenderingOne /> : <div>2nd div</div>}
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

function RenderingOne() {
    useEffect(() => {
      console.error("component mounted");
      return function unmounted(){
        console.log("component unmounted");
      }
    }, []);
    return <div>from inside my component</div>;
  }
  