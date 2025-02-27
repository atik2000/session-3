import { useState,useEffect } from "react";
const Timer =()=>{
    const [seconds,setSeconds]=useState<number>(0);

    useEffect(()=>{
        const interval=setInterval(()=>{
            setSeconds(seconds+1);
        },1000);
        
        return ()=>clearInterval(interval);
    },[seconds]);

    return <div>
        <p>Seconds:{seconds}</p>
        <p>Minutes:{Math.floor(seconds/60)}</p>
        <p>Hours:{Math.floor(seconds/3600)}</p>
    </div>
}

export default Timer;