import './App.css';
import React, { useEffect, useState } from 'react';
import axios from "axios";

function App() {
	const [pokemon, setPokemon] = useState([]);

	useEffect(() => {
		axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
			.then( response => setPokemon(response.data.results) )
			.catch( (err) => { console.log(err); })
	}, []);
	
	return (
		<div style={{ width: "150px", margin: "auto" }}>
			<ul>
			{
				pokemon.map( (pokemon, index) => {
					return (
						<li key={ index }>{ pokemon.name }</li>
					)
				})
			}
			</ul>
		</div>
	);
}

export default App;
