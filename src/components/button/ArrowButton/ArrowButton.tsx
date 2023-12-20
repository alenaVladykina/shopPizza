import React from 'react';
import s from './arrow.module.scss'

type ArrowButton = {
  onClickHandler: () => void
}

export const ArrowButton: React.FC<ArrowButton> = ({onClickHandler}) => {

  return (
    <button onClick={onClickHandler}
            className={s.backButton}>
      <span className={s.backButtonIcon}>&larr;</span>
      <span className={s.backButtonTitle}> Вернуться назад</span>
    </button>
  );
};

