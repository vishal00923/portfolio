import Image from 'next/image';
import Gify from './Gify';

export default function Banner() {
  return (
    <div id="home" className="max-w-[650px] mx-auto h-screen">
      <div>
        <div className="w-[90%] h-[90%]">
          <Gify />
        </div>

        <p className="text-center uppercase opacity-60 mb-4">
          Let&apos;s build something together
        </p>
        <h1 className="text-center uppercase text-4xl lg:text-5xl 2xl:text-6xl mb-6">
          Hey, I&apos;m <span className=" text-[#4338ca]">Vishal</span>
        </h1>
        <p className="text-center px-4">
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </p>

        <div className="flex justify-center mt-20 md:mt-10 lg:mt-12">
          <button className="uppercase font-bold shadow-xl tracking-[1px] bg-[#4338ca] text-white px-16 py-4 rounded-[5px] active:scale-90 transition duration-150">
            projects
          </button>
        </div>
      </div>
    </div>
  );
}
