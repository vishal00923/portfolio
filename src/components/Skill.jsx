import Img from './Img';

export default function Skill({ img, name, textDecoration }) {
  return (
    <div className="flex items-center justify-between shadow-xl rounded-md p-5">
      <div className="w-[64px] h-[auto]">
        <Img src={img} alt={name} />
      </div>
      <span className={`${textDecoration} font-semibold`}>{name}</span>
    </div>
  );
}
