/* eslint-disable no-mixed-spaces-and-tabs */
import './CurrentWeather.css';

export function CurrentWeather({ city, tempUnit, handleTempUnit }) {
	return (
		<div className='city-result'>
			<div className='lastUpdated'>
				last update: <i>{city.current.last_updated}</i>
			</div>

			<div className='cityInfo'>
				<h2 className='cityTitle'>
					{city.location.name}, {city.location.country}
				</h2>
				<span className='currentWeather'>Current Weather:</span>
				<div className='weatherTemp'>
					<span className='temperature'>
						<strong>
							{tempUnit === 'f' ? city.current.temp_f : city.current.temp_c}
						</strong>
						<div className='temperature'>
							<div className='temperatureUnits'>
								<span
									onClick={() => handleTempUnit('f')}
									style={
										tempUnit === 'f'
											? {
													fontWeight: 'bold',
													opacity: '1',
											  }
											: { fontWeight: '300' }
									}
								>
									°F
								</span>
								<span
									onClick={() => handleTempUnit('c')}
									style={
										tempUnit === 'c'
											? {
													fontWeight: 'bold',
													opacity: '1',
											  }
											: { fontWeight: '300' }
									}
								>
									{' '}
									°C{' '}
								</span>
							</div>
						</div>
					</span>
					<span className='feelsLike'>
						<span className='feelsLikeText'>Feels like: </span>
						{tempUnit === 'f' ? (
							<>
								<strong>{city.current.feelslike_f}</strong> °F
							</>
						) : (
							<>
								<strong>{city.current.feelslike_c}</strong> °C
							</>
						)}
					</span>
				</div>
			</div>
			<div className='cityCondition'>
				<img
					src={city.current.condition.icon}
					alt={city.current.condition.text}
				/>
				<span className='textCondition'>
					<strong>{city.current.condition.text}</strong>
				</span>
				<div className='conditionProperties'>
					<span className='wind_mph'>
						<strong>Wind:</strong> {city.current.wind_mph} mph
					</span>
					<span className='humidity'>
						<strong>Humidity:</strong> {city.current.humidity} %
					</span>
				</div>
			</div>
		</div>
	);
}
