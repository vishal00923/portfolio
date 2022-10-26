import Head from 'next/head';

import Nav from '../src/components/Nav';
import Main from '../src/components/Main';
import Footer from '../src/components/Footer';
import TopNavigator from '../src/components/TopNavigator';
import ProjectDescription from '../src/components/ProjectDescription';

import notesImg from '../src/assets/notes.jpg';

export default function CryptoTracker() {
  const tools = ['html', 'scss', 'react js', 'local storage'];

  return (
    <div>
      <Head>
        <title>Case Study Of Notes App</title>
        <meta name='description' content='Notes App' />
        <link rel='icon' href='/notes.png' />
      </Head>

      <Nav />
      <Main
        title='Notes App'
        live='https://notes-app-vishal00923.netlify.app/'
      />
      <ProjectDescription
        p1='Notes App is a Web based notes taking platform where peaples can take and save their notes for future reference. All the notes taken by the user are saved. I made this web application using my Front-End Development skills.'
        p2='I took inspiration from other similar Notes Taking App which are available on the Internet.'
        img={notesImg}
        live='https://notes-app-vishal00923.netlify.app/'
        repo='https://github.com/vishal00923/notes-app'
        tools={tools}
      />
      <Footer />
      <TopNavigator route='/notes-app' />
    </div>
  );
}
