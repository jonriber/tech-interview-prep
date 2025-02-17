import React from 'react';
import Image from 'next/image';
import buildPic from '../public/build.png';
export default function Page() {
  return(
    <>
      <h1>Next.js App</h1>
      <Image src={buildPic} alt="Building pic"/>
    </>
  )
}