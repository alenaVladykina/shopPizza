import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import {ProductsActionsType, productsReduser} from "../redusers/productsReduser";
import {ThunkDispatch, thunk, ThunkAction} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {BasketActionType, basketReduser} from "../redusers/basketReduser";


const rootReducer = combineReducers({
  products: productsReduser,
  basket: basketReduser,
})


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export type  AppActionsType = BasketActionType | ProductsActionsType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>
// @ts-ignore
window.store = store;
