import Head from 'next/head';

import Nav from '../src/components/Nav';
import Main from '../src/components/Main';
import Footer from '../src/components/Footer';
import TopNavigator from '../src/components/TopNavigator';
import ProjectDescription from '../src/components/ProjectDescription';

import gameImg from '../src/assets/game.jpg';

export default function CryptoTracker() {
  const tools = ['html', 'css', 'javascript'];

  return (
    <div>
      <Head>
        <title>Case Study Of Pig Game</title>
        <meta name='description' content='Pig Game' />
        <link rel='icon' href='/dice.jpg' />
      </Head>

      <Nav />
      <Main
        title='Pig Game'
        live='https://pig-dice-game-vishal00923.netlify.app/'
      />
      <ProjectDescription
        p1='Pig Game is a simple dice game first described in print in John Scarne in 1945. Players take turns to roll a single die as many times as they wish, adding all roll results to a running total, but losing their gained score for the turn if they roll a 1.'
        p2='I took inspiration from other similar pig dice games which are available on the Internet.'
        img={gameImg}
        live='https://pig-dice-game-vishal00923.netlify.app/'
        repo='https://github.com/vishal00923/pig-game'
        tools={tools}
      />
      <Footer />
      <TopNavigator route='/pig-game' />
    </div>
  );
}
