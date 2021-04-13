import React, { useState } from 'react';
import './App.css';
import songs from './data/songs.json';

function App() {

 	const [searchText, setSearchText] = useState('');

	const searchSongs = (userSearchText) => {
		setSearchText(userSearchText);
	}

	return (
		<div className="App">
			<h1>Song Database</h1>
			<div>
				<input type="text" onChange={((e) => searchSongs(e.target.value))} />
			</div>
			<p>There are {songs.length} songs.</p>
			<ul>
				{songs.map((song) => {
					return (
						<>
							{ (song.author.toLowerCase().includes(searchText.toLowerCase())|| song.name.toLowerCase().includes(searchText.toLowerCase())) && (
								<li>{song.author} - {song.name}</li>
							)}
						</>
					)
				})}
			</ul>
		</div>
	);
}

export default App;
