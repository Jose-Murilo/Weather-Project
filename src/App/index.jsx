import { useState, useEffect} from 'react';
import { GrSearch } from 'react-icons/gr';
import { BsThermometerHigh } from 'react-icons/bs'
import { WeatherCondition } from '../components/WeatherCondition'
import './style.css'

export function App() {

  const [text, setText] = useState('')
  const [searchedCity, setSearchedCity] = useState('jucas')
  const [weatherData, setWeatherData] = useState(null)
  const [nowDate, setNowDate] = useState()
  
  const API = `https://api.weatherapi.com/v1/forecast.json?key=fb85b303e1fe4286a2b15407223112&q=${searchedCity}&days=4&lang=pt`

  async function getCityWeather() {
    const response = await fetch(API)
    
    if (response.status === 200) {
      const data = await response.json();
      setWeatherData(data)
    } else if (response.status === 400) {
      alert("Cidade não encontrada")
    }
  }

  useEffect(() => {
    getCityWeather()
  }, [searchedCity])

  useEffect(() => {
    const timer = setInterval(() => {
      setNowDate(new Date().toLocaleString())
    }, 1000)

    return () => clearInterval(timer)
  })

  const handleChangeClick = () => {
    setSearchedCity(text);
  }

  const handleChange = (event) => {
    setText(event.target.value)
  }

  return (
    <div className="container">
      <div className="containerApp">
        <header>
          <h1>Previsão do Tempo</h1>
          <form action="">
            <label htmlFor="citySearchInput" className='srOnly'>Pesquisar nome da cidade</label>
            <input type="text" placeholder='Nome da cidade' id='citySearchInput' onChange={handleChange}/>
            <GrSearch className='searchIcon' />
            <button onClick={(event) => {
              event.preventDefault()
              handleChangeClick()
            } } className='searchButton'>Buscar</button>
          </form>
        </header>
        <main>
          <p></p>
          <p></p>
          {
            searchedCity && weatherData && (
              <article> 
            <section className='blockCityName'>
              <h2>{weatherData.location.name}, {weatherData.location.region}</h2>
              <p>{weatherData.location.country}, {nowDate}</p>
            </section>
            <section className='blockCurrentTime'>
              <div className="currentTime">
                <div className="blockDegree">
                  <BsThermometerHigh className='iconThermometer' />
                  <p className='degreeCurrent'>{weatherData.current.temp_c}º</p>
                  <p className='degreeMaxMin'>
                    <span className="degreeMax">{weatherData.forecast.forecastday[0].day.maxtemp_c}º</span>
                    <span className="degreeMin">{weatherData.forecast.forecastday[0].day.mintemp_c}º</span>
                  </p>
                </div>
                <div className="blockSituation">
                  <img src={weatherData.current.condition.icon} alt="icon" />
                    <div>
                      <p>{weatherData.current.condition.text}</p>
                      <p>Sensação Terminal {weatherData.current.feelslike_c}º</p>
                    </div>
                </div>
              </div>
            </section>
            <section className='containerWeatherCondition'>
              <WeatherCondition climate='Vento' condition={`${weatherData.current.wind_kph}km/h`} />
              <WeatherCondition climate='Umidade' condition={`${weatherData.current.wind_kph}%`} />
              <WeatherCondition climate='Chuva' condition={`${weatherData.current.wind_kph}mm`} />
            </section>
            <section className='containerWeatherForecast'>
              <ol>
                <li>Component "Map"</li>
              </ol>
            </section>
              </article>
            )
          }
        </main>
        <footer>
          <p>Web Developer Course - Júcas</p>
        </footer>
      </div>
    </div>
  )
}
