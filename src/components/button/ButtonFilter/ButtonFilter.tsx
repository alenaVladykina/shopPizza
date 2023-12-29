import React from 'react';
import s from './ButtonFilter.module.scss'

type ButtonFilterType = {
  onClick?: any;
  title: string
  active: boolean
}

export const ButtonFilter: React.FC<ButtonFilterType> = ({
                                                           onClick,
                                                           title,
                                                           active,
                                                         }) => {

  const buttonStyle = active ? s.button + " " + s.active : s.button


  return (
      <button className={buttonStyle}
              onClick={onClick}>
        {title}
      </button>
  )
};
