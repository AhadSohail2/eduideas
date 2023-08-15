import React from 'react'
import Blogs from './components/Blogs/Blogs'

async function getData() {
    const res = await fetch(`${process.env.BACKEND_URL}`,{next:{revalidate:1}});
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json();
}

async function Blog() {

    const data = await getData()
    
    return (
        <div>
            <Blogs data={data} />
        </div>
    )
}

export default Blog;