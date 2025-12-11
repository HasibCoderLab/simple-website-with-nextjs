"use client"
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter()
  const destination = ["Paris", "Tokyo", "NewYork"];

  return (
    <div className='h-full flex flex-col justify-center items-center gap-4 text-white'>
      <div className='font-bold text-2xl'>
        Choose your Destinations
      </div>
      <div className='flex flex-col gap-4'>
        {destination.map((d, index) => (
          <div
            key={index}
            className='w-[200px] h-[100px] cursor-pointer font-bold text-2xl bg-white text-black flex justify-center items-center rounded-2xl hover:opacity-75 transition-all'
            onClick={() => router.push(`/destinations/${d}`)}
          >
            {d}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page;
