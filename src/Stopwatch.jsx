import { useEffect, useRef, useState } from "react";

const Stopwatch = () => {

        const [time,setTime] = useState(0);
        const [isRunning,setRunning] = useState(false);


        const IntervalIdRef = useRef(null);

        const startTimeRef = useRef(0);


        useEffect(()=>{

        },[isRunning])

        const stop = ()=>{

        }
        const start = ()=>{ 

           

        }
           
        const reset = ()=>{
          
        }
        const formatTime = ()=>{    

                return `00:00:00`;
        }
    return ( 
        <div className="stopwatch">
            <div className="display">
                {formatTime()}
            </div>
            <div className="controls">
                <button onClick={start} className="start-btn">Start</button>
                <button onClick={stop} className="stop-btn">Stop</button>
                <button onClick={reset} className="reset-btn">Reset</button>
            </div>
        </div>
     );
}
 
export default Stopwatch;