import React, { Fragment } from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <Fragment>
      <Link href="/">
        <li className="ml-10 text-sm hover:border-b-black uppercase">Home</li>
      </Link>
      <Link href="/about">
        <li className="ml-10 text-sm hover:border-b uppercase">About</li>
      </Link>
      <Link href="/skills">
        <li className="ml-10 text-sm hover:border-b uppercase">Skills</li>
      </Link>
      <Link href="/projects">
        <li className="ml-10 text-sm hover:border-b uppercase">Projects</li>
      </Link>
      <Link href="/contact">
        <li className="ml-10 text-sm hover:border-b uppercase">Contact</li>
      </Link>
    </Fragment>
  );
};

export default Navigation;
