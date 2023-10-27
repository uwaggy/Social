import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import profile from './assets/winking.jfif'
import contact from './assets/contact3.jpg'
import logo from './assets/logo3.jpg'
const Contact = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [name, setName] = useState('');
    const [open, setOpen] = useState(true)
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className='overflow-hidden'>
            <div className=" text-sky-500 md:h-[7vh] relative md:invisible	cursor-pointer flex flex-row gap-x-[18rem] ">
                <div className='flex'>
                    <Icon onClick={() => setOpen(!open)} className='md:hidden w-40 font-bold cursor-pointer' icon="material-symbols:menu" width="40" color="skyblue" />
                    <img className=' w-10 h-10 rounded-3xl' src={logo} alt='logo' />
                    <a className='font-bold hover:border-b-2  border-sky-600 flex items-center px-2 text-xl
          '>SOCIAL</a>
                </div>
                <div className={`min-h-full ${open ? 'invisible' : 'visible'} col-span-4 md:invisible md:static absolute bg-sky-100 p-3 z-20 top-[8vh] left-[10vw] flex md:flex-row flex-col gap-4`}>
                    <Link to={''} className='font-bold  flex items-center px-2'>Home</Link>
                    <Link to={''} className='font-bold  flex items-center px-2'>Lesson</Link>
                    <Link to={''} className='font-bold  flex items-center px-2'>Translate</Link>
                    <Link to={'/contact'} className='font-bold  flex items-center px-2'>Contact</Link>
                    <Link to={''} className='font-bold  flex items-center px-2'>Subscribe</Link>
                    <Link to={''} className='font-bold invisible md:visible sm:visible w-12  flex items-center'>Profile</Link>

                    <span className='flex items-center px-3'>
                        <img className='rounded-2xl aspect-square h-[2rem] invisible md:invisible sm:visible' src={profile} alt='profile' />
                    </span>
                </div>
            </div>
            <div className=' transform translate-x-52 flex gap-60'>
                <div className='invisible md:visible font-bold cursor-pointer   gap-6 flex'>
                    <a>Home</a>
                    <div className='flex'>
                        <a>Products</a>
                        <Icon className='relative top-1' icon="mdi:menu-down" />
                    </div>
                    <div className='flex'>
                        <a>Resources</a>
                        <Icon className='relative top-1' icon="mdi:menu-down" />
                    </div>
                    <a>Pricing</a>
                </div>
                <div className='cursor-pointer flex gap-6'>
                    <p className='text-lg font-bold'>Login</p>
                    <button className='bg-sky-200 font-bold p-1 w-20 h-8 b-1 border-sky-200 rounded-lg'>Sign Up</button>
                </div>
            </div>
            <div className='md:flex-row flex-col gap-20 flex p-7'>
                <div className='font-semibold p-2'>
                    <p className='text-xl font-bold'>Get in touch</p>
                    <p className='font-bold'>Our friendly team would love to hear from you</p>
                    <label className='p-2' htmlFor="firstNameInput">First name:</label>
                    <input
                        className='p-1 mb-2 w-56 border-2 rounded-lg border-sky-200'
                        type="text"
                        id="firstNameInput"
                        name="First name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    /><br />
                    <label className='p-1 ' htmlFor="lastNameInput">Last name:</label>
                    <input
                        className='p-1 w-56 border-2 rounded-lg border-sky-200'
                        type="text"
                        id="lastNameInput"
                        name="Last name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    /><br />
                    <label htmlFor="firstNameInput">Email</label><br />
                    <input
                        className=' p-1 w-56 border-2 rounded-lg border-sky-200'
                        type="text"
                        id="firstNameInput"
                        name="First name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    /><br />
                    <label htmlFor="firstNameInput">Phone number</label><br />
                    <input
                        className='p-1 w-56 border-2 rounded-lg border-sky-200'
                        type="text"
                        id="firstNameInput"
                        name="First name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    /><br />

                    <label htmlFor="firstNameInput">Message</label><br />
                    <textarea className='w-72 h-24 border-2 border-sky-200'></textarea><br />
                    <label>
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        You agree to our friendly <span className='text-underline'>privacy policy</span><br />
                    </label><br />
                    <button className='bg-sky-300 w-72 p-2 rounded-xl'> Send message</button>
                </div>

                <div className=''>
                    <img className=' h-3/4	 transform translate-y-3 rounded-xl' src={contact} alt='contact ' />

                </div>
            </div>
            <div className='md:flex-row flex-col flex gap-36 footer h-92	 bg-sky-200 '>
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

export default Contact;
