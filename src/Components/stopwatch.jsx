import { useState, useRef } from "react";

const Stopwatch = () => {
    const [counter, setCounter] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null); // Stores the interval ID

    const startStopwatch = () => {
        if (!isRunning) {
            intervalRef.current = setInterval(() => {
                setCounter(prev => prev + 1);
            }, 1000);
            setIsRunning(true);
        }
    };

    const stopStopwatch = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
    };

    const resetStopwatch = () => {
        clearInterval(intervalRef.current);
        setCounter(0);
        setIsRunning(false);
    };

    return (
        <div>
            <h1>Stopwatch</h1>
            <p>{counter} seconds</p>
            <button onClick={startStopwatch} disabled={isRunning}>Start</button>
            <button onClick={stopStopwatch} disabled={!isRunning}>Stop</button>
            <button onClick={resetStopwatch}>Reset</button>
        </div>
    );
};

export default Stopwatch;
