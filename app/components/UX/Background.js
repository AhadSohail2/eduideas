import React from 'react'

import styles from './Background.module.css';
import Link from 'next/link';

function Background(props) {
    return (
        <>
            <div className={styles.line}></div>
            <div className={styles.icons}>
                <a href="mailto:educationidealondon@gmail.com"><i className="fa-solid fa-envelope"></i></a>
                <a target='_blank' href="https://www.facebook.com/profile.php?id=100090009804511"><i className="fa-brands fa-facebook"></i></a>
                <a target='_blank' href="https://www.linkedin.com/company/education-idea/"><i className="fa-brands fa-linkedin"></i></a>
            </div>
            <div className={styles.containerVideo}>
                <video className={styles.video} autoPlay muted loop>
                    <source src='/1.mp4' type='video/mp4' />
                </video>
            </div>
            <div className={`${styles.children} container`}>
                {props.children}
            </div>
        </>
    )
}

export default Background