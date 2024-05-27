import React, { useState, useEffect } from 'react';
import styles from './Slider.module.css'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Slider = ({ slides, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            goToNextSlide();
        }, interval);

        return () => clearInterval(timer);
    }, [currentIndex]);

    const goToPreviousSlide = () => {
        const newIndex = (currentIndex - 1 + slides.length) % slides.length;
        setCurrentIndex(newIndex);
    };

    const goToNextSlide = () => {
        const newIndex = (currentIndex + 1) % slides.length;
        setCurrentIndex(newIndex);
    };

    return (
        <div className={styles.slider}>
            <div
                className={styles.slides}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div className={styles.slide} key={index}>
                        {slide}
                    </div>
                ))}
            </div>
            <div className={styles.controls}>
                <button className={styles.button} onClick={goToPreviousSlide}>
                    <BsChevronRight />
                </button>
                <button className={styles.button} onClick={goToNextSlide}>
                    <BsChevronLeft />
                </button>
            </div>
        </div>
    );
};

export default Slider;
