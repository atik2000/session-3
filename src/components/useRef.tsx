import { useRef } from "react";

const InputFocus=()=>{
    const inputRef=useRef<HTMLInputElement>(null);

    const handleFocus=()=>{
        if(inputRef.current){
            inputRef.current.focus();
            console.log("Input focused");
        }
        console.log("Input focused");
    }
    return(
        <div>
            <input type="text" ref={inputRef}  placeholder="type somethiing ........"/>
            <button onClick={handleFocus}>Focus Input</button>
        </div>
    )
}
export default InputFocus;