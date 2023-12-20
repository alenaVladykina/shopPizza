import {createHashRouter} from 'react-router-dom';
import {App} from "../app/App";
import {Basket} from "../pages/bascket/Basket";
import React from "react";
import {Content} from "../pages/content/Content";
import {ToolBar} from "../pages/toolbar/Toolbar";


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



