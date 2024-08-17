import React, { useState } from 'react'
import SearchFrom, { realEstate } from '../../components/SearchFrom/SearchFrom';
import axios, { AxiosResponse } from 'axios';
import RealEstateList from '../../components/RealEstateList/RealEstateList';

const SeatchRealEstate = () => {
  const [realEstate, setRealEstate] = useState<string[]>([])

  return (
    <div>
      <SearchFrom setReralEstate={setRealEstate} />
      <RealEstateList realEstate= {realEstate} />
      
    </div>
  )
}

export default SeatchRealEstate
