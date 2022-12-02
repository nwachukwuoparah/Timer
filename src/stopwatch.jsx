import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import ControlButtons from "./ControlButtons";

function StopWatch() {
    const [Active, setActive] = useState(false);
    const [Paused, setPaused] = useState(true);
    const [time, setTime] = useState(0);

        let interval =  useEffect(() => {
        if (Active && Paused === false){
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        
        return () => {
            clearInterval(interval);
        };
    }, [Active, Paused]);

    const handleStart = () => {
        setActive(true);
        setPaused(false);
    };

    const handlePauseResume = () => {
        setPaused(!Paused);
    };

    const handleReset = () => {
        setActive(false);
        setTime(0);
    };

    return (
        <div className="stop-watch">
            <Timer time={time} />
            <ControlButtons
                active={Active}
                Paused={Paused}
                handleStart={handleStart}
                handlePauseResume={handlePauseResume}
                handleReset={handleReset}
            />
        </div>
    );
}

export default StopWatch;