import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className='w-full h-20 bg-white  flex justify-between items-center px-5'>
        <div>🌍 Travel Guide</div>
        <div>
            <ul className='flex justify-between items-center gap-5'>
                <Link href={"/"}><li>Home</li></Link> 
                <Link href={"/about"}><li>Destination  </li></Link> 
                <Link href={"/contact"}><li>Contact </li></Link>                               
            </ul>
        </div>
    </div>
  )
}

export default Nav