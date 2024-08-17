import React, { useState } from 'react'
import SearchFrom, { realEstate } from '../../components/SearchFrom';
import axios, { AxiosResponse } from 'axios';

const SeatchRealEstate = () => {
    const [realEstate,setRealEstate] = useState<string[]>(['']) 
    
  return (
    <div>
        <SearchFrom setReralEstate = {setRealEstate}/>

        {realEstate.map(es=> 
            <>
            <br />
            <br />  
                {es}
            </>
            
            )}
    </div>
  )
}

export default SeatchRealEstate
