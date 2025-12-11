'use client'
import { useParams } from 'next/navigation'
import React from 'react'

function Page() {
  const { city } = useParams();

  return (
    <div className="mt-[100px] text-white">
    Welcome to   {city} ! Discover amazing sights and culture here.
    </div>
  );
}

export default Page;
