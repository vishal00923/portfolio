import Link from 'next/link';
import Handles from './Handles';

export default function Footer() {
  return (
    <footer className='bg-[#4338CA] w-full px-4 py-10 text-[#fff] md:py-20'>
      <div className='max-w-[1240px] m-auto border-b-[1px] pb-10 flex flex-col space-y-16 md:flex-row md:justify-between md:items-center'>
        <div className='flex flex-col space-y-4'>
          <h2 className='uppercase text-[1.1rem]'>vishal chaurasia</h2>
          <p className='text-[.9rem] md:max-w-[498px]'>
            I&apos;m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
        </div>

        <div className='flex flex-col space-y-4'>
          <h2 className='uppercase text-[1.1rem]'>social</h2>
          <div className='list-none flex space-x-4'>
            <Handles />
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center space-x-2 pt-8'>
        <p className='text-[.4rem] xss:text-[.2rem]'>
          &copy;Copyright {new Date().getFullYear()}. Made by
        </p>
        <sapn className='border-b-[2px] text-[.7rem] xss:text-[.4rem]'>
          Vishal Chaurasia
        </sapn>
      </div>
    </footer>
  );
}
