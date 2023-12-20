import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './button.module.scss'
import basketIcon from '../../../assets/icons/basket.svg'


type ButtonDetailedType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonType = ButtonDetailedType & {
  price: number
  count: number
}

export const ButtonBasket: React.FC<ButtonType> = React.memo(({
                                                                type,
                                                                title,
                                                                onClick,
                                                                value,
                                                                price,
                                                                count,
                                                                ...restProps
                                                              }) => {


  return (
    <button
      className={s.button}
      type={'button'}
      onClick={onClick}
    >
      <div className={s.price}>{price}
        <span> ₽</span>
      </div>
      <div className={s.line}/>
      <div className={s.count}>{count}
        <img alt='icon basket' src={basketIcon}/>
      </div>
    </button>
  );
})