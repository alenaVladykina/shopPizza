import React, {useRef} from 'react';
import s from './App.module.scss'
import {Header} from "../components/header/Header";
import {Outlet} from "react-router-dom";


export function App() {

  return (
    <div className={s.app}>
      <Header/>
      <Outlet/>
    </div>
  );
}


