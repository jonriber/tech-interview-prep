import React from 'react';
import Image from 'next/image';
import buildPic from '../public/build.png';
export default function Page() {
  let showExternalImg = false;
  return(
    <>
      <h1>Next.js App</h1>
      {/* {showExternalImg && <Image src="https://via.placeholder.com/150" alt="Placeholder" width={500} height={500}/>} */}
      <Image src={buildPic} alt="Building pic"/>
    </>
  )
}