'use client'
import { useParams } from 'next/navigation'
import React from 'react'
import parisImg from "@/assets/paris.jpg"
import tokyoImg from "@/assets/tokyo.jpg"
import nyImg from "@/assets/newWork.jpg"
import Image from 'next/image'

function Page() {
  const { city } = useParams();

  return (
    <div className="mt-[100px] text-white w-[50%]">
    Welcome to   {city} ! Discover amazing sights and culture here.
{

  city === "Paris" &&    <Image src={parisImg} alt='Paris' width={400} height={400}/>
}
{

  city === "Tokyo" &&    <Image src={tokyoImg} alt='Tokyo' width={400} height={400}/>
}
{

  city === "NewYork" &&    <Image src={nyImg} alt='NewYork' width={400} height={400}/>
}
    </div>
  );
}

export default Page;
