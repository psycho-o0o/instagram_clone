import { AppDispatch, AppState } from "./store"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

export const useAppDispatch = () => useDispatch<AppDispatch>() // Export a hook that can be reused to resolve types
export const useAppSelector : TypedUseSelectorHook<AppState> = useSelector;