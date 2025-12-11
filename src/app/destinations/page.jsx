import React from 'react'

const page = () => {
  const destination = ["Paris , Tokyo , NewWork"];
  return (
    <div className=' h-full flex justify-center items-center text-white '>
      <div className=' font-bold  text-2xl'>
        Choose your Destinations
      </div>
      <div>
        {
          destination.map((d, index) => {
            <div key={index}>
              {d}
            </div>
          })
        }
      </div>
    </div>
  )
}

export default page