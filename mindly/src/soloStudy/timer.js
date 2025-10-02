import { useEffect, useState } from "react";

const DEFAULT_SESSION_MINUTES = 25;

const Timer = () => {

    const [sessionLength, setSessionLength] = useState(DEFAULT_SESSION_MINUTES);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(DEFAULT_SESSION_MINUTES);
    const [isRunning, setIsRunning] = useState(true);
    const [isOver, setIsOver] = useState(false);
    const [displayMessage, setMessage] = useState(false);

    useEffect(() => {
        let interval;

        if (isRunning && !isOver) {

            interval = setInterval(() => {
                if (seconds === 0) {
                    if (minutes !== 0) {
                        setSeconds(59);
                        setMinutes(prev => prev - 1);
                    }
                    else {
                        //seconds also 0 and minutes also 0... which means timer is over
                        setIsOver(true);
                        setIsRunning(false);

                    }
                }
                else {
                    setSeconds(prev => prev - 1);
                }
            }, 1000)
        }

        return () => clearInterval(interval);

    }, [isRunning, isOver, minutes, seconds]);

    const startBreak = () => {
        setMinutes(0);
        setSeconds(10);
        setMessage(true);
        setIsOver(false);
        setIsRunning(true);
    }

    const startNewSession = () => {
        // start a new session using the selected session length
        setMinutes(sessionLength);
        setSeconds(0);
        setMessage(false);
        setIsOver(false);
        setIsRunning(true);
    }

    const startSessionNow = () => {
        // convenience handler for the selector's start button
        setMinutes(sessionLength);
        setSeconds(0);
        setMessage(false);
        setIsOver(false);
        setIsRunning(true);
    }

    const pause = () => {
        setIsRunning(prev => !prev);
    }

    const twoDigitMin = minutes < 10 ? `0${minutes}` : minutes;
    const twoDigitSec = seconds < 10 ? `0${seconds}` : seconds;

    return (
        <div className={`pomo_timer ${isRunning && !isOver ? "running" : ""}`}>

            {/* session length selector */}
            {!isRunning && !isOver &&
                <div className="sessionControls">
                    <label htmlFor="sessionLength">Study time (min): </label>
                    <select
                        id="sessionLength"
                        value={sessionLength}
                        onChange={(e) => setSessionLength(Number(e.target.value))}
                    >
                        <option value={25}>25</option>
                        <option value={30}>30</option>
                        <option value={35}>35</option>
                        <option value={40}>40</option>
                        <option value={45}>45</option>
                        <option value={50}>50</option>
                    </select>
                    <button onClick={startSessionNow} className="primary">Start New Session</button>
                </div>
            }


            {displayMessage && <div className="message">Break time!</div>}
            <div className="time">{twoDigitMin}:{twoDigitSec}</div>

            {!isOver ? (
                <button onClick={pause}> {isRunning ? "Pause" : "Resume"}</button>
            ) : (
                <div className="breakButtons">
                    <button onClick={startBreak}>Start Break</button>
                    <button onClick={startNewSession} className="primary">Start New Session</button>
                </div>
            )}

        </div>
    );
}

export default Timer;



