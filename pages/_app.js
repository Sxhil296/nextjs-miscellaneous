import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'
import '../styles/layout.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  if (Component.getLayout) {
    return Component.getLayout( <Component {...pageProps} />)
  }
  return (
    <>
    <Head>
      <title>NextJS</title>
      <meta name='description' content='practice' />
    </Head>
    <Header />
    <Component {...pageProps} />
    <Footer />
    </>
  )
}

export default MyApp
