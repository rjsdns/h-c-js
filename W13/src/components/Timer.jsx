import { useEffect, useState} from "react"

function Timer(){
    const [seconds, setSeconds]=useState(0);

    useEffect(()=>{
        let interVar = setInterval(() => {setSeconds((prev)=>prev+1) }, 1000);
        return ()=>{ clearInterval(interVar); };
    });

    
    return(
        <>
        <h1>{seconds}초</h1>
        </>
    )
}

export default Timer