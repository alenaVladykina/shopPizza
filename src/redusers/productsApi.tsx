import axios from 'axios'
import {BasketProductType} from "../app/types";

export const instance = axios.create({
  baseURL: 'https://backend-pizza-shop.vercel.app/',
})


export const productsApi = {
  getProducts: () => {
    return instance.get('products')
  },
  getBasket() {
    return instance.get('basket')
  },
  addProductBasket(product: BasketProductType) {
    return instance.post('basket', {product})
  },
  deleteProduct(id: string) {
    return instance.delete('basket', {data: {id}})
  },
  lowerCountProduct(productId: string) {
    return instance.patch('basket', {data: {id: productId}})
  },
}

