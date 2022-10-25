const tools = [
  'html',
  'css',
  'react js',
  'context api',
  'mui',
  'react router',
  'firebase',
];

export default function Tools() {
  return (
    <div className='flex items-center flex-wrap'>
      {tools.map((tool, idx) => (
        <div
          key={idx}
          className='bg-[#4338ca] text-white px-3 sm:px-5 md:px-8 lg:px-10 py-2 sm:uppercase rounded-[3px] font-[700] mb-5 mr-5 shadow-lg'
        >
          {tool}
        </div>
      ))}
    </div>
  );
}
