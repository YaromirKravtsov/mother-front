import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import MyInput from '../../UI/MyInput/MyInput'
import styles from './SearchFrom.module.css';
import MyButton from '../../UI/MyButton/MyButton';
import axios from 'axios';
import $api from '../../app/api/http';
import { TView } from '../../pages/SeatchRealEstate/SeatchRealEstate';

export interface realEstate {
    count: number,
    message: string[]
}
interface Pros {
    setReralEstate: Dispatch<SetStateAction<string[]>>,
    setActiveView: (value: TView) => void,
    activeView: TView
}

const SearchFrom: FC<Pros> = ({ setReralEstate, setActiveView,activeView }) => {
    const [bed, setBed] = useState<string>('');
    const [region, setRegion] = useState<string>('');
    const [minPrice, setMinPrice] = useState<string>('0');
    const [maxPrice, setMaxPrice] = useState<string>('10000');
    useEffect(()=>{
        console.log(activeView)
    },[activeView])
    const search = async () => {
        try {
            const { data } = await $api.get('telegram/search-in-groups-real-estate', {
                params: {
                    bed: bed,
                    region: region,
                    minPrice, maxPrice
                }
            });
            console.log(data.messages)
            setReralEstate(data.messages)
        } catch (e) {
            console.log(e)
        }


    }
    return (
        <div className={styles.formMain}>
            <div className={styles.view}>Вигляд:

                <svg
                    onClick={() => {    setActiveView('square')}}
                    className={`${styles.viewIcon} ${activeView =='square' ? styles.active : ''}`} width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.66634 1.33337H1.99967C1.63148 1.33337 1.33301 1.63185 1.33301 2.00004V4.66671C1.33301 5.0349 1.63148 5.33337 1.99967 5.33337H4.66634C5.03453 5.33337 5.33301 5.0349 5.33301 4.66671V2.00004C5.33301 1.63185 5.03453 1.33337 4.66634 1.33337Z" fill="#737373" />
                    <path d="M10.0003 1.33337H7.33366C6.96547 1.33337 6.66699 1.63185 6.66699 2.00004V4.66671C6.66699 5.0349 6.96547 5.33337 7.33366 5.33337H10.0003C10.3685 5.33337 10.667 5.0349 10.667 4.66671V2.00004C10.667 1.63185 10.3685 1.33337 10.0003 1.33337Z" fill="#737373" />
                    <path d="M4.66634 6.66663H1.99967C1.63148 6.66663 1.33301 6.9651 1.33301 7.33329V9.99996C1.33301 10.3681 1.63148 10.6666 1.99967 10.6666H4.66634C5.03453 10.6666 5.33301 10.3681 5.33301 9.99996V7.33329C5.33301 6.9651 5.03453 6.66663 4.66634 6.66663Z" fill="#737373" />
                    <path d="M10.0003 6.66663H7.33366C6.96547 6.66663 6.66699 6.9651 6.66699 7.33329V9.99996C6.66699 10.3681 6.96547 10.6666 7.33366 10.6666H10.0003C10.3685 10.6666 10.667 10.3681 10.667 9.99996V7.33329C10.667 6.9651 10.3685 6.66663 10.0003 6.66663Z" fill="#737373" />
                </svg>

                <svg
                    onClick={() => setActiveView('rectangle')}
                    className={`${styles.viewIcon} ${activeView =='rectangle'  ? styles.active : ''}`}  width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2418_982)">
                        <path d="M1.875 8.625H0.375C0.275544 8.625 0.180161 8.66451 0.109835 8.73483C0.0395088 8.80516 0 8.90054 0 9L0 10.5C0 10.5995 0.0395088 10.6948 0.109835 10.7652C0.180161 10.8355 0.275544 10.875 0.375 10.875H1.875C1.97446 10.875 2.06984 10.8355 2.14016 10.7652C2.21049 10.6948 2.25 10.5995 2.25 10.5V9C2.25 8.90054 2.21049 8.80516 2.14016 8.73483C2.06984 8.66451 1.97446 8.625 1.875 8.625ZM1.875 1.125H0.375C0.275544 1.125 0.180161 1.16451 0.109835 1.23483C0.0395088 1.30516 0 1.40054 0 1.5L0 3C0 3.09946 0.0395088 3.19484 0.109835 3.26516C0.180161 3.33549 0.275544 3.375 0.375 3.375H1.875C1.97446 3.375 2.06984 3.33549 2.14016 3.26516C2.21049 3.19484 2.25 3.09946 2.25 3V1.5C2.25 1.40054 2.21049 1.30516 2.14016 1.23483C2.06984 1.16451 1.97446 1.125 1.875 1.125ZM1.875 4.875H0.375C0.275544 4.875 0.180161 4.91451 0.109835 4.98484C0.0395088 5.05516 0 5.15054 0 5.25L0 6.75C0 6.84946 0.0395088 6.94484 0.109835 7.01517C0.180161 7.08549 0.275544 7.125 0.375 7.125H1.875C1.97446 7.125 2.06984 7.08549 2.14016 7.01517C2.21049 6.94484 2.25 6.84946 2.25 6.75V5.25C2.25 5.15054 2.21049 5.05516 2.14016 4.98484C2.06984 4.91451 1.97446 4.875 1.875 4.875ZM11.625 9H4.125C4.02554 9 3.93016 9.03951 3.85984 9.10983C3.78951 9.18016 3.75 9.27554 3.75 9.375V10.125C3.75 10.2245 3.78951 10.3198 3.85984 10.3902C3.93016 10.4605 4.02554 10.5 4.125 10.5H11.625C11.7245 10.5 11.8198 10.4605 11.8902 10.3902C11.9605 10.3198 12 10.2245 12 10.125V9.375C12 9.27554 11.9605 9.18016 11.8902 9.10983C11.8198 9.03951 11.7245 9 11.625 9ZM11.625 1.5H4.125C4.02554 1.5 3.93016 1.53951 3.85984 1.60984C3.78951 1.68016 3.75 1.77554 3.75 1.875V2.625C3.75 2.72446 3.78951 2.81984 3.85984 2.89016C3.93016 2.96049 4.02554 3 4.125 3H11.625C11.7245 3 11.8198 2.96049 11.8902 2.89016C11.9605 2.81984 12 2.72446 12 2.625V1.875C12 1.77554 11.9605 1.68016 11.8902 1.60984C11.8198 1.53951 11.7245 1.5 11.625 1.5ZM11.625 5.25H4.125C4.02554 5.25 3.93016 5.28951 3.85984 5.35984C3.78951 5.43016 3.75 5.52554 3.75 5.625V6.375C3.75 6.47446 3.78951 6.56984 3.85984 6.64017C3.93016 6.71049 4.02554 6.75 4.125 6.75H11.625C11.7245 6.75 11.8198 6.71049 11.8902 6.64017C11.9605 6.56984 12 6.47446 12 6.375V5.625C12 5.52554 11.9605 5.43016 11.8902 5.35984C11.8198 5.28951 11.7245 5.25 11.625 5.25Z" fill="#737373" fill-opacity="0.6" />
                    </g>
                    <defs>
                        <clipPath id="clip0_2418_982">
                            <rect width="12" height="12" fill="white" />
                        </clipPath>
                    </defs>
                </svg>


            </div>
            <MyInput value={bed} placeholder="Number of beds" setValue={setBed} className={styles.bedInput} />
            <MyInput value={region} placeholder="Region" setValue={setRegion} />
            <MyInput value={minPrice} placeholder="Min price" setValue={setMinPrice} className={styles.priceInput} />
            <MyInput value={maxPrice} placeholder="Max price" setValue={setMaxPrice} className={styles.priceInput} />
            <MyButton onClick={search} className={styles.button}>Search</MyButton>



        </div>
    )
}

export default SearchFrom
