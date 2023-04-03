import {ChangeEvent, FC, FormEvent, useMemo, useRef, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/store/hooks/redux";
import editReducer, {editSlice} from "@/store/reducers/editReducer";
import {ITodo} from "@/interfaces/ITodo";
import ToDoPosition from "@/components/ToDoComponents/ToDoPosition";

const AddTask:FC = () => {
    const [taskText, setTaskText] = useState('');
    const todos = useAppSelector(state => state.todos.todos);
    const {addTask} = editSlice.actions;
    const dispatch = useAppDispatch();
    const [disabledState, setDisabledState] = useState(true);
    const setText = (e:ChangeEvent<HTMLInputElement>):void => {
        if(e.target.value.length === 0){
            setDisabledState(true);
        }
        else if(e.target.value.length > 0 && disabledState === true){
            setDisabledState(false);
        }
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
        task.name !== '' && dispatch(addTask(task))
        setTaskText('');
    }

    return (
        <div className="my-5 text-right">
            <input type="text" placeholder="Write your task here..." className="lg:w-72 h-10 rounded-[10px] pl-2 focus:outline-none dark:border-0 border-2 border-black"
            value={taskText} onChange={setText}/>
            <button disabled={disabledState} className="ml-4  rounded-[8px] w-20 text-center bg-orange-300 h-10 disabled:bg-orange-50 disabled:opacity-50 transition-all duration-300" onClick={plusTask}>Add task</button>
        </div>
    );
};

export default AddTask;