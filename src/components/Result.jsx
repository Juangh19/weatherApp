import { useState } from 'react';
import { useCityResult } from '../hooks/useCityResult';
import { CurrentWeather } from './CurrentWeather';
import { Forecast } from './Forecast';
import './Result.css';

export function Result({ result }) {
	const { city } = useCityResult({ pos: result });
	const [tempUnit, setTempUnit] = useState('f');

	const handleTempUnit = (tempUnit) => {
		setTempUnit(tempUnit);
	};

	return (
		city && (
			<>
				<CurrentWeather
					city={city}
					tempUnit={tempUnit}
					handleTempUnit={handleTempUnit}
				/>
				<hr />
				<Forecast city={city} tempUnit={tempUnit} />
			</>
		)
	);
}
