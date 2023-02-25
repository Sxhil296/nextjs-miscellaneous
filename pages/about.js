import React from 'react'
import Footer from '../components/Footer'

const about = () => {
  return (
    <div className='content'>
        <h1>About</h1>
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