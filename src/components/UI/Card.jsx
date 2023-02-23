import React, { Component } from "react";

export default function Card({ title, info }) {
	return (
		<div className="bg-white shadow-md border rounded-md h-[8em] w-full max-w-md flex justify-center items-center px-7 gap-x-6">
        {/* FIXME: pasar los svg como prop tambien */}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-6 h-6"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
				/>
			</svg>
			<div className="flex flex-col justify-center items-start">
				<h3 className="text-lg font-semibold">{title}</h3>
				<p className="text-gray-500">{info}</p>
			</div>
		</div>
	);
}
