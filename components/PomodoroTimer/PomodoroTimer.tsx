import React, {FC, useEffect, useState} from "react";
import WorkTimer from "@/components/PomodoroTimer/WorkTimer/WorkTimer";
import {faAngleLeft, faAngleRight, faSort} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Prompt} from "next/font/google";
import Article from "@/components/PomodoroTimer/Article";

const prompt = Prompt({subsets: ['latin'], weight: '400'});

const PomodoroTimer:FC = () => {
    const [timerTime, setTimerTime] = useState({
        working: 25,
        short: 5,
        long: 15
    });
    const [timeLeft, setTimeLeft] = useState(timerTime.working * 60);
    const [timerType, setTimerType] = useState('working timer');
    const [timerRunning, setTimerRunning] = useState(false);

    const changeType = ():void => {
        if(timerType === 'working timer'){
            setTimerType('short rest');
            setTimeLeft(timerTime.short * 60);
            return;
        }
        if(timerType === 'short rest'){
            setTimerType('long rest');
            setTimeLeft(timerTime.long * 60);
            return;
        }
        setTimeLeft(timerTime.working * 60);
        setTimerType('working timer');
        return;
    }

    return (
        <div className="select-none">
            <WorkTimer timeLeft={timeLeft}
                       setTimeLeft={setTimeLeft}
                       timerTime={timerTime}
                       timerType={timerType}
                       setTimerType={setTimerType}
                       timerRunning={timerRunning}
                       setTimerRunning={setTimerRunning}/>
            <div onClick={changeType} className={`${prompt.className} flex justify-evenly w-40 items-center text-black dark:text-white ${timerRunning ? 'opacity-0' : 'opacity-90'} hover:cursor-pointer ml-36 mt-6
            transition-all duration-500`}>
                <span className="rotate-90 text-[13px]">
                    <FontAwesomeIcon icon={faAngleLeft}/>
                    <FontAwesomeIcon icon={faAngleRight}/>
                </span>
                <span className="opacity-100 transition-all duration-100">
                    {timerType}
                </span>
            </div>
            <Article/>
        </div>
    );
};

export default PomodoroTimer;