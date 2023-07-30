const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const searchCities = async ({ search }) => {
	if (search === '') return null;

	try {
		const response = await fetch(
			`https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${search}`,
		);
		const cities = await response.json();

		return cities;
	} catch (error) {
		console.log(error);
	}
};
