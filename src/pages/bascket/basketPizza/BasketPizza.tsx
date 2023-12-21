import React from 'react';
import s from './bascetPizza.module.scss'

type BasketPizzaPropsType = {
  id: string
  title: string
  price: number
  urlPng: string
  urlWebp: string
  count: number
  deleteProduct: () => void
  addProduct: () => void
  onClickLowerCount: () => void
  sumProduct: number
  setSumBasket?: () => void
}

export const BasketPizza: React.FC<BasketPizzaPropsType> = React.memo(({
                                                                         id,
                                                                         title,
                                                                         price,
                                                                         urlPng,
                                                                         urlWebp,
                                                                         deleteProduct,
                                                                         count,
                                                                         addProduct,
                                                                         onClickLowerCount,
                                                                         sumProduct,
                                                                         setSumBasket
                                                                       }) => {


  return (
    <div className={s.basketPizza}>
      <button type={'button'}
              onClick={deleteProduct}
              className={s.close}/>
      <div className={s.header}>
        <picture>
          <source srcSet={urlWebp}/>
          <img className={s.imgPizza} src={urlPng} alt={'картинка пиццы' + title}/>
        </picture>
        <div className={s.description}>
          <p className={s.title}>{title}</p>
          <p className={s.subtitle}>Описание</p>
        </div>
      </div>
      <div className={s.priceContainer}>
        <p className={s.priceTitle}>Цена</p>
        <p className={s.price}>{sumProduct}</p>
      </div>
      <div className={s.footer}>
        <p className={s.footerTitle}>Количество</p>
        <div className={s.footerSubtitle}>
          <button
            onClick={onClickLowerCount}
            className={s.button}
            disabled={count <= 0}
          >
            &minus;
          </button>
          <span
            className={s.sum}>{count >= 0 ? count : 0}
            </span>
          <button
            onClick={addProduct}
            className={s.button}>
            +
          </button>
        </div>
      </div>
    </div>
  );
});
