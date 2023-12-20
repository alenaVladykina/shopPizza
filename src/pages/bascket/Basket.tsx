import React, {useEffect} from 'react';
import s from './basket.module.scss'
import {useAppDispatch, useAppSelector} from "../../store/store";
import {
  addBasketProductTC,
  deleteBasketProductTC,
  fetchBasket,
  lowerCountProductTC
} from "../../redusers/basketReduser";
import {getBasket} from "../../utils/selectors";
import {BasketPizza} from "./basketPizza/BasketPizza";
import {BasketProductType} from "../../types/types";
import {AddButton} from "../../components/button/AddButtom/AddButton";
import {useNavigate} from "react-router-dom";
import {ArrowButton} from "../../components/button/ArrowButton/ArrowButton";


export const Basket = () => {
  const dispatch = useAppDispatch()
  const basket = useAppSelector(getBasket)
  const navigate = useNavigate()


  useEffect(() => {
    dispatch(fetchBasket())
  }, [])

  const basketLength = basket.items.length


  const deleteProduct = (productId: string) => {
    dispatch(deleteBasketProductTC(productId))
  }

  const addProduct = (product: BasketProductType) => {
    dispatch(addBasketProductTC(product))
  }

  const lowerCount = (productId: string) => {
    dispatch(lowerCountProductTC(productId))
  }
  const navigateToContent = () => {
    navigate('/')
  }

  if (basketLength) {
    return (
      <section className={s.basket}>
        <ArrowButton onClickHandler={navigateToContent}/>
        <header className={s.header}>
          <h2>Корзина</h2>
        </header>
        <main className={s.main}>
          {basket.items.map((product: BasketProductType) => {

            const onClickButtonDelete = () => {
              deleteProduct(product.id)
            }
            const onClickButtonAdd = () => {
              addProduct(product)
              console.log(product)
            }
            const onClickLowerCount = () => {
              lowerCount(product.id)
            }


            return (
              <BasketPizza key={product.id}
                           count={product.count}
                           id={product.id}
                           price={product.price}
                           urlPng={product.urlPng}
                           urlWebp={product.urlWebp}
                           title={product.title}
                           addProduct={onClickButtonAdd}
                           deleteProduct={onClickButtonDelete}
                           onClickLowerCount={onClickLowerCount}
                           sumProduct={product.count * product.price}
              />
            )
          })}
        </main>
        <footer className={s.footer}>
          <p className={s.footerCount}>Количество товаров:
            <span className={s.count}> {basket.count}</span>
          </p>
          <div className={s.footerPrice}>
            <p>Сумма заказа:
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
          <p>Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на главную
            страницу.</p>
        </div>
      </section>
    )
  }
};
