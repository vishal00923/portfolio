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

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
    router.push('/');
  };

  return (
    <div>
      <div
        className={`lg:hidden bg-[#ecf0f3] fixed top-0 right-0 w-[75%] sm:w-[60%] md:w-[50%] h-screen px-8 py-16 flex flex-col sm:px-16 ${
          isSidebarOpen ? 'right-0' : '-left-[100%]'
        }`}
      >
        <div
          onClick={handleCloseSidebar}
          className='absolute top-0 right-0 pt-5 pr-5 cursor-pointer'
        >
          <AiOutlineClose size={25} />
        </div>

        <div className='pb-4 border-b-2 border-[#4338CA]'>
          <h2
            onClick={handleCloseSidebar}
            className='text-xl cursor-pointer uppercase pb-4 hover:text-[#4338ca]  hover:transition-all hover:duration-300 hover:ease-in-out'
          >
            vishal chaurasia
          </h2>
          <p>Let&apos;s build something legendary together</p>
        </div>

        <div className='pt-5 pb-12'>
          <Links hidden='' />
        </div>

        <div>
          <Image
            className='mix-blend-multiply'
            src={gify}
            alt='gify'
            layout='responsive'
            priority
          />
        </div>
      </div>
    </div>
  );
}
