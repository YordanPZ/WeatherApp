import { backInOut, motion } from "framer-motion"
import { useState, useEffect } from "react"

function CurrentWeather({ weather, changeDegree, degree, colors }) {

    const unit = degree ? "° C" : "° F"
    const cToF = degree ? "Farenheit" : "Celsius"
    const city = `${weather.name?.trimEnd()}`
    const country = `${weather.sys?.country}`
    const icon = `${weather.weather?.[0].icon}.png`
    const description = weather.weather?.[0].description
    const humidity = ` Humidity: ${weather.main?.humidity}%`

    const feelsLike = degree
        ? `Feels Like: ${Math.floor(weather.main?.feels_like - 273.15)}${unit}`
        : `Feels Like: ${Math.floor((weather.main?.feels_like - 273.15) * 1.8 + 32)}${unit}`

    const degreesWeather = degree
        ? `${Math.floor(weather.main?.temp - 273.15)}${unit}`
        : `${Math.floor((weather.main?.temp - 273.15) * 1.8 + 32)}${unit}`

    const tempMax = degree
        ? `Max: ${Math.floor(weather.main?.temp_max - 273.15)}${unit}`
        : `Max: ${Math.floor((weather.main?.temp_max - 273.15) * 1.8 + 32)}${unit}`

    const tempMin = degree
        ? `Min: ${Math.floor(weather.main?.temp_min - 273.15)}${unit}`
        : `Min: ${Math.floor((weather.main?.temp_min - 273.15) * 1.8 + 32)}${unit}`

    function KeyMotionH2({ degreesWeather }) {
        const [key, setKey] = useState(0)

        useEffect(() => {
            setKey((prevKey) => prevKey + 1)
        }, [degreesWeather])

        return (
            <motion.h2
                key={key}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
            >
                {degreesWeather}
            </motion.h2>
        )
    }

    const handleClick = () => {
        changeDegree()
    }

    return (
        <>
            <motion.div
                initial={{ opacity: 0, filter: backInOut }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="current__weahter">
                <h1>{city}</h1>
                <span>{country}</span>
                <div className="current__degrees">
                    <KeyMotionH2 degreesWeather={degreesWeather} />
                    <motion.img
                        animate={{ y: [10, 0, 10], scale: [1, 0.8, 1] }}
                        transition={{ delay: 1, duration: 6, repeat: Infinity, }}

                        src={icon} alt="weather.png" />
                </div>
                <p>{description}</p>
                <div className="current__data">
                    <div className="humidity">
                        <div className="iconss">
                            <i className="fa-solid fa-droplet"></i>
                            <p>{humidity}</p>
                        </div>
                        <div className=" iconss">
                            <i className="fa-solid fa-temperature-half"></i>
                            <p>{feelsLike}</p>
                        </div>
                    </div>
                    <div className="humidity">
                        <div className="iconss">
                        <i className="fa-solid fa-temperature-full"></i>
                        <p>{tempMax}</p>
                        </div>
                        <div className="iconss">
                        <i className="fa-solid fa-temperature-empty"></i>
                        <p>{tempMin}</p>
                        </div>
                        
                        
                    </div>
                </div>
                <button style={colors} onClick={handleClick}>{cToF}</button>
            </motion.div>
        </>
    )
}
export default CurrentWeather