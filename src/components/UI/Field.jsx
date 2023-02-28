import React from "react";
import { useField } from "react-form";

function Field({ name }) {
	const {
		value = "",
		meta: { error, isTouched },
		getInputProps,
	} = useField(name, {
		validate: (value) => {
			if (!value) {
				return `${name} is required.`;
			}
			return false;
		},
	});

	return (
		<div className="">
			<input type="text" {...getInputProps()} value={value} placeholder={name} />
			{isTouched && error ? <span className="font-semibold text-red-400">{error}</span> : null}
		</div>
	);
}

export default Field;
