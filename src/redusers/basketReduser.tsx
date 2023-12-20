import {BasketProductType} from "../app/types";
import {Dispatch} from "react";
import {productsApi} from "./productsApi";
import {ThunkAction} from "redux-thunk";
import {AppActionsType, AppRootStateType, AppThunk} from "../app/store";

export type InitialStateBasketType = {
  count: number
  sumBasket: number
  items: BasketProductType[]
}

const InitialState: InitialStateBasketType = {
  count: 0,
  sumBasket: 0,
  items: []
}

export type BasketActionType =
  FetchBasketACType
  | AddBasketProductACType
  | DeleteBasketProductACType
  | LowerCountProductACType


export const basketReduser = (state: InitialStateBasketType = InitialState, action: BasketActionType): InitialStateBasketType => {
  switch (action.type) {
    case "BASKET/GET" :
      console.log(action.products)
      return action.products

    case "BASKET/POST" : {
      let newState = {...state}
      const newItems = newState.items.map(p => p.id === action.product.id ? {...p, count: action.product.count} : p)
      newState = {...newState, items: newItems}
      return newState
    }
    case "BASKET/DELETE": {
      const newState = {...state}
      const index = newState.items.findIndex((p) => p.id === action.id)
      if (index !== -1) newState.items.splice(index, 1)
      return newState
    }
    case "BASKET/PATCH": {
      let newState = {...state}
      const items = newState.items.map(p => p.id === action.product.id ? {...p, count: action.product.count} : p)
      return {...newState, items}
    }

    default: {
      return {...state}
    }
  }
}


type FetchBasketACType = ReturnType<typeof fetchBasketAC>
export const fetchBasketAC = (products: InitialStateBasketType) => ({type: "BASKET/GET", products} as const)

type AddBasketProductACType = ReturnType<typeof addBasketProductAC>
export const addBasketProductAC = (product: BasketProductType) => ({type: "BASKET/POST", product} as const)

type DeleteBasketProductACType = ReturnType<typeof deleteBasketProductAC>
export const deleteBasketProductAC = (id: string) => ({type: "BASKET/DELETE", id} as const)

type LowerCountProductACType = ReturnType<typeof lowerCountProductAC>
export const lowerCountProductAC = (product: BasketProductType) => ({
  type: "BASKET/PATCH", product
} as const)

export const fetchBasket = () => (dispatch: Dispatch<FetchBasketACType>) => {
  productsApi.getBasket()
    .then((res) => {
      const products: InitialStateBasketType = res.data
      dispatch(fetchBasketAC(products))
    })
}

export const addBasketProductTC = (product: BasketProductType): ThunkAction<void, AppRootStateType, unknown, AppActionsType> => (dispatch) => {
  productsApi.addProductBasket(product)
    .then((res) => {
      const product = res.data
      dispatch(addBasketProductAC(product))
      dispatch(fetchBasket())
    })
}


export const deleteBasketProductTC = (id: string): AppThunk => (dispatch) => {
  productsApi.deleteProduct(id)
    .then((res) => {
      const product = res.data
      dispatch(deleteBasketProductAC(id))
      dispatch(fetchBasket())
    })
}


export const lowerCountProductTC = (id: string): AppThunk => (dispatch) => {
  productsApi.lowerCountProduct(id)
    .then((res) => {
      const product = res.data
      dispatch(lowerCountProductAC(product))
      dispatch(fetchBasket())
    })
}






