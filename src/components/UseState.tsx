import { useState } from "react";
const MyCounter =()=>{
    const [count,setCount]=useState<number>(0);

    return <div>
        {/* <h1>Counter</h1> */}
        <h2>{count}</h2>
        <button onClick={()=>setCount(count+10)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset</button>
    </div>
}

export default MyCounter;