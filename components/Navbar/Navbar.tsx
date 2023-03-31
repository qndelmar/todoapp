import React, {FC} from 'react';
import cl from './Navbar.module.css';

interface NavBarProps{
    theme: string,
    openTasks: number,
    closedTasks: number,
    activeCategory: number,
    setActiveCategory: any
}
const Navbar:FC<NavBarProps> = ({theme, openTasks, closedTasks, activeCategory, setActiveCategory}) => {
    return (
        <nav className="w-full mx-auto flex justify-end">
            <ul className="dark:text-white text-black flex justify-evenly justify-self-end w-96 [&>*]:relative [&>*]:hover:cursor-pointer">
                <li onClick={() => setActiveCategory(0)}
                    className={activeCategory === 0 ? cl.active : ''}>
                    All tasks
                </li>
                <li onClick={() => setActiveCategory(1)}
                    className={activeCategory === 1 ? cl.active : ''}>
                    Open tasks
                </li>
                <li onClick={() => setActiveCategory(2)}
                    className={activeCategory === 2 ? cl.active : ''}>
                    Closed tasks
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;