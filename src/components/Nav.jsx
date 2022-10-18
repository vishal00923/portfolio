import Link from 'next/link';

import { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

export default function Nav() {
  const [shadow, setShadow] = useState(false);

  const handleNavShadow = () => {
    if (window.scrollY >= 70) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleNavShadow);
  }, []);

  return (
    <nav
      className={`sticky left-0 top-0 flex justify-between p-6 z-[100] ${
        shadow && 'lg:shadow-xl ease-in-out duration-300'
      }`}
    >
      <h2 className="hidden lg:block text-md uppercase hover:text-[#4338ca] transition-all duration-300 ease-in-out">
        <Link href="/">vishal chaurasia</Link>
      </h2>

      <ul className="hidden lg:flex space-x-16">
        <li className="uppercase font-semibold">
          <Link href="/">home</Link>
        </li>
        <li className="uppercase font-semibold">
          <Link href="/#about">about</Link>
        </li>
        <li className="uppercase font-semibold">
          <Link href="/#skills">skills</Link>
        </li>
        <li className="uppercase font-semibold">
          <Link href="/#projects">projects</Link>
        </li>
        <li className="uppercase font-semibold">
          <Link href="/#resume">resume</Link>
        </li>
        <li className="uppercase font-semibold">
          <Link href="/#contact">contact</Link>
        </li>
      </ul>

      <div className="lg:hidden cursor-pointer">
        <AiOutlineMenu size={25} />
      </div>
    </nav>
  );
}
