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
					style={
						cities.length > 0 && showCities
							? { borderRadius: '5px 5px 0 0' }
							: { borderRadius: ' 5px' }
					}
					onBlur={() => {
						setShowCities(false);
					}}
					onFocus={() => {
						setShowCities(true);
					}}
				/>
				{showCities &&
					(cities.length > 0 ? (
						<ul>
							{cities.map((city) => (
								<>
									<li data-pos={`${city.lat},${city.lon}`} key={city.id}>
										{city.name}, {city.country}
									</li>
									<hr />
								</>
							))}
						</ul>
					) : null)}
			</div>
		</>
	);
}
