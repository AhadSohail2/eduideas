import React from 'react'
import Nav from '../components/UX/Nav/Nav'
import Footer from '../components/UX/Footer/Footer'

function BlogLayout({ children }) {
    return (
        <>
            <Nav colured={true} />
            {children}
            <Footer normal={true} />
        </>
    )
}

export default BlogLayout