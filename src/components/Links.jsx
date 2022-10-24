import Link from 'next/link';

import { useContext } from 'react';
import { AppContext } from '../contexts/appContext';

export default function Links({ hidden }) {
  return (
    <>
      <ul
        className={`${hidden} ${
          hidden.length === 0
            ? 'flex flex-col items-start space-y-6'
            : 'md:flex md:space-x-8 lg:space-x-16'
        }`}
      >
        <Li name='home' />
        <Li name='about' />
        <Li name='skills' />
        <Li name='projects' />
        <Li name='contact' />
      </ul>
    </>
  );
}

function Li({ name }) {
  const { setIsSidebarOpen } = useContext(AppContext);

  const handleCloseSidebar = () => setIsSidebarOpen(false);

  return (
    <li
      onClick={handleCloseSidebar}
      className='uppercase font-[700] hover:transition-all hover:duration-150 hover:ease-in-out hover:border-b-[3px] hover:border-[#4338ca]'
    >
      <Link href={`${name === 'home' ? '/' : `/#${name}`}`}>{name}</Link>
    </li>
  );
}
