import React from "react";

export default function Card({ title, info, svg }) {
	return (
		<div data-aos="zoom-in-up" className="bg-white shadow-md border rounded-md h-[8em] w-full max-w-md flex justify-center items-center px-7 gap-x-6">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-6 h-6"
			>
				{svg}
			</svg>
			<div className="flex flex-col justify-center items-start">
				<h3 className="text-lg font-semibold">{title}</h3>
				<p className="text-gray-500">{info}</p>
			</div>
		</div>
	);
}
