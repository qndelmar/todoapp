import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from "@/components/Navbar/Navbar";
import {useAppDispatch, useAppSelector} from "@/store/hooks/redux";
import {swapSlice} from "@/store/reducers/switchThemeReducer";
import ThemeSwitch from "@/components/ThemeSwitch/ThemeSwitch";
import {Merriweather_Sans} from "next/font/google";
import PomodoroTimer from "@/components/PomodoroTimer/PomodoroTimer";
import ToDoWrapper from "@/components/ToDoComponents/ToDoWrapper/ToDoWrapper";

const merriw = Merriweather_Sans({subsets: ['latin'], weight: '400'})

export default function Home() {
  return (
    <div>
        <ThemeSwitch/>
        <div className="w-[1500px] mt-48 mx-auto">
            <p className={`${merriw.className} dark:text-white transition-all duration-100 text-black text-4xl leading-10`}>Use <span className={`useApp`}>our app</span><br/>to plan and track your activities</p>
            <div className="grid grid-cols-2">
                <PomodoroTimer/>
                <ToDoWrapper/>
            </div>
        </div>
    </div>
  )
}
