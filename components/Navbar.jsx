import React from 'react';

import { AiOutlineMenu } from 'react-icons/ai';

import Overlay from './Overlay';
import Navigation from './Navigation';
import Logo from './Logo';

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Logo />

        <div>
          <ul className="hidden md:flex">
            <Navigation />
          </ul>

          <div className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <Overlay />
    </div>
  );
};

export default Navbar;
