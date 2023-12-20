import React from 'react';
import s from './ButtonFilter.module.scss'
import {Link} from "react-scroll";
import {HashLink, NavHashLink} from "react-router-hash-link";

type ButtonFilterType = {
  onClick?: () => void
  title: string
  active: boolean
  href: string

}

export const ButtonFilter: React.FC<ButtonFilterType> = ({
                                                           onClick,
                                                           title,
                                                           active,
                                                           href
                                                         }) => {

  const buttonStyle = active ? s.button + " " + s.active : s.button

  return (
    <li>
      <a href={href} className={buttonStyle}>
        <button className={buttonStyle}
                onClick={onClick}>
          {title}
        </button>
      </a>
    </li>
  )
    ;
};
