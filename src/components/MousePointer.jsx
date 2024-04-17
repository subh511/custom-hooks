//import React from 'react'
import { useEffect, useState } from "react";

function useMousePointer() {
  const [mousePointer, setMousePointer] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    setMousePointer({ x: e.clientX, y: e.clientY });
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.addEventListener("mousemove", handleMouseMove);
    };
  });
  return mousePointer;
}

export default function MousePointer() {
  const mousePointer = useMousePointer();
  return (
    <div>
    your mousePointer is x: {mousePointer.x} y: {mousePointer.y}
    </div>
  );
}

//homework calculate actual width and height of window when u resize the window;
//using custom hooks;