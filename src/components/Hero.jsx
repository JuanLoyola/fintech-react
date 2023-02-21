import React, { Component } from 'react'

export default class Hero extends Component {
    render() {
        return (
            <div className="w-full h-[100vh] pt-32 lg:pt-0 flex flex-col justify-center items-center bg-[url('/src/assets/Background.svg')] bg-no-repeat bg-cover">
                {/* main content */}
                <div className='w-full lg:max-w-5xl flex flex-col-reverse lg:flex-row lg:gap-x-7 justify-center items-center'>
                    <span className="w-4/5 md:w-3/6 h-[20rem] flex flex-col gap-y-5 justify-center items-center md:items-start">
                        <h1 className='text-white text-lg md:text-xl lg:text-6xl font-semibold mb-3'>Information for financial literacy</h1>
                        <p className='text-white text-base font-light md:text-lg lg:text-2xl'>We have a large section where we give tips on how to manage your finances.</p>
                        <div className='w-full flex justify-center md:justify-start items-center gap-x-5'>
                            <a className='text-white font-semibold border border-white px-12 py-2 rounded-full hover-button hover:text-black transition-all' href="" target="_blank" rel="noopener noreferrer">
                                learn more
                            </a>
                        </div>
                    </span>

                    <span className='w-4/5 md:w-3/6 h-[20rem] lg:h-[30rem] flex justify-center items-center'>
                        <lottie-player src="https://assets5.lottiefiles.com/private_files/lf30_sM28Fo.json"  background="transparent"  speed="1"   autoplay></lottie-player>
                    </span>
                </div>

                {/* scroll down animation */}
                <div className='mt-24'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 p-1 text-white animate-bounce border border-white  rounded-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>
        )
    }
}
