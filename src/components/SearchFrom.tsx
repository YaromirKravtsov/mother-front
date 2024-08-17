import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import MyInput from '../UI/MyInput/MyInput'
import styles from './SearchFrom.module.css';
import MyButton from '../UI/MyButton/MyButton';
import axios from 'axios';
import $api from '../api';
export interface realEstate {
    count: number,
    message: string[]
}
interface Pros {
    setReralEstate: Dispatch<SetStateAction<string[]>>
}

const SearchFrom: FC<Pros> = ({setReralEstate }) => {
    const [bed, setBed] = useState<string>('');
    const [region, setRegion] = useState<string>('');
    const [minPrice,setMinPrice] = useState('');
    const [maxPrice,setMaxPrice] = useState('');
    const search = async () => {
        try {
            const { data } = await $api.get('search', {
                params: {
                    bed: bed,
                    region: region,
                    minPrice, maxPrice
                }
            });
            setReralEstate(data.messages)
        } catch (e) {
            console.log(e)
        }


    }
    return (
        <div>
            <MyInput value={bed} placeholder="Bed count" setValue={setBed} />
            <MyInput value={region} placeholder="Region" setValue={setRegion} />
            <MyInput value={minPrice} placeholder="Min price" setValue={setMinPrice} />
            <MyInput value={maxPrice} placeholder="Max price" setValue={setMaxPrice} />


            <MyButton onClick={search}>Search</MyButton>
        </div>
    )
}

export default SearchFrom
