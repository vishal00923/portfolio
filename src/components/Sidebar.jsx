import Img from './Img';
import Links from './Links';
import Link from 'next/link';

import Gify from '../assets/gify.gif';

import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

export default function Sidebar({ openSidebar, setOpenSidebar }) {
  const handleCloseSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div className='bg-[#ECF0F3]'>
      <div className='absolute bottom-20 left-0 w-[100%] h-[auto]'>
        <Img src={Gify} alt='Gify' />
      </div>

      <div
        onClick={handleCloseSidebar}
        className='bg-white rounded-full cursor-pointer p-3 shadow-lg absolute top-5 right-5'
      >
        <AiOutlineClose size={12} />
      </div>

      <div className='border-b-2 border-[#4338CA]'>
        <div className='flex justify-between items-center'>
          <h2
            onClick={handleCloseSidebar}
            className='text-xl uppercase mb-8 mt-4 pt-6 text-[#4338CA]'
          >
            <Link href='/'> vishal chaurasia</Link>
          </h2>
        </div>
        <p className='w-[90%] pb-5'>
          Let&apos;s build something legendary together
        </p>
      </div>

      <div className='mt-10'>
        <Links hidden='' />
      </div>
    </div>
  );
}
