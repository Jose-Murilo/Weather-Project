export interface WeatherDataProps {
    location: {
        name: string;
        region: string;
        country: string;
    }
    current: {
        temp_c: number;
        condition: {
            icon: string;
            text: string;
        }
        feelslike_c: number;
        wind_kph: number;
        humidity: number;
        precip_mm: number;
    }
    forecast: {
        forecastday: [{
            date: string;
            day: {
                maxtemp_c: number;
                mintemp_c: number;
                condition: {
                    icon: string;
                }
            }
        }]
    }
}