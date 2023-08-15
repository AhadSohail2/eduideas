import React from 'react'

import styles from './Card.module.css'

function Card({ id, color, icon, heading, para }) {

    return (
        <div className={styles.container} style={{ marginLeft: id * 340 }}>
            <div className={styles.icon}>
                <i style={{ color: color }} className={icon}></i>
            </div>
            <div style={{ backgroundColor: color }} className={styles.heading}>
                <h4>{heading}</h4>
            </div>
            <p className={styles.para}>{para}</p>
        </div>
    )
}

export default Card