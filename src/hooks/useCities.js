import { useCallback, useRef, useState } from 'react';
import { searchCities } from '../services/cities';

export function useCities({ search }) {
	const [cities, setCities] = useState([]);
	const previousSearch = useRef(search);

	const getCities = useCallback(async ({ search }) => {
		if (search === previousSearch.current) return;

		try {
			const newCities = await searchCities({ search });
			setCities(newCities);
		} catch (error) {
			console.log(error);
		}
	}, []);

	return { cities: cities, getCities };
}
