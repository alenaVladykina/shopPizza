import React, {useCallback, useEffect} from 'react';
import s from './basket.module.scss'
import {AppThunk, useAppDispatch, useAppSelector} from "../../store/store";
import {
  addBasketProductTC,
  deleteBasketProductTC,
  fetchBasket,
  lowerCountProductTC
} from "../../redusers/basketReduser";
import {getBasket} from "../../commons/selectors";
import {BasketPizza} from "./basketPizza/BasketPizza";
import {BasketProductType} from "../../commons/types";
import {AddButton} from "../button/AddButtom/AddButton";
import {useNavigate} from "react-router-dom";
import {ArrowButton} from "../button/ArrowButton/ArrowButton";
import {sumProduct} from "../../commons/utils";


export const Basket = () => {
  const dispatch = useAppDispatch()
  const basket = useAppSelector(getBasket)
  const navigate = useNavigate()


  useEffect(() => {
    dispatch(fetchBasket())
  }, [])


  const functionManager = useCallback((
    arg: string | BasketProductType,
    funcTC: (arg: any) => AppThunk) => {
    dispatch(funcTC(arg))
  }, [])


  const navigateToContent = () => {
    navigate('/')
  }


  if (basket.items.length) {
    return (
      <section className={s.basket}>
        <ArrowButton onClickHandler={navigateToContent}/>
        <header className={s.header}>
          <h2>Корзина</h2>
        </header>
        <main className={s.main}>
          {basket.items.map((product: BasketProductType) => {

            const onClickButtonDelete = () => {
              functionManager(product.id, deleteBasketProductTC)
            }

            const onClickButtonAdd = () => {
              functionManager(product, addBasketProductTC)
            }

            const onClickLowerCount = () => {
              functionManager(product.id, lowerCountProductTC)
            }

            return (
              <BasketPizza key={product.id}
                           data={product}
                           addProduct={onClickButtonAdd}
                           deleteProduct={onClickButtonDelete}
                           onClickLowerCount={onClickLowerCount}
                           sumProduct={sumProduct(product.count, product.price)}
              />
            )
          })}
        </main>
        <footer className={s.footer}>
          <p className={s.footerCount}>Количество товаров:
            <span className={s.count}> {basket.count}</span>
          </p>
          <div className={s.footerPrice}>
            <p className={s.priceTitle}>Сумма заказа:
              <span className={s.sumBasket}> {basket.sumBasket}</span>
            </p>

            <AddButton disabled={true}
                       title={'Оплатить'}
                       buttonType={'basketButton'}
                       addProduct={() => {
                       }}/>
          </div>
        </footer>
      </section>
    );
  } else {
    return (
      <section className={s.basketEmpty}>
        <ArrowButton onClickHandler={navigateToContent}/>
        <div className={s.title}>
          <h2>Корзина пуста ☹️</h2>
          <p className={s.emptySubtitle}>Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу,
            перейди на главную
            страницу.</p>
        </div>
      </section>
    )
  }
};

