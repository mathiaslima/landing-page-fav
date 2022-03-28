import type { NextPage } from 'next'
import Head from 'next/head'
import imageCam from "../assets/images/camiseta-azul.jpg"
import { Container } from '../styles/pages/home'

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Test</title>
      </Head>

      <main>

        <h1>
          <img src="https://ibb.co/2MSRSMz" alt="camiseta-azul" />
        </h1>

      </main>


    </Container>
  )
}

export default Home
