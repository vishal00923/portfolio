import { useState } from 'react';

import Nav from './Nav';
import Banner from './Banner';
import Social from './Social';

export default function Header() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div
      style={{
        background: `url(
          'https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg'
        )`,
      }}
      className={`relative transition-all duration-400 ease-in lg:bg-[#ECF0F3] ${
        openSidebar && ' bg-black/70'
      }`}
    >
      <Nav openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <Banner />
      <Social />
    </div>
  );
}
