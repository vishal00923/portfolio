import React, { Fragment } from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <Fragment>
      <Image
        src="/../public/assets/nav-logo.png"
        alt="Logo"
        width="80"
        height="50"
      />
    </Fragment>
  );
};

export default Logo;
