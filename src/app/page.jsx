import Button from '@/components/Button/Button'
import Image from 'next/image'
import HeroImg from 'public/hero.png'

export default function Home() {
  return (
   <div className='flex items-center gap-[100px]'>
      <div className='flex-1 flex flex-col gap-[50px]'>
        <h1 className='text-[65px] font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#53C28B] to-[#bbb]  '>Better design for your digital products.</h1>
        <p className='text-[24px] font-light'>Turning your Idea into Reality. We bring together the team from the global tech industry</p>
        <Button text='See Our Works' url='/portfolio' />
      </div>
      <div>
        <Image src={HeroImg} alt='hero image' className='object-cover w-full'  />
      </div>
   </div>
  )
}
 