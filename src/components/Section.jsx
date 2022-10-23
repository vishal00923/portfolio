export default function Section({ name }) {
  return (
    <div className='flex flex-col items-center'>
      <h2 className='text-center tracking-[1.3px] text-3xl mb-12 uppercase xl:text-3xl'>
        {name}
      </h2>
      <span className='w-8 h-[5px] -mt-6 bg-[#4338CA] rounded-md'></span>
    </div>
  );
}
