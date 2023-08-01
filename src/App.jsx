import { useEffect, useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { SearchBar } from './components/SearchBar';
import { Result } from './components/Result';

function App() {
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		const storedCity = localStorage.getItem('city');

		console.log(storedCity);

		if (storedCity) {
			console.log('si');
			console.log(storedCity);
			setSearchResults(storedCity);
		} else {
			console.log('no');
		}
	}, []);

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
