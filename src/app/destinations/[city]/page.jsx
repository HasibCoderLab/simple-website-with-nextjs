'use client'
import { useParams } from 'next/navigation'
import React from 'react'

function Page() {
  const { city } = useParams();

  return (
    <div className="mt-10 text-red-700">
      {city} is the beautiful city
    </div>
  );
}

export default Page;
