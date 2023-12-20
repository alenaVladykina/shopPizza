import React, {useEffect} from 'react';
import {ProductType} from "../../types/types";
import {addBasketProductTC, InitialStateBasketType} from "../../redusers/basketReduser";
import s from "../content/productList/productList.module.scss";
import {Product} from "../../components/product/Product";
import {fetchProductsTC} from "../../redusers/productsReduser";
import {useDispatch} from "react-redux";


type PizzaListType = {
  item: ProductType[]
  addBasketProduct: (product: ProductType) => void
  basket: InitialStateBasketType
}

export const PizzaList: React.FC<PizzaListType> = ({
                                                     item,
                                                     basket,

                                                   }) => {
  const dispatch = useDispatch()

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
    <section>
      {/*<h2 className={s.h2}>Пицца</h2>*/}
      {/*<div className={s.content}>*/}
      {/*  {item.map(product => {*/}

      {/*    const onClickHandler = () => {*/}
      {/*      addBasketProduct(product)*/}
      {/*    }*/}

      {/*    const element = basket.items.find(p => p.id === product.id)*/}
      {/*    const count = element ? element.count : null*/}

      {/*    return (*/}
      {/*      <Product key={product.id}*/}
      {/*               title={product.title}*/}
      {/*               description={product.description}*/}
      {/*               price={product.price}*/}
      {/*               id={product.id}*/}
      {/*               urlPng={product.urlPng}*/}
      {/*               urlWebp={product.urlWebp}*/}
      {/*               addProduct={onClickHandler}*/}
      {/*               count={count}*/}
      {/*      />*/}
      {/*    )*/}
      {/*  })}*/}
      {/*</div>*/}
    </section>
  );
};

