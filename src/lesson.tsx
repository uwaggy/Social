import logo from './assets/logo.png'
import "tailwindcss/base.css";
import { Link } from 'react-router-dom';
import eclipse1 from './assets/first.png'
import eclipse2 from './assets/second.png'
import vector from './assets/vector(2).png'
import ani1 from './assets/ani1.png'
import ani2 from './assets/ani2.png'
import ani3 from './assets/ani3.png'
import { useState } from 'react'
import { Icon } from '@iconify/react';
const Lesson = () => {
    const [open, setOpen] = useState(true)
    return (
        <div className='md:overflow-x-hidden overflow-hidden'>
            <div className='bg-sky-100  p-4  md:translate-x-11 translate-y-6 rounded-xl md:w-11/12 w-4/5 translate-x-12	'>
                <div className=" text-sky-500 md:h-[7vh] relative	cursor-pointer flex flex-row gap-x-[16rem] ">
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
                        <Link to={'/shop'} className='font-bold  flex items-center px-2'>Shop</Link>
                        <Link to={''} className='font-bold invisible md:visible sm:visible w-12  flex items-center'>Profile</Link>
                        <Link to={''} className='font-bold invisible md:visible sm:visible w-12  flex items-center'>Leaderboard</Link>
                        
                    </div>
                </div>
            </div>

            <div>
                <img className='md:w-max md:h-4/5 h-96 w-max md:translate-y-24 translate-y-16' src={eclipse1} alt='eclipse' />
              
            </div>
            <div className='cursor-pointer flex md:gap-20 -translate-y-64 gap-2  md:-translate-y-96
            md:translate-x-20 text-white' >
                <div className='md:w-60 md:h-10 w-48 h-9 text-base bg-sky-300 p-2 font-bold rounded-xl'>
                   <p>Unit 1: Greetings</p>
                   <img className='w-20 h-20  translate-x-28 -translate-y-24' src={ani1} alt='animal'/>   
                </div>
                <div className='w-24 bg-sky-300 p-2 font-bold rounded-xl'>
                    <p className='flex gap-2 items-center'>Start <Icon className="" icon="mdi:chevron-double-right" width="20" /></p>
                </div>

            </div>

            <div className='cursor-pointer flex md:gap-96 translate-x-5 md:-translate-y-80  text-white -translate-y-56 gap-44 ' >
                <div className='w-24 text-base bg-sky-600 p-2 font-bold rounded-xl'>
                    <p>Topic 1</p>
                </div>
                <div className='w-24 bg-sky-600 p-2 font-bold rounded-xl'>
                    <p className='flex gap-2 items-center'>Topic 3</p>
                </div>

            </div>
          
            <div className='cursor-pointer flex md:gap-72 md:translate-x-80 md:-translate-y-80 -translate-y-44 translate-x-40 gap-32 text-white' >
                <div className='w-24 text-base bg-sky-300 p-2 font-bold rounded-xl'>
                    <p>Topic 2</p>
                </div>
                <div className='w-24 bg-sky-300 p-2 font-bold rounded-xl'>
                    <p className='flex gap-2 items-center'>Topic 4</p>
                </div>
            </div>
            <div className='translate-y-60'>
                <div className='cursor-pointer flex  h-14 md:gap-12  -translate-y-80 md:translate-x-20 gap-2 text-white' >
                    <div className='md:w-60 text-center md:h-10 w-32 text-base bg-sky-300 p-2 font-bold rounded-xl'>
                        <p>Unit 2: Present Tense</p>  <img className='w-20 h-20 md:-translate-y-24 -translate-y-32' src={ani2} alt='animal'/>  
                    </div>
                    <div className='w-44 bg-sky-300 p-2 font-bold rounded-xl'>
                        <p className='flex gap-2 items-center'>Jump to here <Icon icon="game-icons:water-splash" color="white" width="20" /></p>
                    </div>

                </div>

                <div className='cursor-pointer flex md:gap-96 md:translate-x-16 md:-translate-y-60 -translate-y-72 gap-24 translate-x-2  text-white' >
                    <div className='w-24 text-base bg-sky-600 p-2 font-bold rounded-xl'>
                        <p>Topic 1</p>
                    </div>
                    <div className='w-24 bg-sky-600 p-2 font-bold rounded-xl'>
                        <p className='flex gap-2 items-center'>Topic 3</p>
                    </div>

                </div>

                <div className='cursor-pointer flex md:gap-96 md:translate-x-96 md:-translate-y-52 -translate-y-72 gap-20 translate-x-24  text-white' >
                    <div className='w-24 text-base bg-sky-300 p-2 font-bold rounded-xl'>
                        <p>Topic 2</p>
                    </div>
                    <div className='w-24 bg-sky-300 p-2 font-bold rounded-xl'>
                        <p className='flex gap-2 items-center'>Topic 4</p>
                    </div>
                </div>
                <div className='cursor-pointer flex md:gap-96 md:translate-x-16 md:-translate-y-32 gap-36 -translate-y-64 text-white' >
                    <div className='w-24 text-base bg-sky-600 p-2 font-bold rounded-xl'>
                        <p>Topic 5</p>
                    </div>
                    <div className='w-24 bg-sky-600 p-2 font-bold rounded-xl'>
                        <p className='flex gap-2 items-center'>Topic 6</p>
                    </div>

                </div>
            </div>
            <div>
                <img className='w-max h-1/4	md:translate-y-24' src={eclipse2} alt='eclipse' />

                <div className='-translate-y-64'>
                    <div className='cursor-pointer flex md:gap-12 gap-5 md:-translate-y-72 md:translate-x-20 text-white' >
                        <div className='md:w-60 w-48 h-10 text-base bg-sky-300 p-2 font-bold rounded-xl'>
                            <p>Unit 3: Past Tense</p> 
                            <img className='w-16 h-15 -translate-y-24 translate-x-32 ' src={ani3} alt='animal'/> 
                        </div>
                        <div className='w-44 bg-sky-300 p-2 font-bold rounded-xl'>
                            <p className='flex gap-2 items-center'>Jump to here <Icon icon="game-icons:water-splash" color="white" width="20" /></p>
                        </div>

                    </div>

                    <div className='cursor-pointer flex md:gap-96 translate-x-16 md:-translate-y-60 p-2 gap-24  text-white' >
                        <div className='w-24 text-base bg-sky-600 p-2 font-bold rounded-xl'>
                            <p>Topic 1</p>
                        </div>
                        <div className='w-24 bg-sky-600 p-2 font-bold rounded-xl'>
                            <p className='flex gap-2 items-center'>Topic 3</p>
                        </div>

                    </div>

                    <div className='cursor-pointer flex md:gap-96 md:translate-x-96 md:-translate-y-52 gap-20  text-white' >
                        <div className='w-24 text-base bg-sky-300 p-2 font-bold rounded-xl'>
                            <p>Topic 2</p>
                        </div>
                        <div className='w-24 bg-sky-300 p-2 font-bold rounded-xl'>
                            <p className='flex gap-2 items-center'>Topic 4</p>
                        </div>
                    </div>
                    <div className='cursor-pointer flex md:gap-96 gap-32 md:translate-x-16 md:-translate-y-32 translate-y-3 translate-x-16 text-white' >
                        <div className='w-24 text-base bg-sky-600 p-2 font-bold rounded-xl'>
                            <p>Topic 5</p>
                        </div>
                        <div className='w-24 bg-sky-600 p-2 font-bold rounded-xl'>
                            <p className='flex gap-2 items-center'>Topic 6</p>
                        </div>

                    </div>
                    <div className='cursor-pointer flex md:gap-96 md:translate-x-96 md:-translate-y-16 translate-y-7 gap-20  text-white' >
                        <div className='w-24 text-base bg-sky-300 p-2 font-bold rounded-xl'>
                            <p>Topic 7</p>
                        </div>
                        <div className='w-24 bg-sky-300 p-2 font-bold rounded-xl'>
                            <p className='flex gap-2 items-center'>Topic 8</p>
                        </div>
                    </div>
                </div>
            </div>

<p className='font-semibold text-center md:text-xl md:w-60 md:translate-x-96 w-52 translate-x-24 md:-translate-y-16 -translate-y-36  text-sky-700 items-center'>First Complete All lessons To unlock a new League</p>
<img className='md:w-4/6 w-3/4 -translate-y-20	 md:translate-x-40 ' src={vector} alt='vector' />
<div className='md:flex-row flex-col flex gap-36 footer h-92	 bg-sky-200 mt-20 '>
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

    )

}
export default Lesson;