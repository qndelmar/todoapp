import {ITheme} from "@/interfaces/ITheme";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AnyAction} from "redux";

const getTheme = () => {
    if(typeof window !== "undefined"){
        const theme:any = localStorage.getItem('theme');
        if ([ 'light', 'dark' ].includes(theme)) return theme

        const userMedia = window.matchMedia('(prefers-color-scheme: light)')
        if (userMedia.matches) return 'light'
        return 'dark'
    }
}

const initialState: ITheme = {
    value: getTheme()
}

export const swapSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        swapTheme(state, action:PayloadAction<string>){
            state.value = action.payload;
            localStorage.setItem('theme', state.value)
        }
    }
})

export default swapSlice.reducer;