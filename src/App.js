import './App.css';
import songs from './data/songs.json';

const searchText = 'HAND';

function App() {

	const searchSongs = (searchText) => {
		console.log(searchText);
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
