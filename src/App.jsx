import './App.css';
import { Footer } from './components/Footer';
import { SearchBar } from './components/SearchBar';

function App() {
	return (
		<>
			<main>
				<header>
					<h1>Weather App</h1>
					<SearchBar />
				</header>
			</main>
			<Footer />
		</>
	);
}

export default App;
