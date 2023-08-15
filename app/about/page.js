import React from 'react'
import Nav from '../components/UX/Nav/Nav'
import Image from 'next/image'

import styles from './About.module.css';
import Footer from '../components/UX/Footer/Footer';

function About() {
  return (
    <div>
      <Nav colured={true} />
      <div className={`${styles.container} container`}>
        <div className={styles.about}>
          <h2>About Us</h2>
          <p>Education Idea Consultants is an opportunity for all to fulfill their dream to Study abroad. In this age of advancement, everyone is looking for better opportunities but not all can get one. “If you are striving hard to get a brighter Idea for your Future, “Education Idea” is the first step towards it. Because we provide excellence to make you Proactive to change the Traditional paradigms you stick on habitually</p>
        </div>
        <div>
          <Image src="/about/1.png" alt='' width={600} height={400} />
        </div>
      </div>
      <Footer normal={true} />
    </div>
  )
}

export default About