
import one from './assets/shop.png'
import logo from './assets/logo.png'
import "tailwindcss/base.css";
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { Icon } from '@iconify/react';
import SVG from './assets/heart.png'
import SVG2 from './assets/plate.png'
import lingots from './assets/lingots.png'
const shop = () => {
    const [open, setOpen] = useState(true)
    return (
        <div>
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

            <img className='translate-y-10' src={one} alt='one' />
            <p className='font-bold text-2xl absolute top-32 left-4'>Hey Agnes, </p>
            <p className='text-sky-600 text-lg font-semibold absolute top-44
left-4'>Refill Your Treasure Trove</p>

            <div className='flex p-4 -translate-y-44 translate-x-40 border-dashed border-4 border-black w-6/12 h-32'>
                <div className='flex-col '>
                    <img src={SVG} alt='svg' />
                    <img src={SVG2} alt='svg' />

                </div>
                <div className='flex-col '>
                    <div className='flex gap-6 px-16'>
                        <p className='font-bold'>Refill Hearts </p>
                        <button className='bg-green-800 font-bold text-white w-14 rounded-lg '>Get</button>
                    </div>
                    <p className='px-16 pt-4'>Get more hearts and worry less about the mistakes you make in your learning process</p>
                </div>
            </div>
            <div className='flex p-4 -translate-y-32 translate-x-40 border-dashed border-4 border-black w-6/12 h-32'>
                <div className='flex-col '>
                    <img src={lingots} alt='svg' />

                </div>
                <div className='flex-col '>
                    <div className='flex gap-6 px-16'>
                        <p className='font-bold'>Refill lingots </p>
                        <button className='bg-green-800 font-bold text-white w-14 rounded-lg '>Get</button>
                    </div>
                    <p className='px-16 pt-4'>Keep earning those lingots and watch your language skills grow stronger and faster.</p>
                </div>
            </div>
            <p className='font-bold text-sky-600 text-xl absolute bottom-1 left-5'>Purchase Lessons</p>
            <div className='flex gap-8 p-2'>
                <div className='w-52 h-56  rounded-lg  bg-gray-200'>
                    <div className='bg-gray-500 w-52 h-32'></div>
                    <p>Lesson Title</p>
                    <div className='flex gap-3'>
                        <div className='flex'>
                            <Icon icon="material-symbols:star" color="black" width="16" />
                            <Icon icon="material-symbols:star" color="black" width="16" />
                            <Icon icon="material-symbols:star" color="black" width="16" />
                            <Icon icon="material-symbols:star-outline" color="black" width="16" />
                            <p className='text-sm'>4.5 rate</p>
                        </div>
                        <p className='text-sm font-bold'>192 leaners</p>
                    </div>
                    <p>Professor Sam</p>

                    <button>Get Now</button>
                </div>
                <div className='w-52 h-56   rounded-lg bg-gray-200'>
                    <div className='bg-gray-500 w-52 h-32'></div>
                    <p>Lesson Title</p>
                    <div className='flex gap-3'>
                        <div className='flex'>
                            <Icon icon="material-symbols:star" color="black" width="16" />
                            <Icon icon="material-symbols:star" color="black" width="16" />
                            <Icon icon="material-symbols:star" color="black" width="16" />
                            <Icon icon="material-symbols:star-outline" color="black" width="16" />
                            <p className='text-sm'>4.5 rate</p>
                        </div>
                        <p className='text-sm font-bold'>192 leaners</p>
                    </div>
                    <p>Professor Sam</p>

                    <button>Get Now</button>
                </div>

                <div className='w-52 h-56    bg-gray-200'>
                    <div className='bg-gray-500 w-52 h-32'></div>
                    <p>Lesson Title</p>
                    <div className='flex gap-3'>
                        <div className='flex'>
                            <Icon icon="material-symbols:star" color="black" width="16" />
                            <Icon icon="material-symbols:star" color="black" width="16" />
                            <Icon icon="material-symbols:star" color="black" width="16" />
                            <Icon icon="material-symbols:star-outline" color="black" width="16" />
                            <p className='text-sm'>4.5 rate</p>
                        </div>
                        <p className='text-sm font-bold'>192 leaners</p>
                    </div>
                    <p>Professor Sam</p>

                    <button>Get Now</button>
                </div>
                <div className='w-52 h-56    bg-gray-200'>
                    <div className='bg-gray-500 w-52 h-32'></div>
                    <p>Lesson Title</p>
                    <div className='flex gap-3'>
                        <div className='flex'>
                            <Icon icon="material-symbols:star" color="black" width="16" />
                            <Icon icon="material-symbols:star" color="black" width="16" />
                            <Icon icon="material-symbols:star" color="black" width="16" />
                            <Icon icon="material-symbols:star-outline" color="black" width="16" />
                            <p className='text-sm'>4.5 rate</p>
                        </div>
                        <p className='text-sm font-bold'>192 leaners</p>
                    </div>
                    <p>Professor Sam</p>

                    <button>Get Now</button>
                </div>

                <div className='w-52 h-56    bg-gray-200'>
                    <div className='bg-gray-500 w-52 h-32'></div>
                    <p>Lesson Title</p>
                    <div className='flex gap-3'>
                        <div className='flex'>
                            <Icon icon="material-symbols:star" color="black" width="16" />
                            <Icon icon="material-symbols:star" color="black" width="16" />
                            <Icon icon="material-symbols:star" color="black" width="16" />
                            <Icon icon="material-symbols:star-outline" color="black" width="16" />
                            <p className='text-sm'>4.5 rate</p>
                        </div>
                        <p className='text-sm font-bold'>192 leaners</p>
                    </div>
                    <p>Professor Sam</p>

                    <button>Get Now</button>
                </div>


            </div>

        </div>


    )
}
export default shop