import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/logo.png'

const Links =[
    {
        id: 1,
        title: "Home",
        url:"/"
    },
    {
        id: 2,
        title: "Portfolio",
        url:"/portfolio"
    },
    {
        id: 2,
        title: "Blog",
        url:"/blog"
    },
    {
        id: 4,
        title: "About",
        url:"/about"
    },
    {
        id: 5,
        title: "Contact",
        url:"/contact"
    },
    {
        id: 6,
        title: "Dashboard",
        url:"/dashboard"
    },
];


const footer = () => {
  return (
    <nav className='h-[100px] flex justify-between items-center'>
        <Link href="/" ><Image src={Logo} width={120} height={100} /></Link>
        <div className='flex items-center gap-[20px]'>
            {Links.map((link)=>(
                <Link href={link.url}>{link.title}</Link>
            ))}
            <button className='p-[5px] border-none bg-[#53c28b] text-white rounded-[3px]'>Logout</button>
        </div>
    </nav>
  )
}

export default footer