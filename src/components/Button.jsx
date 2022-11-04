export default function Button({ children, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className='w-[200px] py-3 uppercase font-bold shadow-xl tracking-[1px] bg-[#4338ca] text-white rounded-[5px] active:scale-90 transition duration-150'
    >
      {children}
    </button>
  );
}
