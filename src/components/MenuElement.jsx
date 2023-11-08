import React from "react";

export default function MenuElement({ kkk }) {
	let hoosonArr = kkk.filter((el) => typeof el === "string");

	return (
		<li>
			{hoosonArr.map((el) => (
				<h1 style={{ fontSize: "80px" }}>{el}</h1>
			))}
		</li>
	);
}
