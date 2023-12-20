import React from 'react';
import s from './addButton.module.scss'

export type AddButtonPropsType = {
  onClick?: () => void
  addProduct: () => void
  title?: string
  count?: number | null
  buttonType: 'contentButton' | 'basketButton'
}


export const AddButton: React.FC<AddButtonPropsType> = ({addProduct, buttonType, title, count}) => {

  const defaultStyle = (buttonType === 'contentButton' ?
    (count ? s.count : '')
    : '')


  return (
    <button onClick={addProduct}
            className={s.button}>
      <div className={s.titleContainer}>
        <span className={s.title}>{title}</span>
        <span className={defaultStyle}>{count}</span>
      </div>
    </button>
  );
};
