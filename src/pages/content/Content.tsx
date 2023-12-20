import React, {useEffect} from 'react';
import {fetchProductsTC} from "../../redusers/productsReduser";
import {useAppDispatch, useAppSelector} from "../../app/store";
import {getBasket, getCocktail, getCoffee, getPizza} from "../../utils/selectors";
import {addBasketProductTC} from "../../redusers/basketReduser";
import {ProductType} from "../../app/types";
import {ProductList} from "./productList/ProductList";
import s from './content.module.scss'

export const Content = () => {
  const dispatch = useAppDispatch()
  const pizza = useAppSelector(getPizza)
  const coffeeList = useAppSelector(getCoffee)
  const cocktail = useAppSelector(getCocktail)
  const basket = useAppSelector(getBasket)


  useEffect(() => {
    dispatch(fetchProductsTC())
  }, [])


  const addBasketProduct = (product: ProductType) => {
    const newProduct = {
      ...product,
      sumProduct: 0,
      count: 0
    }
    dispatch(addBasketProductTC(newProduct))
  }


  return (
    <div className={s.content}>
      <ProductList addBasketProduct={addBasketProduct}
                   basket={basket}
                   title={'Пицца'}
                   id={'pizza'}
                   item={pizza}/>
      <ProductList item={coffeeList}
                   id={'coffee'}
                   basket={basket}
                   title={'Кофе'}
                   addBasketProduct={addBasketProduct}/>
      <ProductList item={cocktail}
                   id={'cocktail'}
                   basket={basket}
                   title={'Коктейль'}
                   addBasketProduct={addBasketProduct}/>
    </div>
  );
};
