import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import profile from './assets/winking.jfif'
import contact from './assets/final.avif'
import logo from './assets/logo.png'
const Contact = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [open, setOpen] = useState(true)
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    const [Firstname, setFirstname] = useState('');
    const [Lastname, setLastname] = useState('');
    const [Email, setEmail] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [Message, setMessage] = useState('');
    return (
        <div className=' bg-sky-100 overflow-hidden'>

            <div className=" text-sky-500 md:h-[7vh] relative md:invisible	cursor-pointer flex flex-row gap-x-[18rem] ">
                <div className='flex'>
                    <Icon onClick={() => setOpen(!open)} className='md:hidden w-40 font-bold cursor-pointer' icon="material-symbols:menu" width="40" color="skyblue" />
                    <img className='w-10 h-8' src={logo} alt='logo' />
                    <a className='font-bold hover:border-b-2  border-sky-600 flex items-center px-2 text-xl
          '>SOCIAL</a>
                </div>
                <div className={`min-h-full ${open ? 'invisible' : 'visible'} col-span-4 md:invisible md:static absolute bg-sky-100 p-3 z-20 top-[8vh] left-[10vw] flex md:flex-row flex-col gap-4`}>
                    <Link to={'/'} className='font-bold  flex items-center px-2'>Home</Link>
                    <Link to={''} className='font-bold  flex items-center px-2'>Lesson</Link>
                    <Link to={''} className='font-bold  flex items-center px-2'>Translate</Link>
                    <Link to={'/contact'} className='font-bold  flex items-center px-2'>Contact</Link>
                    <Link to={''} className='font-bold  flex items-center px-2'>Subscribe</Link>
                   

                    <span className='flex items-center px-3'>
                        <img className='rounded-2xl aspect-square h-[2rem] invisible md:invisible sm:visible' src={profile} alt='profile' />
                    </span>
                </div>
            </div>
            <div className=' bg-sky-100 transform translate-x-52 flex gap-60'>
                <div className='invisible md:visible font-bold cursor-pointer   gap-6 flex'>
                <Link to={'/'} className='font-bold px-2'>Home</Link>
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
                    <button className='hover:bg-sky-600 bg-sky-300 font-bold p-1 w-20 h-8 b-1 border-sky-200 rounded-lg'>Sign Up</button>
                </div>
            </div>
         

            <div className='p-8 justify-center flex md:flex-row flex-col '>
                <div className=''>
                    <img className=' rounded-t-2x rounded-l-2xl  md:w-max w-11/12 h-max' src={contact} alt='contact' />
                </div>
                <div className='  w-11/12	 md:w-6/12 md:rounded-r-2xl	 md:flex-row flex-col gap-20 flex rounded-b-2xl bg-white  p-1 '>
                    <div className='font-semibold p-2 text-sm'>
                        <div className='flex md:flex-row flex-col gap-9 w-screen  p-4'>
                            <p className='text-lg font-bold'>Get in touch</p>
                            <p className='font-bold md:'>Our friendly team would love to hear from you</p>
                        </div>
                        <label className='p-1' htmlFor="firstNameInput">Firstname</label>
                        <input
                            className='p-1 mb-2 w-56 border-2 rounded-lg border-sky-200'
                            type="text"
                            id="firstNameInput"
                            name="Firstname"
                            value={Firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                        /><br/>
                        <label className='p-1 ' htmlFor="lastNameInput">Lastname</label>
                        <input
                            className=' mb-2 p-1 w-56 border-2 rounded-lg border-sky-200'
                            type="text"
                            id="lastNameInput"
                            name="Lastname"
                            value={Lastname}
                            onChange={(e) => setLastname(e.target.value)}
                        /><br />
                        <label className='p-2' htmlFor="emailInput">Email  </label>
                        <input
                            className='mb-2 p-1 w-56 border-2 rounded-lg border-sky-200'
                            type="text"
                            id="emailInput"
                            name="Email"
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                        /><br />
                        <label className='p-2 ' htmlFor="PhoneNumberInput">PhoneNumber</label>
                        <input
                            className='p-1 w-56 border-2 rounded-lg border-sky-200'
                            type="number"
                            id="PhoneNumberInput"
                            name="PhoneNumber"
                            value={PhoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        /><br />

                        <label  htmlFor="messageInput">Message</label><br />
                        <textarea
                            id="messageInput"
                            name="Message"
                            value={Message}
                            onChange={(e) => setMessage(e.target.value)}
                            className='w-72 h-24 border-2 border-sky-200 rounded-lg' 
                        ></textarea><br />

                        <label>
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                            You agree to our friendly <span className='text-underline'>privacy policy</span><br />
                        </label><br />
                        <button className=' hover:bg-sky-500 font-bold bg-sky-300 w-72 p-2 rounded-xl'> Send message</button>
                    </div>
                </div>
               
            </div>
            <div className='md:flex-row flex-col flex gap-36 footer h-92	 bg-sky-200 w-screen'>
                <div className='flex gap-5'>
                    <img className=' w-10 h-8' src={logo} alt='logo' />
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
