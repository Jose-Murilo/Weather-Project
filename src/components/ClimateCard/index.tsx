import './style.css'

type ClimateCardProps = {
    climate: string;
    condition: string;
}

export function ClimateCard({ climate, condition }: ClimateCardProps) {
    return (
        <div className='weatherCondition'>
            <h4>{condition}</h4>
            <p>{climate}</p>
        </div>
    )
}