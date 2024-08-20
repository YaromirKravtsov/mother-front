import React, { FC, useEffect, useState } from 'react'
import styles from './RealEstateList.module.css'
import { TView } from '../../pages/SeatchRealEstate/SeatchRealEstate'
import { useAuthStore } from '../../app/store/auth'
interface Props {
  realEstate: string[],
  activeView: TView
}
const RealEstateList: FC<Props> = ({ realEstate ,activeView}) => {

  return (
    <div className={styles.list}>
      {realEstate?.map((es, index) => (
        <div key={index} className={`${activeView == 'square'? styles.square: ''} ${styles.item} `}>
        {/*   {es.split('\n').map((line, i) => (
            <React.Fragment key={i}>


              {line}
              {i < es.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))} */}
          {es}
        </div>
      ))}
    </div>
  )
}

export default RealEstateList
