import React from 'react';
import {ButtonFilter} from "../../components/button/ButtonFilter/ButtonFilter";
import s from './toolbar.module.scss'
import {Select} from "../../components/select/Select";
import {fetchProductsTC, sortProductsPopularTC, sortProductsPriceTC} from "../../redusers/productsReduser";
import {useAppDispatch} from "../../store/store";
import {ProductSortType} from "../../types/types";

export type SelectListType = {
  title: string,
  value: string | null
}

export const ToolBar = () => {
  const dispatch = useAppDispatch()

  const buttonsTitle = [
    {id: 1, title: 'Все', status: false, href: '#'},
    {id: 2, title: 'Пицца', status: false, href: '#'},
    {id: 3, title: 'Кофе', status: false, href: '#coffee'},
    {id: 4, title: 'Коктейли', status: false, href: '#cocktail'},
  ]

  const selectList: SelectListType[] = [
    {title: 'Популярности', value: 'popular'},
    {title: 'Цене', value: 'price'},
    {title: 'Нет', value: ''}
  ]


  const buttons = buttonsTitle.map(button => {

    return (
      <li key={button.id} className={s.listItem}>
        <ButtonFilter
          href={button.href}
          title={button.title}
          active={button.status}/>
      </li>
    )
  })


  const onChangeOption = (value: ProductSortType) => {
    switch (value) {
      case 'popular':
        dispatch(sortProductsPopularTC())
        break
      case 'price':
        dispatch(sortProductsPriceTC())
        break
      default:
        dispatch(fetchProductsTC())
    }
  }


  return (
    <nav className={s.nav}>
      <div>
        <Select onChangeOption={onChangeOption}
                selectList={selectList}/>
      </div>
    </nav>
  );
};