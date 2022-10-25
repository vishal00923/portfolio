import { useRouter } from 'next/router';
import { AiOutlineArrowUp } from 'react-icons/ai';

export default function TopNavigator({ route }) {
  const router = useRouter();

  const handleRouter = () => router.push(route);

  return (
    <div onClick={handleRouter} className='fixed right-5 bottom-5'>
      <button className='bg-[#0e00a7] p-2 shadow-2xl rounded-full outline-none border-none active:scale-90 transition-all duration-150'>
        <AiOutlineArrowUp size={22} color='#fff' />
      </button>
    </div>
  );
}
