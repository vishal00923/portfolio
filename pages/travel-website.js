import Head from 'next/head';

import Nav from '../src/components/Nav';
import Main from '../src/components/Main';
import Footer from '../src/components/Footer';
import TopNavigator from '../src/components/TopNavigator';
import ProjectDescription from '../src/components/ProjectDescription';

import travelImg from '../src/assets/travel.jpg';

export default function CryptoTracker() {
  const tools = ['html', 'css', 'javascript', 'swiper js'];

  return (
    <div>
      <Head>
        <title>Case Study Of Travel Website</title>
        <meta name='description' content='Travel Website' />
        <link rel='icon' href='/travel.png' />
      </Head>

      <Nav />
      <Main
        title='Travel Website'
        live='https://travel-website-vishal00923.netlify.app/'
      />
      <ProjectDescription
        p1='Travel Website is a responsive webiste. I made this project to enhance my Front-End Development skills. It has a very nice and clean UI.'
        p2='I took User Interface ideas by visiting different types of websites of the same industry and even visited platforms like dribbble to get inspiration for building a good User Interface.'
        img={travelImg}
        live='https://travel-website-vishal00923.netlify.app/'
        repo='https://github.com/vishal00923/travel-website'
        tools={tools}
      />
      <Footer />
      <TopNavigator route='/travel-website' />
    </div>
  );
}
