import profile from './assets/winking.jfif'
import background from './assets/back.jpg'
import account from './assets/account.jpg'
import level from './assets/level.avif'
import thinking from './assets/thinking.avif'
import start from './assets/start.avif'
import logo from './assets/logo3.jpg'
import witness1 from './assets/witness1.jpg'
import witness2 from './assets/witness2.jpg'
import witness3 from './assets/witness3.jpg'
import "tailwindcss/base.css";
import { Icon } from '@iconify/react';
import { useState } from 'react'
const App = () => {
const[open,setOpen] = useState(true)

  return (
    <div className=' overflow-hidden'>
      <div className=" text-sky-500 md:h-[7vh] relative	cursor-pointer flex flex-row gap-x-[18rem] ">
       <div className='flex'>
        <Icon onClick={()=>setOpen(!open)} className='md:hidden w-40 font-bold cursor-pointer' icon="material-symbols:menu" width="40" color="skyblue" />
          <img className='w-12 h-12 rounded-2xl' src={logo} alt='logo' />
          <h1 className='text-2xl font-bold p-2'>Social</h1>
        </div>
        <div className={`min-h-full ${open?'invisible':'visible'} col-span-4 md:visible md:static absolute bg-white  z-20 top-[8vh] left-[10vw] flex md:flex-row flex-col gap-4`}>
          <a className='font-bold hover:border-b-2  border-sky-600 flex items-center px-2'>Home</a>
          <a className='font-bold  hover:border-b-2  border-sky-600 flex items-center px-2' >Lesson</a>
          <a className='font-bold  hover:border-b-2 border-sky-600 flex items-center px-2'>Translate</a>
          <a className='font-bold  hover:border-b-2  border-sky-600 flex items-center px-2'>Contact</a>
          <a className='font-bold  hover:border-b-2  border-sky-600 flex items-center px-2'>Subscribe</a>
          <a className='font-bold invisible md:visible sm:visible hover:border-b-2 w-12 border-sky-600 flex items-center'>Profile</a>
          <span className='flex items-center px-3'>
              <img className=' aspect-square h-[2rem] invisible md:visible sm:visible' src={profile} alt='profile' />
          </span>
        </div>
      </div>
      <div className='md:flex-row flex-col md:gap-72 flex gap-24 '>
        <div>
          <p className=' text-3xl font-semibold transform translate-x-16 translate-y-16 text-left '>The best way to learn<br /> or preactice a new<br /> language</p>
        </div>
        <div>
          <img className='w-96 h-60' src={background} alt='background' />
        </div>
      </div>
      <div className='flex gap-7 items-center transform  translate-x-24  '>
        <button className='hover:bg-sky-600  bg-sky-300 p-1 rounded-r-lg rounded-l-lg text-white font-bold'>Enroll Now</button>
        <p className='hover:text-sky-300 font-bold cursor-pointer'>Learn More</p>
      </div>
      <p className='font-bold text-lg text-center p-5 '>How do l get started?</p>
      <div className='md:justify-center items-center flex gap-20 grid-row md:flex-row flex-col place-content-center md:place-content-center '>
        <div className='w-40 h-44 bg-sky-100 rounded-xl text-center '>
          <img className='relative left-2 top-1 h-36 rounded-2xl' src={account} alt='create' />
          <p className=' text-base font-semibold'>Create an account</p>
        </div>
        <div className='w-40 h-44 bg-sky-100 rounded-xl text-center'>
          <img className='relative left-2 top-1 h-36 rounded-2xl' src={level} alt='create' />
          <p className='text-base font-semibold'>Learn you level</p>
        </div>
        <div className='w-40 h-44 bg-sky-100 rounded-xl text-center'>
          <img className='relative left-2 top-1 h-36 rounded-2xl' src={start} alt='create' />
          <p className='text-base font-semibold'>Ready to start</p>
        </div>
      </div>
      <p className='font-bold text-lg  text-center p-5'>What makes us different</p>
      <p className='mx-auto	text-sky-500 text-lg font-bold text-center md:w-3/5 '>Explore our extraordinary approach to Somalian language teaching, Where the harmonious blend of modern learning methods and cherished Somali traditions nurtures a profound affintiy of this captivating language.</p>
      <div className='flex gap-x-96 p-4 md:flex-row flex-col'>
        <div className='flex-row gap-2 transform translate-x-12 p-5'>
          <p className='text-lg font-bold p-2' >Translate now for instant<br /> communication</p>
          <div className='bg-sky-200 w-60 h-32 rounded-lg p-1'>
            <p className='font-bold text-base p-4'> Halkan kaa caawino inaad fikirrada wada waddo.</p>
            <button className='bg-sky-500 text-white p-1 font-bold relative left-8 rounded-lg hover:bg-sky-600'>Learn more for free</button>
          </div>
        </div>
        <img className='w-64 h-60' src={thinking} alt='thinking' />
      </div>
      <p className='font-bold text-lg  text-center p-5'>Our witnesses</p>
      <div className='grid md:grid-cols-5 sm:grid-col-7 grid-cols-1 '>
        <div className=' col-span-2 w-5/6 mx-auto pt-[3rem] grid grid-cols-2  '>
          <img className='transform -rotate-45 rounded-xl' src={witness1} alt='witness' />
          <img className=' transform -rotate-4 rounded-xl' src={witness3} alt='witness' />
        </div>
        <div className=' col-span-3 p-10'>
          <div>
            <p className='mx-auto md:w-3/5 text-center font-bold text-xl'>Outstanding service! "Social" delivered a lowless translation of our critical document. They were fast ,precise and professional. Highly recommended.</p>
          </div>
          <div className=' flex justify-center p-5'>
            <div>
              <img className='w-12 h-12 rounded-full' src={witness2} alt='witness' />
            </div>
            <div className='p-1 cursor-pointer hover:text-sky-400 items-center'>
              <p className='font-bold text-sm'>Maya Angele</p>
              <p className='font-bold text-sm'>Our witness</p>
            </div>
          </div>
        </div>
      </div>
      <div className='md:flex-row flex-col flex gap-16 p-4 footer bg-sky-200'>
        <div>
          <textarea className=' w-64 h-20 border-2 border-black ' />
          <div className='flex gap-7'>
            <p className='font-bold'>Enter your comment</p>
            <button className='hover:bg-sky-600  bg-sky-300 p-1 rounded-r-lg rounded-l-lg font-bold'>Subscribe</button>
          </div>
        </div>
        <div >
          <p className='hover:text-sky-800 cursor-pointer font-bold'>Resources</p>
          <p className=' hover:font-bold cursor-pointer text-sm'>Slack community</p>
          <p className='hover:font-bold cursor-pointer text-sm'>Learn Center</p>
          <p className='hover:font-bold cursor-pointer text-sm'>Support</p>
        </div>
        <div>
          <p className='hover:text-sky-800  cursor-pointer font-bold'>Product</p>
          <p className=' hover:font-bold cursor-pointer text-sm'>How it works</p>
          <p className=' hover:font-bold cursor-pointer text-sm'>Start for free</p>
          <p className=' hover:font-bold cursor-pointer text-sm'>Sign in</p>
        </div>
        <div>
          <p className='hover:text-sky-800 cursor-pointer font-bold'>About</p>
          <p className=' hover:font-bold cursor-pointer text-sm'>Our story</p>
          <p className=' hover:font-bold cursor-pointer text-sm'>Blog</p>
          <p className=' hover:font-bold cursor-pointer text-sm'>Email us</p>
        </div>
        <div>
          <p className='hover:text-sky-800 cursor-pointer font-bold'>Follow us</p>
          <div className='flex'>
          <p className=' hover:font-bold cursor-pointer text-sm'><Icon icon="ic:sharp-facebook" color="black" width="24" /></p>
          <p className=' hover:font-bold cursor-pointer text-sm'><Icon icon="simple-icons:x" color="black" width="24" /></p>
          <p className=' hover:font-bold cursor-pointer text-sm'><Icon icon="ri:instagram-fill" color="black" width="24" /></p>
          <p className=' hover:font-bold cursor-pointer text-sm'><Icon icon="mdi:linkedin" color="black" width="24" /></p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
