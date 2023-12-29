import React, {useEffect, useRef} from 'react';
import s from "./productList.module.scss";
import {Product} from "../../product/Product";
import {ProductType} from "../../../commons/types";
import {InitialStateBasketType} from "../../../redusers/basketReduser";


type ProductList = {
  item: ProductType[]
  addBasketProduct: (product: ProductType) => void
  basket: InitialStateBasketType
  title: string
  id: string
}

export const ProductList: React.FC<ProductList> = React.memo(({
                                                                id,
                                                                item,
                                                                addBasketProduct,
                                                                basket,
                                                                title,
                                                              }) => {

  const ref = useRef<any>(null)


  return (
    <section>
      <h2 className={s.h2} id={id} ref={ref}>{title}</h2>
      <div className={s.content}>
        {item.map(product => {

          const onClickHandler = () => {
            addBasketProduct(product)
          }

          const element = basket.items.find(p => p.id === product.id)
          const count = element ? element.count : null

          return (
            <Product key={product.id}
                     addProduct={onClickHandler}
                     count={count}
                     data={product}
            />
          )
        })}
      </div>
    </section>
  );
});

