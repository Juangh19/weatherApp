import { useEffect, useState } from 'react';
import { useCityResult } from '../hooks/useCityResult';
import { CurrentWeather } from './CurrentWeather';
import { Forecast } from './Forecast';
import './Result.css';
import loader from '../assets/loader.svg';

export function Result({ result }) {
	const { city, loading } = useCityResult({ pos: result });
	const [tempUnit, setTempUnit] = useState('f');

	useEffect(() => {
		const storedTempUnit = localStorage.getItem('tempUnit');

		if (storedTempUnit) {
			setTempUnit(storedTempUnit);
		}
	}, []);

	const handleTempUnit = (tempUnit) => {
		setTempUnit(tempUnit);
		localStorage.setItem('tempUnit', tempUnit);
	};

	return (
		<div className='result'>
			{loading && (
				<div className='loading'>
					<img src={loader} alt='loading' />
				</div>
			)}
			{city ? (
				<>
					<CurrentWeather
						city={city}
						tempUnit={tempUnit}
						handleTempUnit={handleTempUnit}
					/>
					<hr />
					<Forecast city={city} tempUnit={tempUnit} />
				</>
			) : null}
		</div>
	);
}
