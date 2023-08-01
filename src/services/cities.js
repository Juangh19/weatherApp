const API_KEY = 'ae8f738e6bbe40709c1235018232907';

export const searchCities = async ({ search }) => {
	if (search.length < 3) return [];

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
