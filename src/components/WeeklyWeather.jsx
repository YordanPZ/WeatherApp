import React from "react"
import { motion } from "framer-motion"

function WeeklyWeather({ weather, degree, colors }) {
  const formattedData = weather?.list?.reduce((acc, day) => {
    const dateObj = new Date(day.dt_txt)
    const dayName = dateObj.toLocaleDateString("es-ES", { weekday: "long" })

    let existingDay = acc.find((d) => d.day === dayName)

    if (existingDay) {
      existingDay.temps.push(day.main.temp - 273.15)

      existingDay.maxTemp = Math.max(
        existingDay.maxTemp,
        day.main.temp_max - 273.15
      )

      existingDay.minTemp = Math.min(
        existingDay.minTemp,
        day.main.temp_min - 273.15
      )

      existingDay.icons.push(day.weather[0].icon)

      existingDay.descriptions.push(day.weather[0].description)
    } else {
      existingDay = {
        day: dayName,
        temps: [day.main.temp - 273.15],
        maxTemp: day.main.temp_max - 273.15,
        minTemp: day.main.temp_min - 273.15,
        icons: [day.weather[0].icon],
        descriptions: [day.weather[0].description]
      }

      acc.push(existingDay)
    }

    return acc
  }, [])

  // Calcular promedios
  formattedData?.forEach((day) => {
    day.avgTemp = (
      day.temps.reduce((a, b) => a + b) / day.temps.length
    ).toFixed(2)
  })

  // Obtener icono y descripción más repetidos
  formattedData?.forEach((day) => {
    const iconsMap = day.icons.reduce((acc, icon) => {
      acc[icon] = (acc[icon] || 0) + 1
      return acc
    }, {})

    day.topIcon = Object.keys(iconsMap).reduce((a, b) =>
      iconsMap[a] > iconsMap[b] ? a : b
    )

    const descMap = day.descriptions.reduce((acc, desc) => {
      acc[desc] = (acc[desc] || 0) + 1
      return acc
    }, {})

    day.topDescription = Object.keys(descMap).reduce((a, b) =>
      descMap[a] > descMap[b] ? a : b
    )

    if (day.topIcon.endsWith("n")) {
      day.topIcon = day.topIcon.slice(0, -1) + "d"
    }
  })

  // Mapear a objeto resultado
  const result = formattedData
    ?.map((day) => {
      return {
        day: day.day,
        maxTemp: day.maxTemp.toFixed(2),
        minTemp: day.minTemp.toFixed(2),
        topIcon: day.topIcon,
        topDescription: day.topDescription,
        avgTemp: day.avgTemp
      }
    })
    .slice(1, 6)

  const unix = degree ? "° C" : "° F"
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={colors}
        className="later__container"
      >
        <p>Forecast (Weekly)</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="hourly__forecast"
        style={colors}
      >
        {result?.map((day, index) => {
          const temp = degree
            ? `${Math.floor(day.avgTemp)}${unix}`
            : `${Math.floor(day.avgTemp * 1.8 + 32)}${unix}`

          const tempMax = degree
            ? `Max: ${Math.floor(day.maxTemp)}${unix}`
            : `Max: ${Math.floor(
                (day.maxTemp) * 1.8 + 32
              )}${unix}`

          const tempMin = degree
            ? `Min: ${Math.floor(day.minTemp)}${unix}`
            : `Min: ${Math.floor(
                (day.minTemp) * 1.8 + 32
              )}${unix}`
          return (
            <div key={index} className="forecast__container">
              <p>{day.day}</p>
              <div className="icon__container">
                <div>
                  <p>{temp}</p>
                </div>
                <div className="div__icon">
                  <motion.img
                    animate={{ y: [10, 0, 10], scale: [1, 0.8, 1] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    src={`${day.topIcon}.png`}
                    alt="icon.png"
                  />
                </div>
              </div>
              <div className="div__forecast-data">
                <div>
                  <span style={{"fontSize": "40px"}}>{day.topDescription}</span>
                </div>
                <div>
                  <span>
                    <i className="fa-solid fa-temperature-full"></i>
                  </span>
                  <span>
                    {tempMax}
                  </span>
                </div>
                <div>
                  <span>
                    <i className="fa-solid fa-temperature-empty"></i>
                  </span>
                  <span>
                  {tempMin}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </motion.div>
    </>
  )
}

export default WeeklyWeather
