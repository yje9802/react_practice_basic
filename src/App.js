import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./routes/Home";

function App() {
	return (
		<Router>
			<Route path="/" element={<Home />}></Route>
		</Router>
	);
}

export default App;
