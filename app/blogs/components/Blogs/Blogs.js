import React from 'react'
import BlogCard from './BlogCard'

import styles from './Blogs.module.css'

async function Blogs({ data }) {

    return (
        <div className={styles.container}>
            <h2>Blogs</h2>
            <div className={styles.blogs}>
                {data.map((item) => <BlogCard
                    key={item.id}
                    image={item.acf.image}
                    alt={item.acf.imagealt}
                    date={item.date.split("T")[0]}
                    title={item.title.rendered}
                    slang={item.slug}
                    backgroundColor={item.acf.backgroudcolor}
                    color={item.acf.color}
                />
                )}
            </div>
        </div>
    )
}

export default Blogs