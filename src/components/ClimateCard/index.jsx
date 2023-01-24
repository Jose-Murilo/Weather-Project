import './style.css'

export function ClimateCard({ climate, condition }) {
    return (
        <div className='weatherCondition'>
            <h4>{condition}</h4>
            <p>{climate}</p>
        </div>
    )
}