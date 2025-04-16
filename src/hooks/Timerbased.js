import React, { useEffect } from 'react'

const useInterval = () => {
    const [count, setCount] = React.useState(0)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount(prev=>prev+1)
        },1000)

        return () => clearInterval(interval)
    },[count])
  return {count}
}

export default useInterval