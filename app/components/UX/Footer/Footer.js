import React from 'react';

import styles from './Footer.module.css';

function Footer({ normal }) {
  return (
    <div style={normal ? { position: "static",marginTop:"130px" } : { position: "absolute" }} className={styles.container}>
      <p>Education-Idea All Right Reserved 2023</p>
    </div>
  )
}

export default Footer