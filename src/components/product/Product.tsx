import React from 'react';
import s from './product.module.scss'
import {AddButton} from "../button/AddButtom/AddButton";

type PizzaPropsType = {
  id: string
  title: string
  description: string
  price: number
  urlPng: string
  urlWebp: string
  addProduct: () => void
  count: number | null
}

export const Product: React.FC<PizzaPropsType> = ({
                                                    title,
                                                    description,
                                                    price,
                                                    urlWebp,
                                                    urlPng,
                                                    addProduct,
                                                    count
                                                  }) => {


  return (
    <article className={s.pizza}>
      <picture>
        <source srcSet={urlWebp} />
          <img className={s.img} src={urlPng} alt={'картинка товара'}/>
      </picture>
      <main className={s.main}>
        <p className={s.title}>
          {title}
        </p>
        <p className={s.subtitle}>
          {description}
        </p>
      </main>
      <footer className={s.footer}>
        <span className={s.price}>от {price}</span>
        <AddButton title={'+ Добавить'}
                   buttonType={'contentButton'}
                   addProduct={addProduct}
                   count={count}
        />
      </footer>
    </article>
);
};
