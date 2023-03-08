// import Button from "./Button";
// import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Search() {
	const [keyword, setKeyword] = useState("");
	const onChange = (event) => setKeyword(event.target.value);
	// this will be rendered only when the keyword is changed
	useEffect(() => {
		if (keyword !== "" && keyword.length > 5) {
			console.log("Search for", keyword);
		}
	}, [keyword]);

	return (
		<input
			value={keyword}
			type="text"
			placeholder="Search here..."
			onChange={onChange}
		/>
	);
}

function App() {
	const [counter, setValue] = useState(0);
	const [showing, setShowing] = useState(false);
	const onClick = () => setValue((prev) => prev + 1);
	const onShowClick = () => setShowing((prev) => !prev);

	const iRunOnlyOnce = () => {
		console.log("i run only once");
	};
	// iRunOnlyOnce will be rendered only once at the very beginning
	useEffect(iRunOnlyOnce, []);

	useEffect(() => {
		if (showing === true) {
			console.log("created");
			return () => console.log("destroyed");
		}
	}, [showing]);

	return (
		<div>
			<h1>{counter}</h1>
			<button onClick={onClick}>Click Me</button>
			<button onClick={onShowClick}>{showing ? "Hide" : "Show"}</button>
			{showing ? <Search /> : null}
		</div>
	);
}

export default App;
