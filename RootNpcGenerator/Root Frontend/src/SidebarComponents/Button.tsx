import React from "react";

type ContentProps = {
	handleFunction: Function;
	title: string;
	id?: number;
};

const Button = ({ handleFunction, title, id }: ContentProps) => {
	if (id === undefined) {
		return (
			<>
				<button className="sub-btn" onClick={() => handleFunction()}>
					{title}
				</button>
			</>
		);
	} else {
		return (
			<>
				<button className="sub-btn" onClick={() => handleFunction(id - 1)}>
					{title}
				</button>
			</>
		);
	}
};

export default Button;
