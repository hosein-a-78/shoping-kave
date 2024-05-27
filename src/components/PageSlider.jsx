import React from 'react';
import styles from './Slider.module.css'
import Slider from './Slider';

import baner1 from '../assets/Images/baner1.jpg';
import baner2 from '../assets/Images/baner2.jpg';
import baner3 from '../assets/Images/baner3.jpg';
import konkor from '../assets/Images/konkor.jpg';

const PageSlider = () => {
    const slides = [
        <img src={baner1} alt="" />,
        <img src={baner2} alt="" />,
        <img src={baner3} alt="" />
    ];

    return (
        <div className={styles.container}>
            <Slider slides={slides} />
            <img className={styles.BanerKonkor} src={konkor} alt="" />
        </div>
    );
};

export default PageSlider;
