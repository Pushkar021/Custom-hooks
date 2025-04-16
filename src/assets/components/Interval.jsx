import React from 'react'
import useInterval from '../../hooks/Timerbased'

const Interval = () => {
    const {count} = useInterval()
  return (
    <>
    <div>Interval  : {count}</div>
    </>
    
  )
}

export default Interval