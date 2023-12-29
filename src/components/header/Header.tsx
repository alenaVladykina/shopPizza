import React, {useEffect} from 'react';
import s from './header.module.scss'
import logoIcon from '../../assets/icons/logo.svg'
import {ButtonBasket} from "../button/ButtonBascket/ButtonBasket";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {getBasket} from "../../commons/selectors";
import {fetchBasket} from "../../redusers/basketReduser";


export const Header = () => {
  const basket = useAppSelector(getBasket)

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const onClickBasket = () => {
    navigate('basket')
  }

  useEffect(() => {
    dispatch(fetchBasket())
  }, [])


  return (
    <header className={s.header}>
      <div className={s.logoContainer}>
        <img src={logoIcon} alt='logotype' className={s.logoImage}/>
        <div className={s.logoTitle}>
          <h1 className={s.title}>Вкусная пицца</h1>
          <span className={s.subTitle}>Самая вкусная пицца только у нас</span>
        </div>
      </div>

      <ButtonBasket onClick={onClickBasket}
                    price={basket.sumBasket}
                    count={basket.count}/>
    </header>
  );
};

