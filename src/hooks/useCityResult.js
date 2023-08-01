import { useEffect, useState } from 'react';
import { cityResultAPI } from '../services/result';

export function useCityResult({ pos }) {
	const [city, setCity] = useState(null);

	useEffect(() => {
		const searchCityResult = async ({ pos }) => {
			if (pos.length === 0) return null;
			try {
				const cityResult = await cityResultAPI({ pos });

				return cityResult;
			} catch (error) {
				console.log(error);
				return null;
			}
		};

		searchCityResult({ pos }).then((newCity) => {
			setCity(newCity);
		});
	}, [pos]);

	return { city: city };
}
