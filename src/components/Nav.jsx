"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Nav = () => {
   const pathName =  usePathname()
  return (
    <div className='w-full h-20 bg-white  flex justify-between items-center px-5'>
        <div>🌍 Travel Guide</div>
        <div>
            <ul className='flex justify-between items-center gap-5'>
                <Link href={"/"} className={pathName=="/" ? "text-red-600" : ""} ><li>Home</li></Link> 
                <Link href={"/destinations"}  className={pathName=="/destinations" ? "text-red-600" : ""}><li>Destinations  </li></Link> 
                <Link href={"/contact"}  className={pathName=="/contact" ? "text-red-600" : ""}><li>Contact </li></Link>                               
            </ul>
        </div>
    </div>
  )
}

export default Nav