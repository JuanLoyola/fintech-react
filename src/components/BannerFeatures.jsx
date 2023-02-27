import React, { Component } from "react";
import ButtonShowMore from "./UI/ButtonShowMore";
import servicesImg from "../assets/images/bannerFeatures.png";

export default class BannerFeatures extends Component {
	render() {
		return (
			<div className="w-full h-full md:h-screen mt-12 md:mt-0 md:py-5 flex justify-center items-center bg-[#c9dbf4]">
				<div className="w-full h-full lg:max-w-6xl flex flex-col justify-center items-center ">
					<img
						className="w-full hidden md:block lg:max-w-5xl"
						src={servicesImg}
						alt="asd"
					/>

					<ul className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center">
						<li className="w-[13rem] mb-6 md:mb-0 flex flex-col justify-center items-center text-center font-semibold text-sm ml-5">
							<p className="h-[8em] mt-5">
								Tokenization and Traceability. Trace, manage and
								differentiate your productive assets in a simple
								assets.
							</p>
							<ButtonShowMore />
						</li>
						<li className="w-[13rem] mb-6 md:mb-0 flex flex-col justify-center items-center text-center font-semibold text-sm ml-5">
							<p className="h-[8em] mt-5">
								Documentary Verification. Improve transparency
								and trust by adding blockchain to your public
								documents.
							</p>
							<ButtonShowMore />
						</li>
						<li className="w-[13rem] mb-6 md:mb-0 flex flex-col justify-center items-center text-center font-semibold text-sm ml-5">
							<p className="h-[8em] mt-5">
								Use your traceability information as Proof of
								Existence (PoE) of the goods and access to
								Insurance and Credits digitally, fast and
								secure.
							</p>
							<ButtonShowMore />
						</li>
						<li className="w-[13rem] mb-6 md:mb-0 flex flex-col justify-center items-center text-center font-semibold text-sm ml-5">
							<p className="h-[8em] mt-5">
								Deforestation Free Verification Service
								Deforestation of productive establishments.
							</p>
							<ButtonShowMore />
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
