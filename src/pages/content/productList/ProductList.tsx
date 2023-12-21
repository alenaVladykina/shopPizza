import React from 'react';
import s from "./productList.module.scss";
import {Product} from "../../../components/product/Product";
import {ProductType} from "../../../types/types";
import {InitialStateBasketType} from "../../../redusers/basketReduser";


type ProductList = {
  item: ProductType[]
  addBasketProduct: (product: ProductType) => void
  basket: InitialStateBasketType
  title: string
  id: string
}

export const ProductList: React.FC<ProductList> = React.memo(({
                                                                item,
                                                                addBasketProduct,
                                                                basket,
                                                                title,
                                                                id,
                                                              }) => {

  return (
    <section>
      <h2 className={s.h2} id={id}>{title}</h2>
      <div className={s.content}>
        {item.map(product => {

          const onClickHandler = () => {
            addBasketProduct(product)
          }

          const element = basket.items.find(p => p.id === product.id)
          const count = element ? element.count : null

          return (
            <Product key={product.id}
                     title={product.title}
                     description={product.description}
                     price={product.price}
                     id={product.id}
                     urlPng={product.urlPng}
                     urlWebp={product.urlWebp}
                     addProduct={onClickHandler}
                     count={count}
                     popular={product.popular}
            />
          )
        })}
      </div>
    </section>
  );
});

