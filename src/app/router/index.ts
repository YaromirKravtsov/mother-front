import path from 'path';
import React from 'react';
import LoginPage from '../../pages/LoginPage/LoginPage';
import SeatchRealEstate from '../../pages/SeatchRealEstate/SeatchRealEstate';



export interface IRoute{
    path:string;
    element: React.ComponentType;

}
export enum RouteNames{

    LOGIN ="/login",
    realEstateSearch ="/real-estate-search",

}

/* export const adminRoutes:IRoute[] = [
   
] */
export const userRoutes:IRoute[] = [

  {path: RouteNames.realEstateSearch, element: SeatchRealEstate}
  
]


export const publicRoutes:IRoute[] =[
  {path: RouteNames.LOGIN, element: LoginPage}
]