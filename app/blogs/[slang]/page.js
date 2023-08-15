import styles from './Blog.module.css';
import Image from 'next/image'




async function BlogPage({ params }) {
    async function getData() {
        const res = await fetch(`${process.env.BACKEND_URL}?slug=${params.slang}`, { next: { revalidate: 1 } })

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        const resData = await res.json();
        if (resData.length === 0) {
            throw new Error('Failed to fetch data')
        }
        return resData;

    }


    const data = await getData();
    const dataObject = data[0];

    return (
        <div className={`container ${styles.container}`} >
            <Image src={dataObject.acf.image} className={styles.img} alt={dataObject.acf.imagealt} width={800} height={500} />
            <h2>{dataObject.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: dataObject.content.rendered }} >
            </div>
        </div>
    )
}

export default BlogPage