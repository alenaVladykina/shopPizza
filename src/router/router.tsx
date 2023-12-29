import {createHashRouter} from 'react-router-dom';
import {App} from "../app/App";
import {Basket} from "../components/bascket/Basket";
import React from "react";
import {Content} from "../components/content/Content";
import {ToolBar} from "../components/toolbar/Toolbar";


const MainPage = () => {
  return (
    <>
      <ToolBar/>
      <Content/>
    </>
  )
}

const childrenRoute = [
  {
    path: "/",
    element: <MainPage/>,
  },
  {
    path: "/basket",
    element: <Basket/>,
  }

]


export const router = createHashRouter([
  {
    element: <App/>,
    children: childrenRoute
  }
])



