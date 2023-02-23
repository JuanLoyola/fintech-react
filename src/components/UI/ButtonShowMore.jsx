import React, { Component } from "react";

export default class ButtonShowMore extends Component {
	render() {
		return (
			<div>
				<button className="flex justify-center items-center shadow bg-none border border-[#6a91ec] text-[#6a91ec] hover:border-[#4262ac] hover:text-[#4262ac] rounded-full px-7 py-1 mt-5">
					ver más
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
				</button>
			</div>
		);
	}
}
