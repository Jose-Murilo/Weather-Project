import './style.css'

export function WeatherCondition({ climate, condition }) {
    return (
        <div className='weatherCondition'>
            <p>{condition}</p>
            <h4>{climate}</h4>
        </div>
    )
}