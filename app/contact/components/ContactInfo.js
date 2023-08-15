import React from 'react';

import styles from './ContactInfo.module.css';

function ContactInfo() {
    return (
        <div className={styles.container}>
            <div>
                <h2 className={styles.head} >Contact Information</h2>
                <p className={styles.subHead} >Say something to start a live chat!</p>
            </div>
            <div className={styles.info} >
                <div className={styles.infoEle} >
                    <i className="fa-solid fa-phone"></i>
                    <p>+447878738469</p>
                </div>
                <div className={styles.infoEle} >
                    <i className="fa-solid fa-envelope"></i>
                    <p>educationidealondon@gmail.com</p>
                </div>
                <div className={styles.infoEle} >
                    <i className="fa-solid fa-location-dot"></i>
                    <p>London , Ilford</p>
                </div>
            </div>
            <div className={styles.social}>
                <a href="mailto:educationidealondon@gmail.com"><i className="fa-solid fa-envelope"></i></a>
                <a target='_blank' href="https://www.facebook.com/profile.php?id=100090009804511"><i className="fa-brands fa-facebook"></i></a>
                <a target='_blank' href="https://www.linkedin.com/company/education-idea/"><i className="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
    )
}

export default ContactInfo