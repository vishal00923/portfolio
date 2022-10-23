import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../contexts/appContext';

import { AiOutlineMenu } from 'react-icons/ai';

import Links from './Links';
import Sidebar from './Sidebar';

export default function Nav() {
  const [shadow, setShadow] = useState(false);
  const router = useRouter();
  const { isSidebarOpen, setIsSidebarOpen } = useContext(AppContext);

  const handleNavShadow = () => {
    if (window.scrollY >= 75) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  const handleRouter = () => router.push('/');
  const handleOpenSidebar = () => setIsSidebarOpen(true);

  useEffect(() => window.addEventListener('scroll', handleNavShadow), []);

  return (
    <nav
      className={`bg-[#ecf0f3] fixed top-0 w-full flex justify-between z-[100] px-5 py-5 ease-in duration-500 ${
        shadow && 'shadow-lg transition-all ease-in duration-300'
      }`}
    >
      <h2
        onClick={handleRouter}
        className='hidden text-md uppercase hover:text-[#4338ca]  hover:transition-all hover:duration-300 hover:ease-in-out lg:block'
      >
        vishal chaurasia
      </h2>

      <Links hidden='hidden' />

      <div onClick={handleOpenSidebar} className='cursor-pointer lg:hidden'>
        <AiOutlineMenu size={25} />
      </div>

      {isSidebarOpen && <Sidebar />}
    </nav>
  );
}
