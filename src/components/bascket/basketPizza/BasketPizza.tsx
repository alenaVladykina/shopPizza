import React from 'react';
import s from './bascetPizza.module.scss'
import {BasketProductType} from "../../../commons/types";

type BasketPizzaPropsType = {
  deleteProduct: () => void
  addProduct: () => void
  onClickLowerCount: () => void
  sumProduct: number
  setSumBasket?: () => void
  data: BasketProductType
}

export const BasketPizza: React.FC<BasketPizzaPropsType> = React.memo(({
                                                                         data,
                                                                         deleteProduct,
                                                                         addProduct,
                                                                         onClickLowerCount,
                                                                         sumProduct,
                                                                       }) => {


  return (
    <div className={s.basketPizza}>
      <button type={'button'}
              onClick={deleteProduct}
              className={s.close}/>
      <div className={s.header}>
        <picture>
          <source srcSet={data.urlWebp}/>
          <img className={s.imgPizza} src={data.urlPng} alt={'картинка пиццы' + data.title}/>
        </picture>
        <div className={s.description}>
          <p className={s.title}>{data.title}</p>
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
            disabled={data.count <= 0}
          >
            &minus;
          </button>
          <span
            className={s.sum}>{data.count >= 0 ? data.count : 0}
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
