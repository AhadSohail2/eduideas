import React from 'react';
import Nav from '../components/UX/Nav/Nav';

import styles from './page.module.css';
import Contact from './components/Contact';

function Page() {
  return (
    <div className={styles.container}>
      <Nav colured={true} />
      <div>
        <Contact />
      </div>
    </div>
  )
}

export default Page