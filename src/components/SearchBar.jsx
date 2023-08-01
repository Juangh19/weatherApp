import { useState } from 'react';
import { useCities } from '../hooks/useCities';
import './SearchBar.css';

export function SearchBar({ onSearch }) {
	const [search, setSearch] = useState('');
	const [showCities, setShowCities] = useState(false);
	const { cities, getCities, setCities } = useCities({ search });

	const handleChange = (e) => {
		const newQuery = e.target.value;
		if (newQuery.startsWith(' ')) return;
		setSearch(newQuery);

		getCities({ search: newQuery });
	};

	const handleOptionClink = (option) => {
		console.log(option.target.dataset.pos);
		onSearch(option.target.dataset.pos);
		setShowCities(false);
		setSearch('');
		setCities([]);
	};

	return (
		<>
			<label htmlFor='opciones'>Select your city:</label>
			<div
				className='comboBox'
				onFocus={() => {
					setShowCities(true);
				}}
				onBlur={() =>
					setTimeout(() => {
						setShowCities(false);
					}, 1000)
				}
			>
				<input
					className='city-selector'
					type='text'
					list='opciones'
					placeholder='e.g. London, England'
					onChange={handleChange}
					value={search}
					style={
						cities.length > 0 && showCities
							? { borderRadius: '5px 5px 0 0' }
							: { borderRadius: ' 5px' }
					}
				/>
				{showCities &&
					(cities.length > 0 ? (
						<ul>
							{cities.map((city) => (
								<li
									data-pos={`${city.lat},${city.lon}`}
									key={city.id}
									onClick={handleOptionClink}
								>
									{city.name}, {city.region}, {city.country}
								</li>
							))}
						</ul>
					) : null)}
			</div>
		</>
	);
}
