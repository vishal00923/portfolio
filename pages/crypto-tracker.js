import Head from 'next/head';

import Nav from '../src/components/Nav';
import Main from '../src/components/Main';
import Footer from '../src/components/Footer';
import TopNavigator from '../src/components/TopNavigator';
import ProjectDescription from '../src/components/ProjectDescription';

import cryptoImg from '../src/assets/crypto.jpg';

export default function CryptoTracker() {
  return (
    <div>
      <Head>
        <title>Case Study Of Crypto Tracker</title>
        <meta name='description' content='Crypto Tracker' />
        <link rel='icon' href='/crypto.jpg' />
      </Head>

      <Nav />
      <Main
        title='Crypto Tracker'
        live='https://crypto-tracker-a9e45.web.app/'
      />
      <ProjectDescription
        p1='Crypto Tracker is platform where peoples watch their faviourate crypto
          currency and also save crypto currencies in a watchlist for future
          reference.'
        p2='I took inspiration from other similar platforms like Coin Gecko, Coin
          Market etc. which are similar in terms of showing crypto information
          for the users.'
        cryptoImg={cryptoImg}
        live='https://crypto-tracker-a9e45.web.app/'
        repo='https://github.com/vishal00923/crypto-tracker'
      />
      <Footer />
      <TopNavigator route='/crypto-tracker' />
    </div>
  );
}
