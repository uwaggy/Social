import profile from './assets/winking.jfif'
import background from './assets/back.jpg'
import account from './assets/translate.png'
import level from './assets/consult.avif'
import thinking from './assets/thinking.avif'
import start from './assets/support.avif'
import logo from './assets/logo3.jpg'
import witness2 from './assets/witness2.jpg'
import witness3 from './assets/witness3.jpg'
import "tailwindcss/base.css";
import { Icon } from '@iconify/react';
import { useState } from 'react'
const App = () => {
const[open,setOpen] = useState(true)

  return (
    <div className=' overflow-hidden'>
      <div className='bg-sky-100 w-11/12 p-4 transform translate-x-11 translate-y-6 rounded-2xl w-max '>
      <div className=" text-sky-500 md:h-[7vh] relative	cursor-pointer flex flex-row gap-x-[18rem] ">
       <div className='flex'>
        <Icon onClick={()=>setOpen(!open)} className='md:hidden w-40 font-bold cursor-pointer' icon="material-symbols:menu" width="40" color="skyblue" />
          <img className=' w-10 h-10 rounded-3xl' src={logo} alt='logo' />
          <a className='font-bold hover:border-b-2  border-sky-600 flex items-center px-2 text-xl
          '>SOCIAL</a>
        </div>
        <div className={`min-h-full ${open?'invisible':'visible'} col-span-4 md:visible md:static absolute bg-sky-100 p-3 z-20 top-[8vh] left-[10vw] flex md:flex-row flex-col gap-4`}>
          <a className='font-bold hover:border-b-2  border-sky-600 flex items-center px-2'>Home</a>
          <a className='font-bold  hover:border-b-2  border-sky-600 flex items-center px-2' >Lesson</a>
          <a className='font-bold  hover:border-b-2 border-sky-600 flex items-center px-2'>Translate</a>
          <a className='font-bold  hover:border-b-2  border-sky-600 flex items-center px-2'>Contact</a>
          <a className='font-bold  hover:border-b-2  border-sky-600 flex items-center px-2'>Subscribe</a>
          <a className='font-bold invisible md:visible sm:visible hover:border-b-2 w-12 border-sky-600 flex items-center'>Profile</a>
          <span className='flex items-center px-3'>
              <img className='rounded-2xl aspect-square h-[2rem] invisible md:visible sm:visible' src={profile} alt='profile' />
          </span>
        </div>
      </div>
      <div className='md:flex-row flex-col md:gap-72 flex gap-24 '>
        <div>
          <p className=' text-3xl font-semibold transform translate-x-16 translate-y-16 text-left '>The best way to learn<br /> or preactice a new<br /> language</p>
        </div>
        <div>
          <img className='rounded-xl  w-96 h-60' src={background} alt='background' />
        </div>
      </div>
      <div className='flex gap-7 items-center px-12  '>
        <button className='hover:bg-sky-600  bg-sky-300 p-1 rounded-r-lg rounded-l-lg text-white font-bold'>Enroll Now</button>
      </div>
      </div>
      <p className='font-bold text-xl text-center py-7 '>Our Services For</p>
      <p className='mx-auto w-2/5 text-center font-light text-base p-4'>We meticulously assess source material,gather resources,and consult with clients to prepare for accurate translations.</p>
      <div className='md:justify-center items-center flex gap-36 grid-row md:flex-row flex-col place-content-center md:place-content-center '>
        <div className='w-52 h-62 bg-sky-100 rounded-xl text-center '>
          <img className='w-40 relative left-5 top-1 h-36 rounded-2xl' src={account} alt='create' />
          <p className=' text-sm font-bold'>Language Translate </p>
          <p className='p-1 text-xs font-light'>We translate from English to Somali, bridging linguistic gaps and fostering understanding across cultures.</p>
        </div>
        <div className='w-52 h-56 bg-sky-100 rounded-xl text-center'>
          <img className='relative left-7 top-1 h-36 rounded-2xl' src={level} alt='create' />
          <p className='text-sm font-bold'>Language consultation</p>
          <p className='p-1 text-xs font-light'> We provide expert guidance and clarity in linguistic communication, ensuring effective cross-cultural understanding.</p>

        </div>
        <div className='w-52 h-56 bg-sky-100 rounded-xl text-center'>
          <img className='w-36  relative left-8 top-1 h-36 rounded-2xl' src={start} alt='create' />
          <p className='text-sm font-bold'>24/7 Customer Support</p>
          <p className='p-1 text-xs font-light'>We offer exceptional assistance and resolve queries, ensuring a seamless and responsive experience for all.</p>
        </div>
      </div>
      <div className='flex p-4 gap-24 md:flex-row flex-col'>
        <img className='w-64 h-64 transform translate-x-16 ' src={thinking} alt='thinking' />
        <div className='transform translate-x-20 '>
        <p className='text-lg font-bold w-3/5		'>Unlock the Potential of Language with Our Expertise.</p>
          <p className='w-3/5	 text-sm font-light p-2'><span className='font-bold'>• Proficient English-Somali Translation</span> We excel in bridging linguistic gaps, ensuring effective communication.<br/>
<span className='font-bold'>• Enhanced Cross-Cultural Understanding</span> Our expertise fosters cultural insights and seamless interaction.<br/>
<span className='font-bold'>• Empowering Communication </span>We enable meaningful exchanges across diverse backgrounds and regions.</p>
<button className='hover:bg-sky-600  bg-sky-300 p-1 rounded-r-lg rounded-l-lg text-white font-bold'>Learn More</button>
        </div>
      </div>
      <p className='font-bold text-lg  text-center p-5'>Our witnesses</p>
      <div className='grid md:grid-cols-5 sm:grid-col-7 grid-cols-1 '>
        <div className=' col-span-2 w-5/6 mx-auto pt-[3rem] grid grid-cols-2  '>
          <img className=' p-1 transform translate-x-20 rounded-xl' src={witness3} alt='witness' />
        </div>
        <div className=' col-span-3 p-10'>
          <div>
            <p className='mx-auto md:w-2/3	 text-center font-bold text-xl'>Outstanding service! "Social" delivered a lowless translation of our critical document. They were fast ,precise and professional. Highly recommended.</p>
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
      <div className='md:flex-row flex-col flex gap-36 p-4 footer h-92	 bg-sky-200'>
        <div className='flex gap-5'>
        <img className=' w-10 h-10 rounded-3xl' src={logo} alt='logo' />
          <p className='font-bold flex text-xl
          '>SOCIAL</p>
        </div>
        <div className='w-64' >
          <p className='hover:text-sky-800 cursor-pointer font-bold'>Resources</p>
          <p className='py-4 hover:font-bold cursor-pointer text-sm'>Slack community</p>
          <p className='py-4 hover:font-bold cursor-pointer text-sm'>Learn Center</p>
          <p className='py-4  hover:font-bold cursor-pointer text-sm'>Support</p>
          <p className='py-4  hover:font-bold cursor-pointer text-sm'>Events</p>
          <p className='py-4  hover:font-bold cursor-pointer text-sm'>Terms of service</p>
        </div>
        <div className='w-60'>
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

export default App;
