import React, {createRef, FC, useEffect, useRef} from 'react';
import cl from './ThemeSwitch.module.css';
import Image from 'next/image';
import {create} from "domain";
import {useAppDispatch, useAppSelector} from "@/store/hooks/redux";
import {swapSlice} from "@/store/reducers/switchThemeReducer";
import {Kanit} from "next/font/google";
import useTheme from "@/hooks/useTheme";

const kanit = Kanit({subsets: ['latin'], weight: '700'})


const ThemeSwitch:FC = () => {
    const ref = createRef<HTMLDivElement>();
    const ballRef = createRef<HTMLDivElement>();
    const firstPRef = createRef<HTMLParagraphElement>()
    const secondPRef = createRef<HTMLParagraphElement>()
    const [colorTheme, setTheme] = useTheme();


    return (
        <div className={`${kanit.className} top-2 absolute left-2`}>
            <div className="flex items-center w-fit bg-transparent">
                <p ref={firstPRef} className="text-black dark:text-[wheat] pr-2 text-[0.7em] transition-all duration-100">NIGHT</p>
            <div ref={ref}  className={`w-[55px] h-[25px] dark:bg-white bg-black rounded-3xl relative bg-amber-100 flex items-center transition-all duration-100`} onClick={setTheme}>
                <div ref={ballRef} className="absolute bg-white dark:bg-black h-[22px] w-[22px] ease-linear rounded-full left-[58%] dark:left-[1%] transition-all duration-100"></div>
            </div>
                <p ref={secondPRef} className="pl-2 text-[0.7em] text-gray-700 dark:text-white transition-all duration-100">DAY</p>
            </div>
        </div>

    );
};

export default ThemeSwitch;