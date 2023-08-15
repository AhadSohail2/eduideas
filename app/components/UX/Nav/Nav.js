"use client"

import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from './Nav.module.css';

function Nav({ colured }) {

  const [opened, setOpened] = useState();

  const clickHandler = () => {
    setOpened((prev) => !prev)
  }

  return (
    <div className={`container ${styles.container} `}>
      <div className={styles.res}>
        <div>
          <Link href="/">
            {!colured && <Image src="/logoWhite.png" alt='' width={200} height={80} />}
            {colured && <Image src="/logo.png" alt='' width={200} height={80} />}
          </Link>
        </div>
        <button className={styles.resBtn} onClick={clickHandler} >
          <div className={styles.barsContainer} style={opened ? { position: "fixed" } : { position: "static" }}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </button>
      </div>
      <ul className={`${opened ? styles.opened : styles.closed}  ${colured ? styles.colured : ""}`} >
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
        <li><Link href="/blogs/study-in-uk">Study In UK</Link></li>
        <li><Link href="/blogs">Blogs</Link></li>
      </ul>
    </div>
  )
}

export default Nav