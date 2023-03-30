import {Action, AnyAction, Reducer} from "redux";

interface IState{
    name: string,
    isClosed: boolean
    importance: number,

}

const initialState:IState[] = [];
export const editReducer = (state = initialState, action:AnyAction) => {

}