import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../contexts/appContext';

import { CgMenuRightAlt } from 'react-icons/cg';

import Links from './Links';
import Sidebar from './Sidebar';

export default function Nav() {
  const [shadow, setShadow] = useState(false);
  const router = useRouter();
  const { isSidebarOpen, setIsSidebarOpen } = useContext(AppContext);

  const handleNavShadow = () => {
    if (window.scrollY >= 200) {
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
      className={`bg-[#ecf0f3] h-[70px] fixed top-0 w-full z-[100] px-5 py-5 ease-in duration-500 ${
        shadow && 'shadow-lg transition-all ease-in duration-300'
      }`}
    >
      <div className='flex justify-between items-center'>
        <h2
          onClick={handleRouter}
          className='cursor-pointer uppercase text-[#4338CA] font-[900]'
        >
          vishal chaurasia
        </h2>

        <Links hidden='hidden' />
      </div>

      <div
        onClick={handleOpenSidebar}
        className='absolute top-5 right-5 cursor-pointer md:hidden'
      >
        <CgMenuRightAlt size={25} />
      </div>

      {isSidebarOpen && <Sidebar />}
    </nav>
  );
}
