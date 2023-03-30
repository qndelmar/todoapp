import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store/state";
import {useState} from "react";

export const useAppDispatch = () => {
    return useDispatch<AppDispatch>();
}
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;