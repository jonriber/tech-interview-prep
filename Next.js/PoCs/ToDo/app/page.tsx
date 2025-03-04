import React from 'react';
import Image from 'next/image';
import buildPic from '../public/build.png';
export default function Page() {
  let showExternalImg = false;

  async function serverFunctionSample(){
    'user server';
    console.log('This is a server function');
    return 'Server function executed';  
  }

  
  return(
    <>
      <h1 className='text-3xl font-bold underline'>Next.js App</h1>
      {/* {showExternalImg && <Image src="https://via.placeholder.com/150" alt="Placeholder" width={500} height={500}/>} */}
      <Image src={buildPic} alt="Building pic"/>
    </>
  )
}