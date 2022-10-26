import Image from 'next/image';
import Link from 'next/link';

import Tools from './Tools';

export default function ProjectDescription({ p1, p2, img, live, repo, tools }) {
  return (
    <section className='max-w-[1240px] m-auto mb-[52px] px-4 py-12'>
      <div className='md:w-[75%] m-auto'>
        <Image
          className='mix-blend-multiply'
          src={img}
          alt='crypto'
          layout='responsive'
          priority
        />
      </div>

      <div className='max-w-[720px] m-auto px-2 py-14'>
        <h3 className='text-[1.275rem] sm:text-[1.475rem] md:text-[1.5rem] lg:text-[1.625rem] pb-6'>
          Project Overview
        </h3>
        <p className='pb-6 text-[1.1rem]'>{p1}</p>
        <p className='pb-6 text-[1.1rem]'>{p2}</p>
        <p className='text-[1.1rem]'>
          Feel free to check out the Project by visiting the Live Link.
        </p>
      </div>

      <div className='max-w-[720px] m-auto px-2 pb-6'>
        <h3 className='text-[1.275rem] sm:text-[1.475rem] md:text-[1.5rem] lg:text-[1.625rem] pb-6'>
          Tools Used
        </h3>
        <Tools tools={tools} />
      </div>

      <div className='max-w-[720px] m-auto px-2'>
        <h2 className='text-[1.275rem] sm:text-[1.475rem] md:text-[1.5rem] lg:text-[1.625rem] pb-6'>
          See Live
        </h2>

        <div className='flex items-center space-x-5'>
          <button className='w-[200px] py-3 uppercase font-bold shadow-xl tracking-[1px] bg-[#4338ca] text-white rounded-[5px] active:scale-90 transition duration-150'>
            <Link href={live}>
              <a target='_blank'>go live</a>
            </Link>
          </button>
          <button className='w-[200px] py-3 uppercase font-bold shadow-lg tracking-[1px] bg-[#ecf0f3] text-[#4338ca] border-2 border-[#4338ca] rounded-[5px] active:scale-90 transition duration-150'>
            <Link href={repo}>
              <a target='_blank'>github</a>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
