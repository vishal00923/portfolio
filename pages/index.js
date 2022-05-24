import Head from 'next/head';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Vishal | Front-End Developer</title>
        <meta name="description" content="Welcome to my personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  );
};

export default Home;
