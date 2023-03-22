import React,{useState,useRef} from 'react'
import VID from "./video.mp4"

const App = () => {
    let [video,setVideo]=useState(VID)
    let [loading,setLoading]=useState(true)
    let viRef=useRef()
    let playorpause=()=>{
       if(loading)
       {
         setLoading(false)
         viRef.current.play()
       }
       else{
        setLoading(true)
        viRef.current.pause()
       }
    }
  return (
    <div>
        <video src={video} height="500px" width="500px" ref={viRef} onClick={playorpause}></video>
    </div>
  )
}

export default App