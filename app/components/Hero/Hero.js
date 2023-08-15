import React from 'react'

import styles from './Hero.module.css';

function Hero() {
    return (
        <div className={styles.container}>
            <h2 className={styles.head}>Study In<br /><span>UK Universities</span></h2>
            <p style={{ color: 'white', fontSize: "20px" }}><b>British Counsil Certified Agent And Counsellor</b></p>
            <button className={styles.button}><i className="fa-brands fa-wpexplorer"></i> Explore More</button>
        </div>
    )
}

export default Hero