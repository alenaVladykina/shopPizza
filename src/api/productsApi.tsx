import axios from 'axios'
import {BasketProductType} from "../commons/types";

export const instance = axios.create({
  baseURL: 'https://backend-pizza-shop.vercel.app/'
})

axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
    console.log('Main interceptor success')
    config.withCredentials = true;
    return config;
  },
  function (error) {
    // Do something with request error
    console.log('Main interceptor error')
    return Promise.reject(error);
  }
)


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

