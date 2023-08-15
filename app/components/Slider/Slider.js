import React from 'react'

import styles from './Slider.module.css';
import Image from 'next/image';

function Slider() {
    return (
        <div className={`${styles.container}`}>
            <h2>Our Partners</h2>
            <div className={styles.images}>
                <Image src="/slider/1.jpg" width="160" height="160" alt='' />
                <Image src="/slider/2.png" width="160" height="80" alt='' />
                <Image src="/slider/3.png" width="160" height="120" alt='' />
                <Image src="/slider/4.png" width="160" height="80" alt='' />
                <Image src="/slider/5.png" width="180" height="80" alt='' />
                <Image src="/slider/1.jpg" width="160" height="160" alt='' />
                <Image src="/slider/2.png" width="160" height="80" alt='' />
                <Image src="/slider/3.png" width="160" height="120" alt='' />
                <Image src="/slider/4.png" width="160" height="80" alt='' />
                <Image src="/slider/5.png" width="180" height="80" alt='' />
            </div>
        </div>
    )
}

export default Slider