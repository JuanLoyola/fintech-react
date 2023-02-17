import React, { useState } from 'react'
import MenuIcon from "./UI/MenuIcon.jsx";
import CloseIcon from "./UI/CloseIcon.jsx";

function Navbar() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	
	return (
		<div className='shadow text-black h-14 flex justify-center items-center'>
			<div className='w-full lg:max-w-5xl flex justify-between items-center px-12 md:px-0 text-sm'>
				{/* desktop */}
				<ul className='hidden w-[18rem] md:flex justify-between items-center'>
					<li className='font-medium text-sm hover:text-gray-500 cursor-pointer transition-all'>Home</li>
					<li className='font-medium text-sm hover:text-gray-500 cursor-pointer transition-all'>About</li>
					<li className='font-medium text-sm hover:text-gray-500 cursor-pointer transition-all'>Services</li>
					<li className='font-medium text-sm hover:text-gray-500 cursor-pointer transition-all'>Crypto</li>
				</ul>
				<ul className='hidden w-[12rem] md:flex justify-between items-center'>
					<li className='font-medium text-sm hover:text-gray-500 cursor-pointer transition-all'>Log In</li>
					<li className='font-medium text-sm bg-indigo-500 hover:bg-indigo-600 text-white hover:text-gray-300 px-7 py-2 rounded-md cursor-pointer transition-all'>Sign Up</li>
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
				<div className={isNavOpen ? 'md:hidden bg-[#f1f1f1] absolute top-12 right-0 h-screen w-full' : 'hidden'}>
					<ul className="h-full flex flex-col justify-center items-center gap-y-5">
						<li className='hover:text-gray-400 text-xl font-bold hover:underline cursor-pointer uppercase'>Home</li>
						<li className='hover:text-gray-400 text-xl font-bold hover:underline cursor-pointer uppercase'>About</li>
						<li className='hover:text-gray-400 text-xl font-bold hover:underline cursor-pointer uppercase'>Services</li>
						<li className='hover:text-gray-400 text-xl font-bold hover:underline cursor-pointer uppercase'>Crypto</li>
					</ul>
				</div>
				<ul className='md:hidden w-[12rem] flex justify-between items-center'>
					<li className='font-medium text-sm hover:text-gray-500 cursor-pointer transition-all'>Log In</li>
					<li className='font-medium text-sm text-white bg-indigo-500 hover:bg-indigo-600 hover:text-gray-300 px-7 py-2 rounded-md cursor-pointer transition-all'>Sign Up</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
