import Image from 'next/image';
import Section from './Section';

import { useRouter } from 'next/router';
import { PROJECTS } from '../constants/data';

export default function Projects() {
  return (
    <div id='projects' className='max-w-[1240px] m-auto mb-[172px] px-4 py-20'>
      <Section name='projects' />

      <div className='mt-4'>
        <p className='text-center'>Here you will find my personal projects</p>
      </div>

      <div className='pt-10 md:pt-12 grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-10'>
        {PROJECTS.map(({ id, img, name, route, description }) => (
          <Project
            key={id}
            img={img}
            name={name}
            route={route}
            description={description}
          />
        ))}
      </div>
    </div>
  );
}

function Project({ img, name, route, description }) {
  const router = useRouter();

  return (
    <>
      <div>
        <Image
          className='mix-blend-multiply'
          src={img}
          alt={name}
          layout='responsive'
          priority
        />
      </div>

      <div className='flex flex-col items-center space-y-5 sm:items-start sm:justify-center'>
        <div className='text-center sm:text-left'>
          <h2 className='text-xl pb-2'>{name}</h2>
          <p>{description}</p>
        </div>

        <div onClick={() => router.push(route)}>
          <button className='w-[200px] py-3 uppercase font-bold shadow-xl tracking-[1px] bg-[#4338ca] text-white rounded-[5px] active:scale-90 transition duration-150'>
            case study
          </button>
        </div>
      </div>
    </>
  );
}
