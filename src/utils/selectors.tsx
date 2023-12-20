import {AppRootStateType} from "../store/store";
import {InitialStateBasketType} from "../redusers/basketReduser";



export const getBasket = (state: AppRootStateType): InitialStateBasketType => state.basket
export const getPizza = (state: AppRootStateType) => state.products.itemPizza
export const getCoffee = (state: AppRootStateType) => state.products.itemCoffee
export const getCocktail = (state: AppRootStateType) => state.products.itemCocktail

