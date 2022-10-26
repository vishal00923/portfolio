import Image from 'next/image';
import Link from 'next/link';

import { GIFY } from '../constants/data';

export default function Main({ title, live }) {
  const { gify } = GIFY;

  return (
    <main className='max-w-[1240px] h-screen mx-auto flex flex-col items-center justify-center px-4 mb-[172px] md:justify-center md:h-[80vh] mdlg:h-[100%] mdlg:pt-20 lg:min-h-screen surface:h-[50vh] surface:pt-20'>
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
        <h2 className='text-4xl xss:text-3xl sm:text-5xl lg:text-6xl uppercase font-[900] text-[#4338ca] mb-6'>
          {title}
        </h2>
        <p className='max-w-[520px] sm:max-w-[620px] md:max-w-[720px] lg:max-w-[920px] auto text-[1.275rem] text-center'>
          This page contains the case study of {title} which includes the
          Project Overview, Tools Used and Live Links to the official project.
        </p>
      </div>

      <div className='flex justify-center mt-12 smh:mt-20 smd:mt-8'>
        <button className='w-[200px] py-3 uppercase font-bold shadow-xl tracking-[1px] bg-[#4338ca] text-white rounded-[5px] active:scale-90 transition duration-150'>
          <Link href={live}>
            <a target='_blank'>go live</a>
          </Link>
        </button>
      </div>
    </main>
  );
}
