import React from 'react'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'

import styles from './Contact.module.css';

function Contact() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <ContactInfo />
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact