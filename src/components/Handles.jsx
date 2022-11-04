import Link from 'next/link';

import { AiOutlineBook, AiOutlineMail } from 'react-icons/ai';
import {
  SlSocialGithub,
  SlSocialTwitter,
  SlSocialLinkedin,
} from 'react-icons/sl';

export default function Handles() {
  return (
    <>
      <li className='mb-8'>
        <Link href='https://www.linkedin.com/in/vishal-chaurasia-a7332b1b6/'>
          <a target='_blank'>
            <div className=''>
              <SlSocialLinkedin size={25} color='#fff' />
            </div>
          </a>
        </Link>
      </li>
      <li className='mb-8'>
        <Link href='https://twitter.com/vishal00923'>
          <a target='_blank'>
            <div className=''>
              <SlSocialTwitter size={25} color='#fff' />
            </div>
          </a>
        </Link>
      </li>
      <li className='mb-8'>
        <Link href='https://github.com/vishal00923'>
          <a target='_blank'>
            <div className=''>
              <SlSocialGithub size={25} color='#fff' />
            </div>
          </a>
        </Link>
      </li>
      <li className='mb-8'>
        <Link href='mailto:vishalbg.mz@gmail.com'>
          <a target='_blank'>
            <div className=''>
              <AiOutlineMail size={25} color='#fff' />
            </div>
          </a>
        </Link>
      </li>
      <li>
        <Link href='https://drive.google.com/file/d/1k4pVs6RLHLDTQRvTqT_tlThBIhQpuQcr/view?usp=sharing'>
          <a target='_blank'>
            <div className=''>
              <AiOutlineBook size={25} color='#fff' />
            </div>
          </a>
        </Link>
      </li>
    </>
  );
}
