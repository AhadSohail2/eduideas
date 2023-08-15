import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

import styles from './BlogCard.module.css'

async function BlogCard({ image, alt, title, slang, date, backgroundColor, color }) {



  return (
    <Link href={`/blogs/${slang}`}>
      <div className={styles.container} style={{ backgroundColor: backgroundColor, color: color }} >
        <Image src={image} alt={alt} width={120} height={120} />
        <p>{date}</p>
        <h3>{title}</h3>
      </div>
    </Link>
  )
}

export default BlogCard