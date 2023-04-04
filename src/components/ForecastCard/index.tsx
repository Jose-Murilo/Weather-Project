import './style.css'

type ForecastCardProps = {
    day: string;
    icon: string;
    tempMax: number;
    tempMin: number;
}

export function ForecastCard({ day, icon, tempMax, tempMin }: ForecastCardProps) {
    return (
        <div className='blockWeatherForecast'>
            <h3>{day}</h3>
            <div className="blockIconDegree">
                <img src={icon} alt="icon" />
                <p className='forecastDegreeMaxMin'>
                    <span className='degreeMax'>{tempMax}°</span>
                    <span className='degreeMin'>{tempMin}°</span>
                </p>
            </div>
        </div>
    )
}