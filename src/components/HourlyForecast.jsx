import { motion } from "framer-motion"

function HourlyForecast({ weather, degree, colors }) {
    const hourlyWeather = weather.list?.slice(0, 8)
    const unix = degree ? "° C" : "° F"

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                style={colors} className="later__container">
                <p>Forecast</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}

                className="hourly__forecast" style={colors}>
                {
                    hourlyWeather?.map((e, index) => {
                        const dt = new Date(e.dt_txt + "Z")
                        const hour = `${dt.toString(Date()).split(" ")[4].split(":")[0]} hs`
                        const icon = `${e.weather?.[0].icon}.png`
                        const wind = `Wind: ${(e.wind.speed * 1.6).toFixed(2)} km/h`
                        const humidity = `Humidity: ${e.main?.humidity}%`
                        const rainProb = `Prob. Rain: ${Math.round(e.pop * 100)}%`
                        const temp = degree
                            ? `${Math.floor(e.main?.temp - 273.15)}${unix}`
                            : `${Math.floor((e.main?.temp - 273.15) * 1.8 + 32)}${unix}`
                        return (
                            <div key={index} className="forecast__container">
                                <p>{hour}</p>
                                <div className="icon__container">
                                    <div>
                                        <p>{temp}</p>
                                    </div>
                                    <div className="div__icon">
                                        <motion.img
                                            animate={{ y: [10, 0, 10], scale: [1, 0.8, 1] }}
                                            transition={{ duration: 6, repeat: Infinity }}
                                            src={icon} alt="icon.png" />
                                    </div>
                                </div>
                                <div className="div__forecast-data">
                                    <div>
                                        <span><i className="fa-solid fa-wind"></i></span>
                                        <span>{wind}</span>
                                    </div>
                                    <div>
                                        <span><i className="fa-solid fa-droplet"></i></span>
                                        <span>{humidity}</span>
                                    </div>
                                    <div>
                                        <span><i className="fa-solid fa-cloud-rain"></i></span>
                                        <span>{rainProb}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </motion.div>
        </>
    )
}

export default HourlyForecast