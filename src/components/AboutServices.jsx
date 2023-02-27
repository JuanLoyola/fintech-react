import React, { Component } from "react";
import Card from "./UI/Card";
import PhoneImage from "../assets/images/card.png";

export default class AboutServices extends Component {
	render() {
		// Cards content
		const security = (
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
			/>
		);
		const multiple = (
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
			/>
		);
		const document = (
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
			/>
		);
		const investing = (
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
			/>
		);

		return (
			<div className="lg:relative lg:bottom-36 flex flex-col justify-center items-center w-full">
				<div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-y-5 gap-x-5">
					<Card
						svg={security}
						title="Security Guarantee"
						info="Your data and funds will be securely protected."
					/>
					<Card
						svg={investing}
						title="Investing"
						info="We offer you the best and safest investment options."
					/>
					<Card
						svg={multiple}
						title="Multiple Method"
						info="A few familiar ways for you to choose a bank."
					/>
					<Card
						svg={document}
						title="Well Documented"
						info="Each section has descriptions and examples for you."
					/>
				</div>
				<h1
					data-aos="flip-up"
					data-aos-duration="1000"
					className="text-[#1565d8] flex mt-12 font-bold hover:underline cursor-pointer"
				>
					Explore all features
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6 ml-2"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
						/>
					</svg>
				</h1>

				{/* banner with counter */}
				<div className="w-full mt-32  max-w-4xl flex flex-col lg:flex-row-reverse lg:justify-evenly items-center">
					<div className="flex flex-col justify-center items-end gap-y-10">
						<span className="flex gap-x-7">
							<p
								data-aos="flip-up"
								data-aos-duration="2000"
								className="text-lg lg:text-7xl text-indigo-500"
							>
								1123
							</p>
							<div
								data-aos="flip-up"
								data-aos-duration="1500"
								className="flex flex-col justify-center items-start"
							>
								<p className="text-sm">Transactions</p>
								<p className="text-sm flex justify-center items-center">
									Per Sec
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={3}
										stroke="currentColor"
										className="w-3 h-3 ml-1 text-indigo-700"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
										/>
									</svg>
								</p>
							</div>
						</span>

						<span className="flex gap-x-7">
							<p
								data-aos="flip-up"
								data-aos-duration="2000"
								className="text-lg lg:text-7xl text-indigo-500"
							>
								78%
							</p>
							<div
								data-aos="flip-up"
								data-aos-duration="1500"
								className="flex flex-col justify-center items-start"
							>
								<p className="text-sm">Transactions</p>
								<p className="text-sm flex justify-center items-center">
									Per Sec
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={3}
										stroke="currentColor"
										className="w-3 h-3 ml-1 text-indigo-700"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
										/>
									</svg>
								</p>
							</div>
						</span>
					</div>

					<img data-aos="flip-right"
					data-aos-duration="1300" className="h-[30rem] " src={PhoneImage} alt="Phone" />
				</div>
			</div>
		);
	}
}
