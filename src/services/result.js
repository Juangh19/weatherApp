const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const cityResultAPI = async ({ pos }) => {
	try {
		const response = await fetch(
			`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${pos}&days=3`,
		);
		const cityResult = await response.json();

		return cityResult;
	} catch (error) {
		console.log(error);
	}
};
