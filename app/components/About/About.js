import React from 'react'

import styles from './About.module.css';
import Link from 'next/link';

function About() {
    return (
        <div className={`container ${styles.container}`}>
            <h3>About Us</h3>
            <p>Education Idea Consultants is an opportunity for all to fulfill their dream to Study abroad. In this age of advancement, everyone is looking for better opportunities but not all can get one. “If you are striving hard to get a brighter Idea for your Future, “Education Idea” is the first step towards it. Because we provide excellence to make you Proactive to change the Traditional paradigms you stick on habitually</p>
            <Link href="">Learn More</Link>
        </div>
    )
}

export default About