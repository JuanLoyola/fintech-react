import React, { useState } from 'react'
import MenuIcon from "./UI/MenuIcon.jsx";
import CloseIcon from "./UI/CloseIcon.jsx";

function Navbar() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	
	return (
		<div className='bg-[#1565d8] w-full  text-white h-14 flex justify-center items-center'>
			<div className='w-full relative lg:max-w-5xl flex justify-between items-center px-12 md:px-0 text-sm z-20 bg-none'>
				{/* desktop */}
				<ul className='hidden w-[21rem] md:flex justify-between items-center'>
					<li className='font-medium text-sm hover:text-gray-400 cursor-pointer transition-all uppercase'>valiu.</li>
					<li className='font-medium text-sm hover:text-gray-400 cursor-pointer transition-all'>Products</li>
					<li className='font-medium text-sm hover:text-gray-400 cursor-pointer transition-all'>Benefits</li>
					<li className='font-medium text-sm hover:text-gray-400 cursor-pointer transition-all'>About us</li>
					<li className='font-medium text-sm hover:text-gray-400 cursor-pointer transition-all'>Pricing</li>
				</ul>
				<ul className='hidden w-[12rem] md:flex justify-between items-center'>
					<li className='font-medium text-sm border border-white hover:border-gray-300 hover:bg-[#1259bc] text-white hover:text-gray-300 px-7 py-2 rounded-md cursor-pointer transition-all'>contact</li>
				</ul>

				{/* mobile */}
				<ul className='md:hidden'>
					<li className="cursor-pointer" >
					<button onClick={() => setIsNavOpen(!isNavOpen)}>
						{isNavOpen ? <CloseIcon /> : <MenuIcon />}
					</button>
					</li>
				</ul>
				{/* options panel */}
				<div className={isNavOpen ? 'md:hidden bg-[#1565d8] absolute top-12 right-0 h-screen w-full' : 'hidden'}>
					<ul className="h-full flex flex-col justify-center items-center gap-y-5">
						<li className='hover:text-gray-400 text-xl font-bold hover:underline cursor-pointer uppercase'>Home</li>
						<li className='hover:text-gray-400 text-xl font-bold hover:underline cursor-pointer uppercase'>About</li>
						<li className='hover:text-gray-400 text-xl font-bold hover:underline cursor-pointer uppercase'>Services</li>
						<li className='hover:text-gray-400 text-xl font-bold hover:underline cursor-pointer uppercase'>Crypto</li>
					</ul>
				</div>
				<ul className='md:hidden w-[12rem] flex justify-between items-center'>
					<li className='font-medium text-sm hover:text-gray-400 cursor-pointer transition-all'>Log In</li>
					<li className='font-medium text-sm text-white bg-indigo-500 hover:bg-indigo-600 hover:text-gray-300 px-7 py-2 rounded-md cursor-pointer transition-all'>Sign Up</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
