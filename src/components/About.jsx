import Img from './Img';
import { ABOUT_IMG } from '../constants/data';

export default function About() {
  const { about } = ABOUT_IMG;

  return (
    <div id='about' className='max-w-[1240px] h-screen m-auto'>
      <div className='relative'>
        <h2 className='text-center text-3xl mb-12 uppercase xl:text-3xl 2xl:text-4xl'>
          about me
        </h2>
        <span className='absolute top-14 left-[50%] w-8 h-[5px] bg-[#4338CA] rounded-md'></span>
        <p className='m-auto mb-8 px-6 md:text-center text-lg max-w-[920px] opacity-[0.8] leading-[1.6]'>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>

      <div className='flex flex-col items-center space-y-5 px-8 md:pt-16  2xl:pt-18 pb-6 lg:flex-row space-x-10'>
        <div className='w-[100%] mb-12 md:pt-8 md:translate-y-12'>
          <p className='mb-1'>
            I specialize in building mobile responsive front-end UI applications
            that connect with API&apos;s and other backend technologies.
          </p>

          <p className='mb-1'>
            I&apos;m passionate about learning new technologies and understand
            there is more than one way to accomplish a task.{' '}
          </p>

          <p className='mb-1'>
            I&apos;m most proficient in building front-end applications using
            HTML, CSS, Javascript, and React, I am a quick learner and can pick
            up new tech stacks as needed.
          </p>

          <p className='mb-1'>
            I believe that being a great developer is not using one specific
            language, but choosing the best tool for the job.
          </p>

          <p className='mt-2'>
            I&apos;m open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don&apos;t hesitate to contact me.
          </p>

          <div className='flex justify-center mt-20 md:mt-10 lg:mt-12'>
            <button className='uppercase font-bold shadow-xl tracking-[1px] bg-[#4338ca] text-white px-16 py-4 rounded-[5px] active:scale-90 transition duration-150'>
              contact
            </button>
          </div>
        </div>

        <>
          <div className='hidden lg:block h-[auto] w-[50%] shadow-2xl rounded-md'>
            <Img src={about} alt='about' />
          </div>
        </>
      </div>
    </div>
  );
}
