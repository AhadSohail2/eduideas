'use client'

import React, { useEffect } from 'react'
import Card from './Card'

import styles from './Cards.module.css';

function Cards() {

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scroll = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
            if (scroll > 0.10) {
                document.body.style.setProperty('--scroll', scroll - 0.10);
                document.body.style.setProperty('--display', "none");
            }
            else {
                document.body.style.setProperty('--scroll', 0);
            }
        }, false);
    }, [])

    return (
        <div className={styles.container}>
            <Card
                id="0"
                color="#1F218F"
                icon="fa-solid fa-user"
                heading="UK UNIVERSITIES"
                para="Looking forTop Universities In United Kingdome , Get your Maters in heart of UK London" />
            <Card
                id="1"
                color="#52795A"
                icon="fa-solid fa-star"
                heading="EDUCATIONAL ASSESSMENT"
                para="Get Your Education Credentials assessment from one of our top British Council Registered Consultants"
            />
            <Card
                id="2"
                color="#E94F26"
                icon="fa-solid fa-user"
                heading="VISA HELP"
                para="Congratulations on your success getting a study offer in one of the reputed Universities in UK , We Are Here to Help you apply for your Study Visa" />
            <Card
                id="3"
                color="#4CB6CE"
                icon="fa-solid fa-star"
                heading="UK JOB MARKET"
                para="Don't Worry We will give a Consultation on How you will search for your job while studying in the UK" />
        </div>
    )
}

export default Cards