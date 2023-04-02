import {createRef, FC} from "react";
import {ITodo} from "@/interfaces/ITodo";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faTrash} from "@fortawesome/free-solid-svg-icons";
import {useAppDispatch, useAppSelector} from "@/store/hooks/redux";
import {editSlice} from "@/store/reducers/editReducer";

const ToDoPosition:FC<ITodo> = ({name, color, isClosed, importance, id}) => {

    const todos = useAppSelector(state => state.todos.todos);
    const dispatch = useAppDispatch();
    const {completeTask, dropTask, changeImportance} = editSlice.actions;
    const ref = createRef<HTMLSelectElement>();

    const completeToDo = () => {
        dispatch(completeTask(id));
    }
    const deleteToDo = () => {
        dispatch(dropTask(id));
    }
    const changeToDoImportance = () => {
        dispatch(changeImportance({id, importance: ref.current?.value}))
    }

    return (
        <div className="w-[30rem] h-24 mt-4 relative bg-[#040433FF] text-white grid grid-cols-6 items-center">
            <div className="flex h-full"><p onClick={completeToDo} className="text-3xl ml-8 self-center ">{isClosed ? <FontAwesomeIcon className="text-green-600" icon={faCheck}/> : '•'}</p></div>
                <div className={`flex h-full transition-all duration-1000 items-center col-start-2 col-span-2 ${isClosed ? 'text-gray-500' : ''}`}>
                    <p className="overflow-hidden text-[0.9rem] break-words">{name}</p>
                </div>
                <div className="flex flex-col col-start-5 items-center">
                    <p className="text-white opacity-60  lowercase text-xs">Importance</p>
                    <select onChange={changeToDoImportance} ref={ref} className="text-white bg-transparent rounded focus:outline-none pr-2 [&>*]:text-black">
                        <option disabled selected>{importance}</option>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                    </select>
                </div>
            <div className="row-span-1 col-start-6 ml-5 opacity-60 text-3xl" onClick={deleteToDo}>
                <FontAwesomeIcon icon={faTrash}/>
            </div>
        </div>
    );
};

export default ToDoPosition;