import Head from 'next/head'
import React from 'react'

const Blog = ({title, description}) => {
  return (
    <>
    <Head>
        <title>{title}</title>
        <meta name='description' content={description}/>
    </Head>
        <h1 className='content'>List of Articles</h1>
    </>
  )
}

export default Blog

export async function getServerSideProps() {
    return {
        props: {
            title: 'Article Title',
            description: 'Article description',
        },
    }
}