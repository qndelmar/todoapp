import {FC, useState} from "react";
import {Merriweather_Sans} from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";

const merriw = Merriweather_Sans({subsets: ['latin'], weight: '400'})
const ToDoWrapper:FC = () => {
    const [activeCategory, setActiveCategory] = useState(0);
    return (
        <div className="">
            <p className={`${merriw.className} text-2xl text-black dark:text-white transition-all duration-200 text-right`}>Add, sort, complete and manage<span className="yourTasksLight"> your tasks</span></p>
            <Navbar theme={'dark'} openTasks={2} closedTasks={2} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
        </div>
    );
};

export default ToDoWrapper;