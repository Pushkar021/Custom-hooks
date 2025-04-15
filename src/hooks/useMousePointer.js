import { useEffect ,useState} from "react"

const useMousePointer = () => {
const [positon,setpostion] = useState({x:0,y:0})
const handleclick = (e)=>{
    setpostion({x:e.clientX,y:e.clientY})
}
useEffect(()=>{
    window.addEventListener("mousemove",handleclick)
return ()=>{
    window.removeEventListener("mousemove",handleclick)
    
}

},[])
return positon
}
export default useMousePointer
// This custom hook tracks the mouse pointer position on the screen. It uses the useEffect hook to add an event listener for mouse movements, updating the position state whenever the mouse moves. The cleanup function removes the event listener when the component unmounts.


//question 
// 🔍 The confusion:
// You're asking:

// We used useEffect(..., []), so it runs only once when the component mounts.
// Then how is the position value (x and y) updating again and again as we move the mouse?

// ✅ Here's what's happening:
// You're right — this useEffect only runs once when the component mounts.
// But what's inside the effect is this line:

// js
// Copy
// Edit
// window.addEventListener("mousemove", handleclick)
// This line tells the browser:

// "Hey, whenever the user moves the mouse, call this handleclick function."

// 🔄 So even though useEffect runs once, the event listener keeps listening for mousemove events forever (until the component unmounts or the cleanup is called).
// Every time the mouse moves:

// The handleclick function runs

// It gets the current mouse position from the event

// It calls setpostion({ x: ..., y: ... })

// That triggers a re-render

// And your hook returns the new updated position