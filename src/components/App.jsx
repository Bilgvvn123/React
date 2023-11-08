import "./App.css";

export default function App() {
	return (
		<div>
			{"aaaaaaa".toUpperCase()}
			<Menu123 />
		</div>
	);
}
function MenuElement({ kkk }) {
	let hoosonArr = kkk.filter((el) => typeof el === "number");

	return (
		<li>
			{hoosonArr.map((el) => (
				<h1 style={{ fontSize: "80px" }}>{el}</h1>
			))}
		</li>
	);
}

const Menu123 = () => {
	return (
		<ul>
			{/* <MenuElement kkk="122" />
			<MenuElement kkk="hello baby!" />
			<MenuElement kkk={4567890} /> */}
			<MenuElement
				kkk={[1, "aaaaaaaaaaaa", 2, 3, 222, "aaaaa", 222, "kkk"]}
			/>
		</ul>
	);
};
