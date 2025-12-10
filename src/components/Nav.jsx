import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className='w-full h-20 bg-white'>
        <div>🌍 Travel Guide</div>
        <div>
            <ul>
                <Link href={"/"}><li>Home</li></Link> 
                <Link href={"/about"}><li>About </li></Link> 
                <Link href={"/contact"}><li>Contact </li></Link>                               
            </ul>
        </div>
    </div>
  )
}

export default Nav