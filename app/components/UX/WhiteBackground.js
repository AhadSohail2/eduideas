import React from 'react'

import styles from './WhiteBackground.module.css';

function WhiteBackground(props) {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    )
}

export default WhiteBackground