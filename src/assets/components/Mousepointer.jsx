import React, { useState } from "react";
import useMousePointer from "../../hooks/useMousePointer";

const Mousepointer = () => {
//  const { x, y } = useMousePointer();
const track = useMousePointer()
return (
    <div>
      <h1>Mouse Pointer</h1>
      <p>Check the console for mouse pointer position</p>
      <h1>
        X: {track.x} Y: {track.y}
      </h1>
    </div>
  );
}   
export default Mousepointer;