import './Forecast.css';

export function Forecast({ city, tempUnit }) {
	return (
		<div className='forecastCont'>
			{city.forecast.forecastday.map((day) => (
				<div key={day.date}>
					<div className='weather'>
						<h5>{day.date}</h5>
						<img src={day.day.condition.icon} alt={day.day.condition.text} />
					</div>
					<div className='tempValues'>
						<span>
							Max:{' '}
							{tempUnit === 'f' ? (
								<>
									<strong>{day.day.maxtemp_f}</strong> ° F
								</>
							) : (
								<>
									<strong>{day.day.maxtemp_c}</strong> ° C
								</>
							)}
						</span>
						<span>
							Min:{' '}
							{tempUnit === 'f' ? (
								<>
									<strong>{day.day.mintemp_f}</strong> ° F
								</>
							) : (
								<>
									<strong>{day.day.mintemp_c}</strong> ° C
								</>
							)}
						</span>
					</div>
					<div className='weatherDescription'>
						<span>
							<strong>{day.day.condition.text}</strong>
						</span>
					</div>
				</div>
			))}
		</div>
	);
}
