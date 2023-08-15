import React from 'react'

import styles from './Contact.module.css';

function Contact() {
    return (
        <div className={styles.container}>
            <h2>Contact Us</h2>
            <div className={styles.info}>
                <div>
                    <i className="fa-solid fa-phone"></i>
                    <p>+447878738469</p>
                </div>
                <div>
                    <i className="fa-solid fa-location-dot"></i>
                    <p>London , Ilford</p>
                </div>
                <div>
                    <i className="fa-solid fa-envelope"></i>
                    <p>educationidealondon@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Contact