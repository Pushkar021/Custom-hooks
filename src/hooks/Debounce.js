import { useEffect,useState } from "react"

const useDebounce = (fn,timer) => {
      const [debouncedValue,setDebouncedValue] = useState(fn)
    useEffect(()=>{
        const handler = setTimeout(() => {
            setDebouncedValue(fn)       
        }, timer);
        return ()=>{
            clearTimeout(handler)
        }
        
  },[fn])
  
  return debouncedValue
}   

export default useDebounce