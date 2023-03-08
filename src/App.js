// import Button from "./Button";
// import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
	const [todo, setToDo] = useState("");
	const [toDos, setToDos] = useState([]);

	const onChange = (event) => setToDo(event.target.value);
	const onSubmit = (event) => {
		event.preventDefault();
		if (todo === "") {
			return;
		}
		setToDos((currArray) => [todo, ...currArray]);
		setToDo("");
	};

	return (
		<div>
			<h1>My ToDos ({toDos.length})</h1>
			<form onSubmit={onSubmit}>
				<input
					value={todo}
					onChange={onChange}
					type="text"
					placeholder="Write your to do..."
				/>
				<button>Add your ToDo</button>
			</form>
			<hr />
			<ul>
				{toDos.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
