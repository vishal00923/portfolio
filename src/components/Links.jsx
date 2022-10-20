import Link from 'next/link';

export default function Links({ hidden, openSidebar, setOpenSidebar }) {
  return (
    <>
      <ul
        className={`${hidden} ${
          hidden.length === 0
            ? 'flex flex-col items-start space-y-8'
            : 'lg:flex space-x-16'
        }`}
      >
        <Li
          name='home'
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
        />
        <Li
          name='about'
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
        />
        <Li
          name='skills'
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
        />
        <Li
          name='projects'
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
        />
        <Li
          name='contact'
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
        />
      </ul>
    </>
  );
}

function Li({ name, openSidebar, setOpenSidebar }) {
  const handleCloseSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <li
      onClick={handleCloseSidebar}
      className='uppercase font-semibold hover:text-[#4338ca] transition-all duration-150 ease-in-out'
    >
      <Link href={`${name === 'home' ? '/' : `/#${name}`}`}>{name}</Link>
    </li>
  );
}
