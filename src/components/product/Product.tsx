import React from 'react';
import s from './product.module.scss'
import {AddButton} from "../button/AddButtom/AddButton";
import star from './../../assets/icons/star.svg'

type PizzaPropsType = {
  id: string
  title: string
  description: string
  price: number
  urlPng: string
  urlWebp: string
  addProduct: () => void
  count: number | null
  popular: number
}

export const Product: React.FC<PizzaPropsType> = ({
                                                    title,
                                                    description,
                                                    price,
                                                    urlWebp,
                                                    urlPng,
                                                    addProduct,
                                                    popular,
                                                    count
                                                  }) => {


  return (
    <article className={s.pizza}>
      <div className={s.imagesContainer}>
        <div className={s.starContainer}>
          <img src={star}
               className={s.star}
               alt={'rating image'}/>
          <span className={s.starTitle}>{popular}</span>
        </div>

        <picture>
          <source srcSet={urlWebp}/>
          <img className={s.img} src={urlPng} alt={'картинка товара'}/>
        </picture>
      </div>

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
