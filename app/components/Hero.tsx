import Image from "next/image";
import React from "react";

export default function Hero(){
  return (
    <div>
        <div className='text-center bg-gray-100 py-2'>
            <p className='text-lg'>Hello Nike App</p>
            <p className='text-gray-600'>Download the app to access everything Nike. <span className='text-black underline'>Get Your Great</span> </p>
        </div>

    <div className='flex justify-center px-10'>
    <Image src={'/hero.png'}
     alt='shoes banner'
    width={1200}
    height={600}
    />
    </div>

    <div className='text-center text-black mt-16'>
        <span className='font-semibold  text-base lg:text-xl'>First Look</span><br />

        <span className=' text-3xl lg:text-5xl font-semibold uppercase '>nike air max pulse</span><br /><br />

        <span>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br />
        —designed to push you past your limits and help you go to the max.</span><br />

        <button className="bg-blue-500 text-white py-2 px-4 rounded">Notify Me</button>
      <button className="bg-blue-500 text-white py-2 px-4 rounded">Shop Air Max</button>

    </div>
    </div>


  

  
  );
}
