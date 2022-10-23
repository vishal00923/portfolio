import Link from 'next/link';

import { useContext } from 'react';
import { AppContext } from '../contexts/appContext';

export default function Links({ hidden }) {
  return (
    <>
      <ul
        className={`${hidden} ${
          hidden.length === 0
            ? 'flex flex-col items-start space-y-4'
            : 'lg:flex space-x-16'
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
      className='uppercase font-semibold hover:text-[#4338ca] hover:transition-all hover:duration-150 hover:ease-in-out'
    >
      <Link href={`${name === 'home' ? '/' : `/#${name}`}`}>{name}</Link>
    </li>
  );
}
