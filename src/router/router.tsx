import {createBrowserRouter} from 'react-router-dom';
import {App} from "../app/App";
import {Basket} from "../pages/bascket/Basket";
import React from "react";
import {MainPage} from "./MainPage";


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


export const router = createBrowserRouter([
  {
    element: <App/>,
    children: childrenRoute
  }
])



