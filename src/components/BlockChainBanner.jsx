import React, { Component } from "react";
import BlockChain from "../assets/images/blockchain.png";

export default class BlockChainBanner extends Component {
	render() {
		return (
			<div className="w-full h-[100vh] pt-32 lg:pt-0 flex flex-col justify-center items-center">
				{/* main content */}
				<div className="w-full lg:max-w-5xl flex flex-col-reverse lg:flex-row-reverse lg:gap-x-7 justify-center items-center">
					<span
						data-aos="fade-up"
						data-aos-duration="2300"
						className="w-4/5 md:w-3/6 h-[20rem] flex flex-col gap-y-5 justify-center items-center md:items-start"
					>
						<h1 className="text-[#1565d8] text-lg md:text-xl lg:text-5xl font-semibold mb-3">
							Blockchain for real things
						</h1>
						<p className="text-[#6c7887] text-base font-medium md:text-lg lg:text-xl">
							Valiu is a technology startup that provides
							tokenized traceability products and blockchain
							solutions for supply chains offering transparency
							and trust with our disruptive model of digital
							identity of productive assets through non fungible
							tokens (NFTs).
						</p>
					</span>

					<span className="w-4/5 md:w-3/6 h-[20rem] lg:h-[30rem] flex justify-center items-center">
						<img
							data-aos="flip-right"
							data-aos-duration="2300"
							src={BlockChain}
							alt="blockchain img"
						/>
					</span>
				</div>
			</div>
		);
	}
}
