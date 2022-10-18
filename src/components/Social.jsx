import Link from 'next/link';

import { useEffect, useState } from 'react';
import { TiArrowForwardOutline } from 'react-icons/ti';
import { AiOutlineBook, AiOutlineMail } from 'react-icons/ai';
import {
  SlSocialGithub,
  SlSocialLinkedin,
  SlSocialTwitter,
} from 'react-icons/sl';

export default function Social() {
  const [isSocialSidebarOpen, setIsSocialSidebarOpen] = useState(false);

  const handleIsSocialSidebarOpen = () => {
    setIsSocialSidebarOpen(true);
  };

  const closeSocialSidebar = () => {
    setTimeout(() => {
      if (setIsSocialSidebarOpen) {
        setIsSocialSidebarOpen(false);
      }
    }, 5000);
  };

  useEffect(() => {
    closeSocialSidebar();
  }, [isSocialSidebarOpen]);

  return (
    <>
      {isSocialSidebarOpen ? (
        <div className="absolute left-0 top-[35%] bg-[#4e44c0] px-2 py-2 shadow-2xl  transition-all duration-300 ease-in-out">
          <ul className="px-2 py-4">
            <li className="mb-8">
              <Link href="https://www.linkedin.com/in/vishal-chaurasia-a7332b1b6/">
                <a target="_blank">
                  <div className="">
                    <SlSocialLinkedin size={25} color="#fff" />
                  </div>
                </a>
              </Link>
            </li>
            <li className="mb-8">
              <Link href="https://twitter.com/vishal00923">
                <a target="_blank">
                  <div className="">
                    <SlSocialTwitter size={25} color="#fff" />
                  </div>
                </a>
              </Link>
            </li>
            <li className="mb-8">
              <Link href="https://github.com/vishal00923">
                <a target="_blank">
                  <div className="">
                    <SlSocialGithub size={25} color="#fff" />
                  </div>
                </a>
              </Link>
            </li>
            <li className="mb-8">
              <Link href="mailto:vishalbg.mz@gmail.com">
                <a target="_blank">
                  <div className="">
                    <AiOutlineMail size={25} color="#fff" />
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://drive.google.com/file/d/1Lr2bi3ny9cYLtfATSk6aj5Oajc54e7HG/view?usp=sharing">
                <a target="_blank">
                  <div className="">
                    <AiOutlineBook size={25} color="#fff" />
                  </div>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div
          onClick={handleIsSocialSidebarOpen}
          className={`${
            !isSocialSidebarOpen
              ? 'absolute left-0 top-[35%] bg-[#4e44c0] px-2 py-2 shadow-2xl z-[100]'
              : 'hidden'
          }`}
        >
          <button className="active:scale-90 transition ease-in-out  duration-150">
            <TiArrowForwardOutline size={30} color="#fff" />
          </button>
        </div>
      )}
    </>
  );
}
