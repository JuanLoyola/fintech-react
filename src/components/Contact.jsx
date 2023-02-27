import React, { Component } from "react";

export default class Contact extends Component {
	render() {
		return (
			<div className="w-full pt-24 lg:pt-0 flex flex-col justify-center items-center">
				{/* main content */}
				<section className="w-full lg:max-w-5xl flex flex-col lg:flex-row lg:gap-x-7 justify-center items-center md:items-start">
					<h1 id="contact" className="text-[#1565d8] font-bold text-lg md:text-3xl uppercase">
						Contact
					</h1>
					<form
						action=""
						className=" w-3/4 flex flex-col justify-center items-center md:items-start gap-y-5"
					>
						<span className="flex flex-col md:flex-row justify-center items-center gap-y-7 md:gap-y-0">
							<input type="text" placeholder="Name" />

							<input type="text" placeholder="Email" />

							<input type="text" placeholder="Company" />

							<input type="text" placeholder="Phone" />
						</span>
						<span className="flex flex-col md:flex-row justify-center md:justify-around items-center">
							<textarea
								className="w-full max-w-xs md:max-w-none"
								name="message"
								id="message"
								cols="60"
								rows="10"
								placeholder="Let your message here"
							></textarea>
							<button className="w-[16em] mt-5 md:mt-0 md:ml-3 bg-[#1565d8] text-white px-7 py-2 rounded-md">
								Send
							</button>
						</span>
					</form>
				</section>
			</div>
		);
	}
}
