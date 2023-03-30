import {useAppDispatch, useAppSelector} from "@/store/hooks/redux";
import {useEffect} from "react";
import {swapSlice} from "@/store/reducers/switchThemeReducer";


export default function useTheme():any{
    const theme = useAppSelector(state => state.theme.value);
    const {swapTheme} = swapSlice.actions;
    const dispatch = useAppDispatch();
    const colorTheme = theme === 'dark' ? 'light' : 'dark';
    const setTheme = () => {

        dispatch(swapTheme(theme === 'dark' ? 'light' : 'dark'));
    }
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
    }, [theme, colorTheme])

    return [colorTheme, setTheme]
}