import React, { useEffect } from 'react'

 const useDimensions = () => {
   const [height, setHeight] = React.useState(window.innerHeight)
const [width, setWidth] = React.useState(window.innerWidth)
useEffect(()=>{
    const handleresize=()=>{
        setHeight(window.innerHeight)
        setWidth(window.innerWidth)
    }
    window.addEventListener('resize',handleresize)
},[])
 return {height,width}
}

export default useDimensions