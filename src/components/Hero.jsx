import Image from 'next/image';

import { useRouter } from 'next/router';
import { GIFY } from '../constants/data';

export default function Hero() {
  const { gify } = GIFY;
  const router = useRouter();

  const handleRouter = () => router.push('/#projects');

  return (
    <main
      id='home'
      className='max-w-[1240px] h-screen mx-auto flex flex-col items-center justify-center px-4 mb-[172px] xs:pt-4 md:justify-start md:pt-20 lg:pt-10 xl:justify-center'
    >
      <div className='w-[300px] smh:w-[350px] xss:w-[200px]'>
        <Image
          className='mix-blend-multiply'
          src={gify}
          alt='gify'
          layout='responsive'
          priority
        />
      </div>

      <div className='text-center'>
        <p className='uppercase opacity-70 mb-4'>
          Let&apos;s build something together
        </p>
        <h2 className='text-4xl pt-4 xss:text-2xl'>
          Hey, I&apos;m <span className=' text-[#4338ca]'>Vishal</span>
        </h2>
        <h1 className='text-4xl pt-4 xss:text-3xl'>
          A Front-End Web Developer
        </h1>
        <p className='opacity-80 pt-6'>
          I&apos;m focused on building responsive front-end web applications
          integrating back-end technologies.
        </p>
      </div>

      <div className='flex justify-center mt-12 smh:mt-20 smd:mt-8'>
        <button
          onClick={handleRouter}
          className='w-[200px] py-3 uppercase font-bold shadow-xl tracking-[1px] bg-[#4338ca] text-white rounded-[5px] active:scale-90 transition duration-150'
        >
          projects
        </button>
      </div>
    </main>
  );
}
