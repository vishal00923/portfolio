import Head from 'next/head';

import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Skills from '../src/components/Skills';
import Social from '../src/components/Social';
import Contact from '../src/components/Contact';
import Projects from '../src/components/Projects';

import { useContext } from 'react';
import { AppContext } from '../src/contexts/appContext';

export default function Home() {
  const { isSidebarOpen } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>Vishal | Front-End Developer</title>
        <meta name='description' content='Welcome to my personal portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={`${isSidebarOpen && 'bg-black/70'}`}>
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <Social />
      </div>
    </>
  );
}
