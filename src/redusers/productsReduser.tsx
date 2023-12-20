import {Dispatch} from "react";
import {productsApi} from "./productsApi";
import {ProductsType} from "../app/types";


const initialProductsState: ProductsType = {
  itemPizza: [],
  itemCoffee: [],
  itemCocktail: []
}


export const productsReduser = (state: ProductsType = initialProductsState, action: ProductsActionsType): ProductsType => {
  switch (action.type) {
    case 'PRODUCTS/GET' : {
      console.log(action.products.itemCocktail)
      // debugger
      return action.products
    }
    case 'PRODUCTS/SORT-POPULAR' : {
      let newState = {...state}
      const newPizza = newState.itemPizza.sort((p1, p2) =>
        p2.popular - p1.popular)
      return {...newState, itemPizza: newPizza}
    }
    case 'PRODUCTS/SORT-PRICE': {
      let newState = {...state}
      const newPizza = newState.itemPizza.sort((p1, p2) => p1.price > p2.price ? 1 : -1)
      return {...newState, itemPizza: newPizza}
    }
    default:
      return {...state}
  }
}


const fetchProductsAC = (products: ProductsType) => ({type: 'PRODUCTS/GET', products} as const)

const sortProductsPriceAC = () => ({type: 'PRODUCTS/SORT-PRICE'} as const)

const sortProductsPopularAC = () => ({type: 'PRODUCTS/SORT-POPULAR'} as const)

export const fetchProductsTC = () => (dispatch: Dispatch<FetchProductsACType>) => {
  productsApi.getProducts()
    .then((res) => {
      const products: ProductsType = res.data
      dispatch(fetchProductsAC(products))
    })
}


export const sortProductsPriceTC = () => (dispatch: Dispatch<SortProductsPriceType>) => {
  dispatch(sortProductsPriceAC())
}


export const sortProductsPopularTC = () => (dispatch: Dispatch<SortProductsPopularType>) => {
  dispatch(sortProductsPopularAC())
}


//types
export type ProductsActionsType = | FetchProductsACType | SortProductsPopularType | SortProductsPriceType
type FetchProductsACType = ReturnType<typeof fetchProductsAC>
type SortProductsPriceType = ReturnType<typeof sortProductsPriceAC>
type SortProductsPopularType = ReturnType<typeof sortProductsPopularAC>

