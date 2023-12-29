import React from 'react';
import s from './product.module.scss'
import {AddButton} from "../button/AddButtom/AddButton";
import star from './../../assets/icons/star.svg'
import {ProductType} from "../../commons/types";

type PizzaPropsType = {
  addProduct: () => void
  data: ProductType
  count: number | null
}

export const Product: React.FC<PizzaPropsType> = React.memo(({
                                                               addProduct,
                                                               data,
                                                               count
                                                             }) => {


  return (
    <article className={s.pizza}>
      <div className={s.imagesContainer}>
        <div className={s.starContainer}>
          <img src={star}
               className={s.star}
               alt={'rating image'}/>
          <span className={s.starTitle}>{data.popular}</span>
        </div>

        <picture>
          <source srcSet={data.urlWebp}/>
          <img className={s.img} src={data.urlPng} alt={'картинка товара'}/>
        </picture>
      </div>

      <main className={s.main}>
        <p className={s.title}>
          {data.title}
        </p>
        <p className={s.subtitle}>
          {data.description}
        </p>
      </main>
      <footer className={s.footer}>
        <span className={s.price}>от {data.price}</span>
        <AddButton title={'+ Добавить'}
                   buttonType={'contentButton'}
                   addProduct={addProduct}
                   count={count}
        />
      </footer>
    </article>
  );
})
