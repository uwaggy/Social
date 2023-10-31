import { Icon } from '@iconify/react';
import "tailwindcss/base.css";
import  { useState } from 'react';
// import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png'
import profile from './assets/winking.jfif'

const Lesson = () => {
    const [open, setOpen] = useState(true)
    return (
        <div className='md:overflow-x-hidden overflow-hidden'>
            <div className='bg-sky-100  p-4 transform translate-x-11 translate-y-6 rounded-2xl md:w-11/12  w-4/5'>
                <div className=" text-sky-500 md:h-[7vh] relative	cursor-pointer flex flex-row gap-x-[18rem] ">
                    <div className='flex'>
                        <Icon onClick={() => setOpen(!open)} className='md:hidden w-40 font-bold cursor-pointer' icon="material-symbols:menu" width="40" color="skyblue" />
                        <img className='w-11 h-8' src={logo} alt='logo' />
                        <a className='font-bold hover:border-b-2  border-sky-600 flex items-center px-2 text-xl
          '>SOCIAL</a>
                    </div>
                    <div className={`min-h-full ${open ? 'invisible' : 'visible'} col-span-4 md:visible md:static absolute bg-sky-100 p-3 z-20 top-[8vh] left-[10vw] flex md:flex-row flex-col gap-4`}>
                        <Link to={'/'} className='font-bold  flex items-center px-2'>Home</Link>
                        <Link to={'/lesson'} className='font-bold  flex items-center px-2'>Lesson</Link>
                        <Link to={'/translate'} className='font-bold  flex items-center px-2'>Translate</Link>
                        <Link to={'/contact'} className='font-bold  flex items-center px-2'>Contact</Link>
                        <Link to={''} className='font-bold  flex items-center px-2'>Shop</Link>
                        <Link to={''} className='font-bold invisible md:visible sm:visible w-12  flex items-center'>Profile</Link>
                        <Link to={''} className='font-bold invisible md:visible sm:visible w-12  flex items-center'>Leaderboard</Link>
                    </div>
                </div>
            </div>

           
            <div className='md:flex-row flex-col md: flex gap-16 items-center md:translate-x-44'>
                <div className='flex flex-col gap-y-7 items-center translate-y-28'>
                    <div className='flex bg-sky-600 w-64 rounded-xl font-bold gap-14 justify-center items-center p-1 cursor-pointer  '>
                        <p>English</p>
                        <Icon icon="gridicons:dropdown" />
                    </div>
                    <div>
                        <textarea placeholder='Translate' className='w-72 h-36 rounded-xl border-2 border-sky-100'></textarea>
                    </div>
                </div>
                <Icon className='translate-y-16' icon="mdi:exchange" width="50" />
                <div className='flex flex-col gap-y-7 items-center translate-y-28'>
                    <div className='cursor-pointer flex bg-sky-600 w-64 rounded-xl font-bold gap-14 justify-center items-center p-1 '>
                        <p>Somali</p>
                        <Icon icon="gridicons:dropdown" />
                    </div>
                    <div>
                    <textarea placeholder="Geli Qoraalika" className='w-72 h-36 rounded-xl border-2 border-sky-100'><button className='w-20 h-4 bg-orange-600'>
                    <Icon icon="mdi:microphone" width="100" /></button>
      </textarea>
                    </div>
                </div>
            </div>
            <p className='absolute left-96 top-3/4 font-bold text-sky-400 '>3 prompts left for translating</p>
            <div className='md:flex-row flex-col flex gap-36 footer h-92 mt-72    bg-sky-200 '>
                <div className='flex gap-5'>
                    <img className='w-11 h-8' src={logo} alt='logo' />
                    <p className='font-bold flex text-xl
          '>SOCIAL</p>
                </div>
                <div className='w-64' >
                    <p className='hover:text-sky-800 cursor-pointer font-bold'>Resources</p>
                    <p className='py-4 hover:font-bold cursor-pointer text-sm'>Slack community</p>
                    <p className='py-4 hover:font-bold cursor-pointer text-sm'>Learn Center</p>
                    <p className='py-4  hover:font-bold cursor-pointer text-sm'>Support</p>
                    <p className='py-4  hover:font-bold cursor-pointer text-sm'>Terms of service</p>
                </div>
                <div className=' w-60'>
                    <p className=' hover:text-sky-800  cursor-pointer font-bold'>Product</p>
                    <p className='py-4 hover:font-bold cursor-pointer text-sm'>How it works</p>
                    <p className='py-4 hover:font-bold cursor-pointer text-sm'>Start for free</p>
                    <p className='py-4 hover:font-bold cursor-pointer text-sm'>Sign in</p>
                    <p className='py-4 hover:font-bold cursor-pointer text-sm'>Features</p>
                </div>
                <div className='w-60'>
                    <p className='hover:text-sky-800 cursor-pointer font-bold'>About</p>
                    <p className='py-4 hover:font-bold cursor-pointer text-sm'>Our story</p>
                    <p className='py-4 hover:font-bold cursor-pointer text-sm'>Blog</p>
                    <p className='py-4 hover:font-bold cursor-pointer text-sm'>Email us</p>
                </div>
                <div className='w-60'>
                    <p className='hover:text-sky-800 cursor-pointer font-bold'>Follow us</p>
                    <div className='py-7 flex gap-1'>
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

export default Lesson;
