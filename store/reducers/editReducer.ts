import {Action, AnyAction, Reducer} from "redux";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITodo, ITodos} from "@/interfaces/ITodo";
import {stat} from "fs";

const getTodos = () => {
    let todosArray:ITodo[] = []
    if(typeof window !== "undefined"){
        let todos = localStorage.getItem('todos')
        if(!todos){
            return todosArray;
        }
        let parsedTodos = JSON.parse(todos);
        if(parsedTodos instanceof Array){
            for(let i in parsedTodos){
                todosArray.push(parsedTodos[i]);
            }
        }
    }
    return todosArray;
}

const initialState:ITodos = {
    todos: getTodos(),
    sortedTodos: []
}
export const editSlice = createSlice({
    name: 'edit',
    initialState,
    reducers: {
        addTask(state, action:PayloadAction<ITodo>){
            state.todos.push(action.payload);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        completeTask(state, action:PayloadAction<number>){
            state.todos = state.todos.filter((el) => {
                if(el.id === action.payload){
                    el.isClosed = true;
                }
                return el;
            })
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        dropTask(state, action:PayloadAction<number>){
            state.todos = state.todos.filter((el) => {
                if(el.id !== action.payload){
                    return el;
                }
            })
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        changeImportance(state, action:PayloadAction<any>){
          let index = state.todos.findIndex(el => el.id === action.payload.id)
            if(index !== -1){
                state.todos[index].importance = action.payload.importance;
            }
        localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        clearTasks(state, action:PayloadAction<null>){
            state.todos = state.todos.filter((el) => {
                if(el.isClosed !== true){
                    return el;
                }
            });
        }
    }
})
export default editSlice.reducer;
export const {addTask} = editSlice.actions;