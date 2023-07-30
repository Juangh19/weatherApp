import { useState } from 'react';
import { useCities } from '../hooks/useCities';
import './SearchBar.css';

export function SearchBar() {
	const [search, setSearch] = useState('');
	const [showCities, setShowCities] = useState(false);
	const { cities, getCities } = useCities({ search });

	const handleChange = (e) => {
		const newQuery = e.target.value;
		if (newQuery.startsWith(' ')) return;
		setSearch(newQuery);
		getCities({ search: newQuery });
	};

	const handleSearchClick = () => {
		setShowCities(true);
	};

	return (
		<>
			<label htmlFor='opciones'>Select your city:</label>
			<div className='comboBox'>
				<input
					className='city-selector'
					type='text'
					list='opciones'
					placeholder='e.g. London, England'
					onChange={handleChange}
					value={search}
					onClick={handleSearchClick}
				/>

				{showCities && (
					<ul>
						{cities.map((city) => (
							<li data-pos={`${city.lat},${city.lon}`} key={city.id}>
								{city.name}, {city.country}
							</li>
						))}
					</ul>
				)}
			</div>
		</>
	);
}
