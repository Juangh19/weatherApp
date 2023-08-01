import { useEffect, useState } from 'react';
import { cityResultAPI } from '../services/result';

export function useCityResult({ pos }) {
	const [city, setCity] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const searchCityResult = async ({ pos }) => {
			if (pos.length === 0) return null;
			try {
				setCity(null);
				setLoading(true);
				const cityResult = await cityResultAPI({ pos });
				setLoading(false);

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

	return { city: city, loading: loading };
}
