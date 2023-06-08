import Link from 'next/link'
import React from 'react'

const Button = ({text, url}) => {
  return (
    <Link href={url}>
    <button className='bg-[#53C28B] p-[20px] cursor-pointer rounded-[5px] border-none max-w-max  text-white'>{text}</button>
    </Link>
  )
}

export default Button