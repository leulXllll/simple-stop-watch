import { useEffect, useRef, useState } from "react";

const Stopwatch = () => {


    const [sec,setSec] =useState(0);

    const [min,setMin] =useState(0);
    
    const [hour,setHour] =useState(0);

    const [value,setValue] =useState(false);

    const secref = useRef(0);
    const minref = useRef(0);

    useEffect(()=>{
        if(value){

            let interval = setInterval(()=>{
                
                secref.current = sec;

                minref.current = min;

                if(minref.current==59 && secref.current==59){
                    setHour(hour+1);
                    setSec(0);
                    setMin(0);
                }else if(secref.current==59){
                    setMin(min+1);
                    setSec(0);
                } 
                
                setSec(sec=>sec+1);
                
            },1000);
            
            return ()=>clearInterval(interval);
        }
    },[sec,value]);

        const stop = ()=>{
            setValue(false);
        }
        const start = ()=>{
            setValue(true);
        }
        const reset = ()=>{
            setSec(0);
            setMin(0);
            setHour(0);
        }
    return ( 
        <div>
            <h1>{hour}:{min}:{sec}</h1>
            <button onClick={start} >Start</button>
            <button onClick={stop} >Stop</button>
            <button onClick={reset} >Reset</button>
        </div>
     );
}
 
export default Stopwatch;