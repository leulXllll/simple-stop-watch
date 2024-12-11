import { useEffect, useRef, useState } from "react";
import './stopwatch.css';
const Stopwatch = () => {

        const [time,setTime] = useState(0);

        const [start_resume,setStartResume] = useState('Start');

        const [isRunning,setRunning] = useState(false);


        const IntervalIdRef = useRef(null);

        const startTimeRef = useRef(0);


        useEffect(()=>{
                if(isRunning){
                    IntervalIdRef.current= setInterval(()=>{
                        setTime((Date.now()-startTimeRef.current));
                    },10)
                }

                return ()=>clearInterval(IntervalIdRef.current);

        },[isRunning])

        const stop = ()=>{
            if(isRunning){
                setRunning(false);
                setStartResume('Resume');
            }
        }
        const start = ()=>{                
            setRunning(true);
            startTimeRef.current = Date.now() - time;

        }
           
        const reset = ()=>{
          setTime(0);
          setStartResume('Start');
        }
        const formatTime = ()=>{    
            let hours = Math.floor(time /(1000 * 60 * 60));
            
            let minute = Math.floor(time /(1000 * 60) % 60 );
            
            let sec = Math.floor(time /(1000)%60);
            
            let milisec = Math.floor((time%1000)/10);

            hours = String(hours).padStart(2,"0");
            minute = String(minute).padStart(2,"0");
            sec = String(sec).padStart(2,"0");
            milisec = String(milisec).padStart(2,"0");

                return `${hours}:${minute}:${sec}:${milisec}`;
        }
    return ( 
        <div className="stopwatch">
            <div className="display">
                {formatTime()}
            </div>
            <div className="controls">
                <button onClick={start} className="start-btn">{start_resume}</button>
                <button onClick={stop} className="stop-btn">Stop</button>
                <button onClick={reset} className="reset-btn">Reset</button>
            </div>
        </div>
     );
}
 
export default Stopwatch;