import {Action, AnyAction, Reducer} from "redux";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITodo, ITodos} from "@/interfaces/ITodo";


const initialState:ITodos = {
    todos: []
}
export const editSlice = createSlice({
    name: 'edit',
    initialState,
    reducers: {
        addTask(state, action:PayloadAction<ITodo>){
            state.todos.push(action.payload);
        }
    }
})
export default editSlice.reducer;
export const {addTask} = editSlice.actions;