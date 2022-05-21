import React from 'react';
import Link from 'next/link';

import {
  AiOutlineClose,
  AiOutlineMail,
  AiOutlineArrowDown,
} from 'react-icons/ai';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';

import Logo from './Logo';

// Social Links
const socialLinks = {
  github: 'https://github.com/vishal00923',
  linkedIn: 'https://www.linkedin.com/in/vishal-chaurasia-a7332b1b6/',
  twitter: 'https://twitter.com/vishal00923',
  email: 'mailto:vishalbg.mz@gmail.com',
  resume:
    'https://drive.google.com/file/d/1Lr2bi3ny9cYLtfATSk6aj5Oajc54e7HG/view?usp=sharing',
};

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 w-[75%] sm:w-[65%] md:w-[45%] h-screen bg-[#FEFEFE] p-10 ease-in duration-500">
      <div>
        <div className="flex w-full justify-between items-center">
          <Logo />

          <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
            <AiOutlineClose />
          </div>
        </div>

        <div className="border-b border-gray-300 my-4">
          <p className="w-[85%] md:w-[90%] py-4">
            Let&apos;s build something legendary together
          </p>
        </div>
      </div>

      <div className="py-4 flex flex-col">
        <ul className="uppercase">
          <Link href="/">
            <li className="py-4 text-sm">Home</li>
          </Link>
          <Link href="/about">
            <li className="py-4 text-sm">About</li>
          </Link>
          <Link href="/skills">
            <li className="py-4 text-sm">Skills</li>
          </Link>
          <Link href="/projects">
            <li className="py-4 text-sm">Projects</li>
          </Link>
          <Link href="/contact">
            <li className="py-4 text-sm">Contact</li>
          </Link>
        </ul>

        <div className="pt-40">
          <p className="uppercase tracking-widest text-[#42C2FF]">
            <u>Let&apos;s Connnect</u>
          </p>
          <div className="flex justify-between items-center my-4 w-full sm:w-[80%]">
            <Link href={socialLinks.github}>
              <a target="_blank">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
              </a>
            </Link>

            <Link href={socialLinks.linkedIn}>
              <a target="_blank">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
              </a>
            </Link>

            <Link href={socialLinks.email}>
              <a target="_blank">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
              </a>
            </Link>

            <Link href={socialLinks.twitter}>
              <a target="_blank">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaTwitter />
                </div>
              </a>
            </Link>
          </div>
        </div>

        <div className="pt-10">
          <p className="uppercase tracking-widest text-[#42C2FF]">
            <u>Resume</u>
          </p>

          <div className="flex items-center">
            <Link href={socialLinks.resume}>
              <a target="_blank" className="my-4">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineArrowDown />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
