// import Button from "./Button";
// import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
	const [loading, setLoading] = useState(true);
	const [coins, setCoins] = useState([]);
	useEffect(() => {
		fetch("https://api.coinpaprika.com/v1/tickers")
			.then((response) => response.json())
			.then((json) => {
				setCoins(json);
				setLoading(false);
			});
	}, []);

	return (
		<div>
			<h1>The Coins</h1>
			{loading ? <h2>Loading...</h2> : <h2>({coins.length})</h2>}
			<ul>
				{coins.map((coin) => (
					<li>
						{coin.name} ({coin.symbol}): ${coin.quotes.USD.price}{" "}
						USD
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
