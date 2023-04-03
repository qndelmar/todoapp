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
import MusicComponent from "@/components/MusicsComponent/MusicComponent";

const merriw = Merriweather_Sans({subsets: ['latin'], weight: '400'})

export default function Home() {
  return (
    <div>
        <ThemeSwitch/>
        <div className="2xl:w-[1500px] xl:w-[1250px] lg:w-[1000px] md:w-[750px] w-full sm:mt-48 mt-24 mx-auto">
            <p className={`${merriw.className} dark:text-white transition-all duration-100 text-center md:text-left text-black lg:text-4xl text-3xl leading-10`}>Use <span className={`useApp`}>our app</span><br/>to plan and track your activities</p>
            <div className={`grid md:grid-cols-2 grid-cols-1`}>
                <PomodoroTimer/>
                <ToDoWrapper/>
            </div>
            <MusicComponent/>
        </div>
    </div>
  )
}
