import Image from 'next/image';

import { useRouter } from 'next/router';
import { ABOUT_IMG } from '../constants/data';

import Button from './Button';
import Section from './Section';

export default function About() {
  const { about } = ABOUT_IMG;
  const router = useRouter();

  const handleRouter = () => router.push('/#contact');

  return (
    <section
      id='about'
      className='max-w-[1240px] mb-[172px] flex flex-col items-center m-auto px-4 py-20'
    >
      <div className='mb-4'>
        <Section name='about' />
        <p className='text-center pt-4'>
          Here you will find more information, About Me. What I Do.
        </p>
      </div>

      <div className='flex flex-col items-center px-4 space-y-10 md:flex-row md:items-center md:space-x-10 md:pt-10'>
        <div className='flex flex-col items-center space-y-4'>
          <div>
            <ul className='list-disc'>
              <li className='pb-2'>
                <p>
                  I&apos;m specialize in building mobile responsive front-end UI
                  applications that connect with API&apos;s and other backend
                  technologies.
                </p>
              </li>

              <li className='pb-2'>
                <p>
                  I&apos;m passionate about learning new technologies and
                  understand there is more than one way to accomplish a task.
                </p>
              </li>

              <li className='pb-2'>
                <p>
                  I&apos;m most proficient in building front-end applications
                  using HTML, CSS, Javascript, and React, I am a quick learner
                  and can pick up new tech stacks as needed.
                </p>
              </li>

              <li className='pb-2'>
                <p>
                  I believe that being a great developer is not using one
                  specific language, but choosing the best tool for the job.
                </p>
              </li>
            </ul>

            <p className='pt-[10px] font-[700]'>
              I&apos;m open to Job opportunities where I can contribute, learn
              and grow. If you have a good opportunity that matches my skills
              and experience then don&apos;t hesitate to contact me.
            </p>
          </div>

          <div className='lg:pt-5'>
            <Button handleClick={handleRouter}>contact</Button>
          </div>
        </div>

        <div className='shadow-xl hover:shadow-2xl rounded-md w-[100%]'>
          <Image
            className='mix-blend-multiply'
            src={about}
            alt='about'
            layout='responsive'
            priority
          />
        </div>
      </div>
    </section>
  );
}
