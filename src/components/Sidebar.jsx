import Image from 'next/image';
import Links from './Links';

import { useRouter } from 'next/router';
import { GIFY } from '../constants/data';
import { AiOutlineClose } from 'react-icons/ai';

import { useContext } from 'react';
import { AppContext } from '../contexts/appContext';

export default function Sidebar() {
  const { gify } = GIFY;
  const router = useRouter();
  const { isSidebarOpen, setIsSidebarOpen } = useContext(AppContext);

  const handleRouter = () => router.push('/');
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  return (
    <div
      className={`md:hidden z-[100] shadow-2xl transition-all duration-150 bg-[#ecf0f3] fixed top-0 w-[80%] sm:w-[75%] h-screen px-12 py-14 flex flex-col sm:px-16 ${
        isSidebarOpen ? 'right-0' : '-right-[100%]'
      }`}
    >
      <div
        onClick={handleCloseSidebar}
        className='absolute top-5 right-5 cursor-pointer'
      >
        <AiOutlineClose size={20} />
      </div>

      <div className='w-[200px] absolute bottom-[10%] right-[25%] xss:right-[10%]'>
        <Image
          className='mix-blend-multiply'
          src={gify}
          alt='gify'
          layout='responsive'
          priority
        />
      </div>

      <div className='pb-4 border-b-2 border-[#4338CA]'>
        <p>Let&apos;s build something legendary together</p>
      </div>

      <div className='py-10 pb-12'>
        <Links hidden='' />
      </div>
    </div>
  );
}
