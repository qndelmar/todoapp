import {ChangeEvent, FC, FormEvent, useMemo, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/store/hooks/redux";
import editReducer, {editSlice} from "@/store/reducers/editReducer";
import {ITodo} from "@/interfaces/ITodo";
import ToDoPosition from "@/components/ToDoComponents/ToDoPosition";

const AddTask:FC = () => {
    const [taskText, setTaskText] = useState('');
    const todos = useAppSelector(state => state.todos.todos);
    const {addTask} = editSlice.actions;
    const dispatch = useAppDispatch();
    const setText = (e:ChangeEvent<HTMLInputElement>):void => {
        if(e.target.value.length <= 48){
            setTaskText(e.target.value);
            return;
        }
    }

    const plusTask = () => {
        const task:ITodo = {
            name: taskText,
            importance: 0,
            color: 'blue',
            isClosed: false,
            id: Date.now()
        }
        dispatch(addTask(task))
    }

    return (
        <div className="my-5 text-right">
            <input type="text" placeholder="Write your task here..." className="w-72 h-10 rounded-[10px] pl-2 focus:outline-none"
            value={taskText} onChange={setText}/>
            <button className="ml-4 rounded-[8px] w-20 text-center bg-orange-300 h-10" onClick={plusTask}>Add task</button>
        </div>
    );
};

export default AddTask;