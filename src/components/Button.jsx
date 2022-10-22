export default function Button({ children }) {
  return (
    <div className='flex justify-center mt-10 md:mt-10 lg:mt-12'>
      <button className='uppercase font-bold shadow-xl tracking-[1px] bg-[#4338ca] text-white px-8 py-4 rounded-[5px] active:scale-90 transition duration-150'>
        {children}
      </button>
    </div>
  );
}
