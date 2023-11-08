import React from "react";
import MenuElement from "./MenuElement";

const Menu123 = () => {
	return (
		<ul>
			{/* <MenuElement kkk="122" />
			<MenuElement kkk="hello baby!" />
			<MenuElement kkk={4567890} /> */}
			<MenuElement kkk={[1, "aaaaaaaaaaaa", 2, 3, 222, "aaaaa"]} />
		</ul>
	);
};

export default Menu123;
