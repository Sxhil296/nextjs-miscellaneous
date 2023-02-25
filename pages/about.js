import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'

const about = () => {
  return (

    <div>
      <Head>
        <title>NextJS | About</title>
        <meta name='description' content='practice'/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1 className='content'>About</h1>
    </div>
  )
}

export default about 

about.getLayout = function PageLayout(page) {
    return (
        <>
        {page}
        <Footer />
        </>
    )
}