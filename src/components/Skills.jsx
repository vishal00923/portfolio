import Image from 'next/image';
import Section from './Section';

import { SKILLS } from '../constants/data';

export default function Skills() {
  return (
    <section
      id='skills'
      className='max-w-[1240px] m-auto mb-[172px] px-4 py-20'
    >
      <Section name='skills' />

      <div className='pt-10 md:pt-12 grid grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-8 xss:grid-cols-1 xss:gap-y-2 lg:grid-cols-4'>
        {SKILLS.map(({ id, skill, name }) => (
          <Skill key={id} name={name} skill={skill} />
        ))}
      </div>
    </section>
  );
}

function Skill({ skill, name }) {
  return (
    <div className='flex items-center justify-between shadow-xl rounded-md px-4 py-6'>
      <div className='w-[45px]'>
        <Image
          className='mix-blend-multiply'
          src={skill}
          alt={name}
          layout='responsive'
          priority
        />
      </div>
      <span className='lowercase sm:uppercase'>{name}</span>
    </div>
  );
}
