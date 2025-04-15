import React,{useState,useEffect} from "react";
import axios from "axios"



function useData(n) {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://paytm-1-n93v.onrender.com/app/v1/alluser"
      );
      setData(res.data.user || []);
      setLoading(false)
    };
    const value = setInterval(()=>{
        fetchData()
    },n*1000)

    return ()=>{
        clearInterval(value) //this is the clean up function for if new clk start then it will stop the older interval if it is not present then 2 clocks are started 
    }
  }, [n]);

  return {data,loading}
}
export default useData