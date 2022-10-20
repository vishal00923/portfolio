import Image from 'next/image';

export default function Img({ src, alt }) {
  return (
    <>
      <Image
        className='mix-blend-multiply'
        src={src}
        alt={alt}
        layout='responsive'
        priority
      />
    </>
  );
}
