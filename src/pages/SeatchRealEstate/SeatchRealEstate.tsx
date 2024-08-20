import React, { useEffect, useState } from 'react'
import SearchFrom, { realEstate } from '../../components/SearchFrom/SearchFrom';
import axios, { AxiosResponse } from 'axios';
import RealEstateList from '../../components/RealEstateList/RealEstateList';
import PageLayout from '../../components/PageLayout/PageLayout';
export type TView = 'square' | 'rectangle'
const SeatchRealEstate = () => {
  const [realEstate, setRealEstate] = useState<string[]>([])
  const [activeView,setActiveView] = useState<TView>('rectangle');
 /*  useEffect(()=>{
    console.log(activeView) 
  },[activeView]) */
  return (
    <PageLayout title='Поиск недвижимости по группам Telegram'>
      <SearchFrom setReralEstate={setRealEstate} setActiveView ={setActiveView} activeView = {activeView}/>
      <RealEstateList realEstate= {realEstate} activeView ={activeView}/>
      
    </PageLayout>
  )
}

export default SeatchRealEstate
