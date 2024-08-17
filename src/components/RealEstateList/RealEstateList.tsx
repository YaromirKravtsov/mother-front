import React, { FC, useEffect } from 'react'
import styles from './RealEstateList.module.css'
interface Props {
  realEstate: string[]
}
const RealEstateList: FC<Props> = ({ realEstate }) => {


  return (
    <div className={styles.list}>
      {realEstate?.map((es, index) => (
        <div key={index} className={styles.item}>
          {es.split('\n').map((line, i) => (
            <React.Fragment key={i}>


              {line}
              {i < es.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  )
}

export default RealEstateList
