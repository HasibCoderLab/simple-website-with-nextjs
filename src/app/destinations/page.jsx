import React from 'react'

const page = () => {
  const destination = ["Paris" , "Tokyo" , "NewWork"];
  return (
    <div className=' h-full flex flex-col justify-center items-center gap-4 text-white  '>
      <div className=' font-bold  text-2xl'>
        Choose your Destinations
      </div>
      <div className=' flex  flex-col gap-4 '>
        {
          destination.map((d, index) => (
            <div
             key={index} className=' w-[200px] h-[100px] font-bold text-2xl bg-white text-black flex  justify-center items-center rounded-2xl'>
              {d}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default page