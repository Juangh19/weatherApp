import { useState } from 'react';
import { useCityResult } from '../hooks/useCityResult';
import { CurrentWeather } from './CurrentWeather';
import { Forecast } from './Forecast';
import './Result.css';
import loader from '../assets/loader.svg';

export function Result({ result }) {
	const { city, loading } = useCityResult({ pos: result });
	const [tempUnit, setTempUnit] = useState('f');

	const handleTempUnit = (tempUnit) => {
		setTempUnit(tempUnit);
	};

	console.log(loading);

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
