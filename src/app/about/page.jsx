import React from 'react'
import Image from 'next/image'
import AboutImg from 'public/about.jpg';
import Button from '@/components/Button/Button';

const About = () => {
  return (
    <div className=''>
        <div className='w-full relative h-[300px]'>
            <Image src={AboutImg} alt='about image' fill={true} className='object-cover'  />
            <div className='absolute bottom-[20px] left-[20px] bg-[#53c28bc4] p-[5px] text-white '>
                <h1>Digital Storytellers</h1>
                <h2>Handcrafting award winning digital experience</h2>
            </div>
        </div>
        <div className='flex gap-4'>
            <div className='flex-1 text-justify  mt-[20px] gap-2'>
                <h1 className='font-bold text-2xl mb-2'>Who are We?</h1>
                <p>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat ratione nostrum sequi obcaecati iste enim in accusantium rerum ut,
                    quod, minus, accusamus officia harum! Explicabo provident ipsum iste ipsa repellat
                    <br/>
                    <br/>

                    ipsam iure adipisci itaque beatae porro provident eaque reprehenderit voluptas quam,
                    harum sit aspernatur pariatur quos sequi nostrum. Adipisci obcaecati natus delectus 
                </p>
            </div>
            <div className=' mt-[20px] flex-1 gap-2 text-justify' >
            <h1 className='font-bold text-2xl mb-2'>What We Do</h1>
                <p className='mb-[20px]'>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat ratione nostrum sequi obcaecati iste enim in accusantium rerum ut,
                    quod, minus
                    <br/>
                    <br/> -Dynamic Website
                    <br/> -Fast and Handy 
                    <br/> -Mobile Apps
                                
                </p>
                <Button text='Contact' url='/contact' className='' />
            </div>
        </div>
    </div>
  )
}

export default About