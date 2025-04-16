import React from 'react'
import useDimensions from "../../hooks/Dimensions"
function Dimensions() {
    const {height,width}=useDimensions()
  return (
    <div>
      <div>height: {height}</div>
      <div>width: {width}</div>
    </div>
  );
}

export default Dimensions   