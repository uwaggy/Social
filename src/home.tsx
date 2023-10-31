import profile from './assets/winking.jfif'
import account from './assets/translate.png'
import level from './assets/consult.avif'
import start from './assets/support.avif'
import logo from './assets/logo.png'
import "tailwindcss/base.css";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useState } from 'react'
const Home = () => {
    const [open, setOpen] = useState(true)

    return (
        <div className=' overflow-hidden'>
            <div className='bg-sky-100  p-4 transform translate-x-11 translate-y-6 rounded-2xl md:w-11/12  w-10/12'>
                <div className=" text-sky-500 md:h-[7vh] relative	cursor-pointer flex flex-row gap-x-[18rem] ">
                    <div className='flex'>
                        <Icon onClick={() => setOpen(!open)} className='md:hidden w-40 font-bold cursor-pointer' icon="material-symbols:menu" width="40" color="skyblue" />
                        <img className='w-11 h-8' src={logo} alt='logo' />
                        <a className='font-bold hover:border-b-2  border-sky-600 flex items-center px-2 text-xl
          '>SOCIAL</a>
                    </div>
                    <div className={`min-h-full ${open ? 'invisible' : 'visible'} col-span-4 md:visible md:static absolute bg-sky-100 p-3 z-20 top-[8vh] left-[10vw] flex md:flex-row flex-col gap-4`}>
                        <Link to={'/'} className='font-bold  flex items-center px-2'>Home</Link>
                        <Link to={'/Lesson'} className='font-bold  flex items-center px-2'>Lesson</Link>
                        <Link to={'/translate'} className='font-bold  flex items-center px-2'>Translate</Link>
                        <Link to={'/contact'} className='font-bold  flex items-center px-2'>Contact</Link>
                        <Link to={'/shop'} className='font-bold  flex items-center px-2'>Shop</Link>
                        <Link to={''} className='font-bold invisible md:visible sm:visible w-12  flex items-center'>Profile</Link>
                        <Link to={''} className='font-bold invisible md:visible sm:visible w-12  flex items-center'>Leaderboard</Link>
            
                    </div>
                </div>
                <div className='h-48 md:flex-row flex-col md:gap-72 flex gap-24 '>
                    <div>
                        <p className=' text-3xl font-semibold transform translate-x-16 translate-y-16 text-left '>The best way to learn<br /> or preactice a new<br /> language</p>
                    </div>
                </div>
                <div className='flex gap-7 items-center px-12  '>
                    <button className=' hover:bg-sky-600  bg-sky-300 p-2 rounded-r-lg rounded-l-lg text-white font-bold '>Enroll Now</button>
                </div>
            </div>
            <p className='font-bold text-2xl text-center  p-8 '>Our Services For</p>
            <p className='mx-auto w-2/5 text-center text-lg font-light p-4'>We meticulously assess source material,gather resources,and consult with clients to prepare for accurate translations.</p>
            <div className='md:justify-center items-center flex gap-36 grid-row md:flex-row flex-col place-content-center md:place-content-center '>
                <div className='w-64 h-62 bg-sky-200 rounded-xl text-center '>
                    <img className='w-40 relative left-12 top-3 h-36 rounded-2xl' src={account} alt='create' />
                    <p className=' text-sm font-bold p-5'>Language Translate </p>
                    <p className='p-3 text-xs font-light'>We translate from English to Somali, bridging linguistic gaps and fostering understanding across cultures.</p>
                </div>
                <div className='w-64 h-68 bg-sky-200 rounded-xl text-center'>
                    <img className='relative left-12 top-3 h-36 rounded-2xl' src={level} alt='create' />
                    <p className='text-sm font-bold  p-5'>Language consultation</p>
                    <p className='p-3 text-xs font-light'> We provide expert guidance and clarity in linguistic communication, ensuring effective cross-cultural understanding.</p>

                </div>
                <div className='w-64 h-68 bg-sky-200 rounded-xl text-center'>
                    <img className='w-36  relative left-12 top-3 h-36 rounded-2xl' src={start} alt='create' />
                    <p className='text-sm font-bold  p-5'>24/7 Customer Support</p>
                    <p className='p-3 text-xs font-light'>We offer exceptional assistance and resolve queries, ensuring a seamless and responsive experience for all.</p>
                </div>
            </div>
            <p className='font-bold text-2xl text-center  p-10 '>How much do l have to pay? </p>
            <div className='md:justify-center items-center flex gap-28 grid-row md:flex-row flex-col place-content-center md:place-content-center '>
                <div className=' bg-sky-200 text-sm w-72 p-7 rounded-xl h-80'>
                    <p className=' text-lg   font-bold p-3'>Buying lingots </p>
                    <p className='p-1'>Small or large, your donations and purchases make a difference.</p>
                    <h3 className='font-bold p-1'>Lingot Options</h3>
                    <ul className='p-2'>
                        <li>$10 Lingots</li>
                        <li>$25 Lingots</li>
                        <li>$50 Lingots</li>
                        <li>$100 Lingots</li>

                    </ul>

                    <a className='font-bold p-1' href="#donate-section">Get Your Lingots</a>

                </div>
                <div className=' bg-sky-200 text-sm  p-5 w-72 rounded-xl h-80'>
                    <p className=' text-lg font-bold p-3'>Donations </p>
                    <p>Your generosity is greatly appreciated, and your choice of donation amount can have a significant impact.</p>
                    <h3 className='font-bold p-2'>Donation Options</h3>
                    <ul className='p-2'>
                        <li>$10 Donation</li>
                        <li>$25 Donation</li>
                        <li>$50 Donation</li>
                        <li>$100 Donation</li>

                    </ul>

                    <a className='font-bold p-2' href="#donate-section">Make a Donation</a>
                </div>
                <div className='text-sm bg-sky-200 p-6 w-72 rounded-xl h-80'>
                    <p className=' text-lg font-bold p-1'>Buying hearts </p>
                    <p>Show your appreciation with $1 blue hearts – buy more, share more love.</p>
                    <h3 className='font-bold p-2'>Special Offers</h3>
                    <ul className='p-2'>
                        <li>10 Blue Hearts - $9 (Save $1)</li>
                        <li>25 Blue Hearts - $20 (Save $5)</li>
                        <li>50 Blue Hearts - $35 (Save $15)</li>
                    </ul>
                    <a className='font-bold p-3' href="#purchase-section">Buy Blue Hearts Now</a>
                </div>
            </div>
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

    );
}

export default Home;