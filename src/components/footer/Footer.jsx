import React from 'react';
import Image from 'next/image';





const footer = () => {
  return (
    <footer className='h-[50px] flex items-center justify-between'>
        <div className='text-[14px]'>@2023 Ogidibrown. All rights reserved.</div>
        <div className='flex gap-[10px] items-center'>
        <Image src='/img1.png' width={15} height={15} alt='facebook' className='opacity-60 cursor-pointer' />
        <Image src='/img2.png' width={15} height={15} alt='instagram' className='opacity-60 cursor-pointer' />
        <Image src='/img3.png' width={15} height={15} alt='linkdin' className='opacity-60 cursor-pointer' />
        <Image src='/img4.png' width={17} height={17} alt='youtube' className='opacity-60 cursor-pointer' />
        </div>
    </footer>
  )
}

export default footer