import Section from './Section';

import { useContext } from 'react';
import { AppContext } from '../contexts/appContext';

import { toCapitalize } from '../utils/helper';

export default function Contact() {
  const { isSidebarOpen } = useContext(AppContext);

  return (
    <div id='contact' className='max-w-[1240px] m-auto mb-[52px] px-4 py-20'>
      <Section name='contact' />

      <div className='mt-4'>
        <p className='text-center'>
          Feel free to Contact me by submitting the form below and <br /> I will
          get back to you as soon as possible
        </p>
      </div>

      <div className='max-w-[920px] m-auto mt-8 px-10 py-8 pt-10 shadow-2xl rounded-md md:pt-12'>
        <form
          className='grid grid-cols-1 gap-y-6'
          action='https://getform.io/f/c08aa9db-dbd9-40aa-a202-8e33254a3818'
          method='POST'
          encType='multipart/form-data'
        >
          <InputBox name='name' type='text' placeholder='Enter Your Name' />
          <InputBox name='email' type='email' placeholder='Enter Your Email' />

          <div className='flex flex-col space-y-3'>
            <label className='text-sm font-semibold' htmlFor='message'>
              Message
            </label>
            <textarea
              className={`${
                isSidebarOpen && 'bg-inherit placeholder:text-inherit'
              } px-4 py-[16px] border-none outline-none rounded-md`}
              rows={10}
              name='message'
              placeholder='Enter Your Message'
            ></textarea>
          </div>

          <div className='text-center pt-3'>
            <button className='w-[200px] xss:w-[180px] py-3 uppercase font-bold shadow-xl tracking-[1px] bg-[#4338ca] text-white rounded-[5px] active:scale-90 transition duration-150'>
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function InputBox({ name, placeholder, type }) {
  const { isSidebarOpen } = useContext(AppContext);

  return (
    <div className='flex flex-col space-y-3'>
      <label className='text-sm font-semibold' htmlFor={name}>
        {toCapitalize(name)}
      </label>
      <input
        className={`${
          isSidebarOpen && 'bg-inherit placeholder:text-inherit'
        } px-4 py-[16px] border-none outline-none rounded-md`}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}
