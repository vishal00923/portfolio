import Head from 'next/head';

import About from '../src/components/About';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Skills from '../src/components/Skills';
import Social from '../src/components/Social';
import Contact from '../src/components/Contact';
import Projects from '../src/components/Projects';
import TopNavigator from '../src/components/TopNavigator';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vishal | Front-End Developer</title>
        <meta name='description' content='Welcome to my personal portfolio' />
        <link rel='icon' href='/gify.gif' />
      </Head>

      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Social />
      <TopNavigator route='/' />
    </div>
  );
}
