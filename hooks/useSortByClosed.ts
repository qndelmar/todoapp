import {ITodo} from "@/interfaces/ITodo";
import {useEffect, useMemo, useState} from "react";

export default function useSortByClosed(activeCategory:number, todos:ITodo[]):any{
    const [sortedArray, setSortedArray] = useState<ITodo[]>([]);
    const sortArray = () => {
        if(activeCategory === 0){
            setSortedArray(todos);
            return;
        }
        if(activeCategory === 1){
            setSortedArray(todos.filter((el) => {
                if(el.isClosed === false){
                    return el;
                }
            }))
        }
        if(activeCategory === 2){
            setSortedArray(todos.filter((el) => {
                if(el.isClosed === true){
                    return el;
                }
            }))
        }
    }


    useEffect(() => {
            sortArray();
    }, [todos])

    useMemo(() => {
        sortArray();
    }, [activeCategory])



    return [sortedArray, setSortedArray]
}