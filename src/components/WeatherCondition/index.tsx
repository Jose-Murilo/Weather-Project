import './style.css'

type WeatherConditionProps = {
    climate: string;
    condition: string;
}

export function WeatherCondition({ climate, condition }: WeatherConditionProps) {
    return (
        <div className='weatherCondition'>
            <p>{condition}</p>
            <h4>{climate}</h4>
        </div>
    )
}