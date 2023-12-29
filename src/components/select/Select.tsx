import React, {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes} from 'react';
import s from './select.module.scss'
import {SelectListType} from "../../commons/types";


type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement>


type SelectPropsType = DefaultSelectPropsType & {
  selectList: SelectListType[]
  onChangeOption: (option: any) => void
}


export const Select: React.FC<SelectPropsType> = ({
                                                    selectList,
                                                    onChangeOption,
                                                    ...restProps
                                                  }) => {


  const onClickSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    onChangeOption(e.target.value)
  }

  return (
    <div className={s.selectContainer}>
      <label htmlFor="select"
             className={s.labelSelect}>
        Сортирвать по:
      </label>
      <select id={'select'}
              {...restProps}
              className={s.select}
              defaultValue="Нет"
              onChange={onClickSelect}
      >
        {selectList.map((select) => {
          return (
            <option key={select.value}
                    value={select.value ? select.value : 'Нет'}
                    className={s.option}
            >
              {select.title}
            </option>
          )
        })}
      </select>
    </div>

  );
};
