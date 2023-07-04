import "./App.css"
import axios from "axios"
import { useEffect, useState } from "react"
import CurrentWeather from "./components/CurrentWeather"
import HourlyForecast from "./components/HourlyForecast"
import Button from "./components/Button"
import CityForm from "./components/CityForm"
import Loader from "./components/Loader"

function App() {

	const [actual, SetActual] = useState({})
	const [forecast, SetForecast] = useState({})
	const [degree, SetDegree] = useState(true)
	const [isNight, SetIsNight] = useState(true)
	const [isActual, SetIsActual] = useState(true)
	const [city, setCity] = useState("")
	const [latitud, setLatitud] = useState("")
	const [longitud, setLongitud] = useState("")
	const [showLoader, setShowLoader] = useState(true)

	useEffect(() => {

		if (isActual) {

			navigator.geolocation.getCurrentPosition(function (position) {

				const lat = position.coords?.latitude
				const long = position.coords?.longitude

				const hourlyForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=e0d6f71c252b07d7cdd10bd9b040387a`

				const currentWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=e0d6f71c252b07d7cdd10bd9b040387a`

				axios
					.get(hourlyForecast)
					.then(resp => SetForecast(resp.data),
						axios
							.get(currentWeather)
							.then((resp) => SetActual(resp.data), setShowLoader(false))
							.catch((err) => console.log(err))
					)
					.catch(error => console.error(error))
			}, function (error) {
				console.error(error)
			}, { enableHighAccuracy: true })
		} else {

			const custonForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitud}&lon=${longitud}&appid=e0d6f71c252b07d7cdd10bd9b040387a`

			const currentWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=e0d6f71c252b07d7cdd10bd9b040387a`

			axios
				.get(custonForecast)
				.then(resp => SetForecast(resp.data),
					axios
						.get(currentWeather)
						.then((resp) => SetActual(resp.data), setShowLoader(false))
						.catch((err) => console.log(err))
				)
				.catch(error => console.error(error))
		}
	}, [isActual, latitud, longitud])

	const handleSubmit = (event) => {
		event.preventDefault()

		if (city) {
			SetIsActual(false)
			const hourlyForecast = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=e0d6f71c252b07d7cdd10bd9b040387a`
			axios
				.get(hourlyForecast)
				.then(resp => setLatitud(resp.data[0].lat),
					axios
						.get(hourlyForecast)
						.then(resp => setLongitud(resp.data[0].lon), setShowLoader(false))
						.catch((err) => console.log(err))
				)
				.catch(error => console.error(error))
		}
	}

	const handleChange = (event) => {
		setCity(event.target.value)
	}

	let theme = isNight ? "/Mountain.jpg" : "/MountainDay.jpg"
	let dayColors = isNight
		? { "backgroundColor": "rgba(85, 55, 162, 0.37)" }
		: { "backgroundColor": "rgba(48, 136, 225, 0.563)" }

	let colors = isNight
		? { "backgroundColor": "rgba(126, 53, 228, 0.078)" }
		: { "backgroundColor": "rgba(48, 136, 225, 0.221)" }

	document.body.style = `
		background-image: url(${theme});
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		background-attachment: fixed;
		transition: 500ms;
	`
	const changeDegree = () => {
		SetDegree(!degree)
	}
	const changeTheme = () => {
		SetIsNight(!isNight)
	}

	return (
		<>
			{
				showLoader
					? <Loader />
					:
					<main>
						<section className="seach__bar">
							<CityForm handleSubmit={handleSubmit} handleChange={handleChange} colors={dayColors} />
						</section>
						<div>
							<Button changeTheme={changeTheme} />
						</div>
						<section className="section__weather">
							<CurrentWeather weather={actual} changeDegree={changeDegree} degree={degree} colors={colors} />
						</section>
						<section className="section__forecast">
							<HourlyForecast weather={forecast} degree={degree} colors={colors} />
						</section>
					</main>
			}
		</>
	)
}

export default App
