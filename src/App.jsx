import { useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { SearchBar } from './components/SearchBar';
import { Result } from './components/Result';

function App() {
	const [searchResults, setSearchResults] = useState([]);

	const handleSearch = (option) => {
		setSearchResults(option);
	};

	return (
		<>
			<main>
				<header>
					<h1>Weather App</h1>
					<SearchBar onSearch={handleSearch} />
				</header>
				<Result result={searchResults} />
			</main>

			<Footer />
		</>
	);
}

export default App;
