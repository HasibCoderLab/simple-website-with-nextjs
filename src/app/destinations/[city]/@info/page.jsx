'use client'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const {city}  = useParams()
  return (
    <div  className='w-[50%] mt-[100px] text-white'>
       {city}  is a very Beautiful
    </div>
  )
}

export default page