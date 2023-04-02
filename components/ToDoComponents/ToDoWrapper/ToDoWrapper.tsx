import {createRef, FC, ReactElement, useEffect, useMemo, useState} from "react";
import {Merriweather_Sans} from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import AddTask from "@/components/ToDoComponents/AddTask";
import ToDoPosition from "@/components/ToDoComponents/ToDoPosition";
import {useAppSelector} from "@/store/hooks/redux";
import {ITodo} from "@/interfaces/ITodo";
import useSortByClosed from "@/hooks/useSortByClosed";
import cl from './ToDoWrapper.module.css';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown19, faArrowDownAZ, faArrowUpAZ} from "@fortawesome/free-solid-svg-icons";
import {sort} from "next/dist/build/webpack/loaders/css-loader/src/utils";
import SortPanel from "@/components/ToDoComponents/SortPanel/SortPanel";

const merriw = Merriweather_Sans({subsets: ['latin'], weight: '400'})
const ToDoWrapper:FC = () => {
    const todos = useAppSelector(state => state.todos.todos);
    const [activeCategory, setActiveCategory] = useState(0);
    const [sortedArray, setSortedArray] = useSortByClosed(activeCategory, todos);
    const [loaded, setLoaded] = useState(false);
    const [sortedOption, setSortedOption] = useState(2);

    useEffect(() => {
        setLoaded(true);
    }, [])

    useMemo(() => {
        if(sortedOption === 0){
            setSortedArray([...sortedArray].sort((a:ITodo, b:ITodo) => {
               return a.name.localeCompare(b.name);
            }))
        }
        if(sortedOption === 1){
            setSortedArray([...sortedArray].sort((a:ITodo, b:ITodo) => {
                return b.name.localeCompare(a.name)
            }))
        }
        if(sortedOption === 2){
            setSortedArray([...sortedArray].sort((a:ITodo, b:ITodo) => {
                return b.importance - a.importance;
            }))
        }
    }, [sortedOption])

    return (
        <div className="flex flex-col items-end">
            <p className={`${merriw.className} text-2xl text-black dark:text-white transition-all duration-200 text-right`}>Add, sort, complete and manage<span className="yourTasksLight"> your tasks</span></p>
            <SortPanel sortedOption={sortedOption} setSortedOption={setSortedOption}/>
            <Navbar theme={'dark'} openTasks={2} closedTasks={2} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
            <TransitionGroup className={`${cl.scrollbar} h-96 pr-5 overflow-auto overflow-x-hidden mt-5`}>
                {loaded && sortedArray.map((el:ITodo) => {
                    return (<CSSTransition key={el.id} timeout={500} classNames="item">
                        <ToDoPosition name={el.name} importance={el.importance} color={el.color} isClosed={el.isClosed} id={el.id}/>
                    </CSSTransition>)
                })}
            </TransitionGroup>

        </div>
    );
};

export default ToDoWrapper;