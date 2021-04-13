import './App.css';
import songs from './data/songs.json';

function App() {
	return (
		<div className="App">
			<h1>Song Database</h1>
			<p>There are {songs.length} songs.</p>
			<ul>
				{songs.map((song) => {
					return (
						<>
							<li>{song.author} - {song.name}</li>
						</>
					)
				})}
			</ul>
		</div>
	);
}

export default App;
