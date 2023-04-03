import React, {createRef, FC, useEffect, useRef, useState} from 'react';
import {FontAwesomeIcon, FontAwesomeIconProps} from '@fortawesome/react-fontawesome'
import {faArrowsRotate, faPause, faPlay, IconDefinition} from "@fortawesome/free-solid-svg-icons";

interface WorkTimer{
    timeLeft: number,
    setTimeLeft: any,
    timerTime: object,
    timerType: string,
    setTimerType: any;
    timerRunning: boolean,
    setTimerRunning: any
}
const WorkTimer:FC<WorkTimer> = ({timeLeft, setTimeLeft, timerTime, setTimerType, timerType, timerRunning, setTimerRunning}) => {

    const ref = createRef<IconDefinition>();
    useEffect(() => {
        let timer:ReturnType<typeof setInterval>;

        if (timerRunning && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prevTimeLeft:number) => prevTimeLeft - 1);
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [timerRunning, timeLeft]);

    const startAndStopTimer = () => {
            if(timerRunning){
                setTimerRunning(false);
                return
            }
            if(!timerRunning){
                setTimerRunning(true);
            }
    };


    const resetTimer = () => {
        setTimeLeft(25 * 60);
        setTimerType('working timer');
        setTimerRunning(false);
    };

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <div className="">
        <div className="flex justify-between items-center rounded-xl h-20 sm:w-96 w-[120%] -ml-5 sm:ml-0 md:ml-10 border-t-4 mt-10">
            <div className="text-7xl font-bold text-gray-500 dark:text-white opacity-70">
                {minutes < 10 ? "0" : ""}
                {minutes}:{seconds < 10 ? "0" : ""}
                {seconds}
            </div>
            <div className="text-gray-500 dark:text-white opacity-70 text-4xl w-full sm:w-[30%] flex justify-evenly pt-1">
                <button onClick={startAndStopTimer} aria-label="Play/Stop">{timerRunning ? <FontAwesomeIcon icon={faPause}/> : <FontAwesomeIcon icon={faPlay}/>}</button>
                <button onClick={resetTimer} aria-label="Reset"><FontAwesomeIcon icon={faArrowsRotate} /></button>
            </div>
        </div>
        </div>
    );
};

export default WorkTimer;