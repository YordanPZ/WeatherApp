

const example =  [
    {
        "clouds": {
            "all": 98
        },
        "dt": 1694584800,
        "dt_txt": "2023-09-13 06:00:00",
        "main": {
            "feels_like": 284.12,
            "grnd_level": 1018,
            "humidity": 58,
            "pressure": 1022,
            "sea_level": 1022,
            "temp": 285.33,
            "temp_kf": 0.7,
            "temp_max": 285.33,
            "temp_min": 284.63
        },
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "overcast clouds",
                "icon": "04n",
                "id": 804,
                "main": "Clouds"
            }
        ],
        "wind": {
            "deg": 8,
            "gust": 4.52,
            "speed": 3.83
        }
    },
    {
        "clouds": {
            "all": 99
        },
        "dt": 1694595600,
        "dt_txt": "2023-09-13 09:00:00",
        "main": {
            "feels_like": 283.01,
            "grnd_level": 1019,
            "humidity": 65,
            "pressure": 1021,
            "sea_level": 1021,
            "temp": 284.16,
            "temp_kf": 0.76,
            "temp_max": 284.16,
            "temp_min": 283.4
        },
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "overcast clouds",
                "icon": "04n",
                "id": 804,
                "main": "Clouds"
            }
        ],
        "wind": {
            "deg": 350,
            "gust": 3.64,
            "speed": 2.82
        }
    },
    {
        "clouds": {
            "all": 100
        },
        "dt": 1694606400,
        "dt_txt": "2023-09-13 12:00:00",
        "main": {
            "feels_like": 282.56,
            "grnd_level": 1021,
            "humidity": 66,
            "pressure": 1023,
            "sea_level": 1023,
            "temp": 283.72,
            "temp_kf": 0,
            "temp_max": 283.72,
            "temp_min": 283.72
        },
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "overcast clouds",
                "icon": "04d",
                "id": 804,
                "main": "Clouds"
            }
        ],
        "wind": {
            "deg": 326,
            "gust": 2.5,
            "speed": 2.36
        }
    },
    {
        "clouds": {
            "all": 100
        },
        "dt": 1694617200,
        "dt_txt": "2023-09-13 15:00:00",
        "main": {
            "feels_like": 285.82,
            "grnd_level": 1021,
            "humidity": 50,
            "pressure": 1023,
            "sea_level": 1023,
            "temp": 287.07,
            "temp_kf": 0,
            "temp_max": 287.07,
            "temp_min": 287.07
        },
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "overcast clouds",
                "icon": "04d",
                "id": 804,
                "main": "Clouds"
            }
        ],
        "wind": {
            "deg": 311,
            "gust": 2.13,
            "speed": 1.14
        }
    },
    {
        "clouds": {
            "all": 99
        },
        "dt": 1694628000,
        "dt_txt": "2023-09-13 18:00:00",
        "main": {
            "feels_like": 286.13,
            "grnd_level": 1018,
            "humidity": 50,
            "pressure": 1021,
            "sea_level": 1021,
            "temp": 287.35,
            "temp_kf": 0,
            "temp_max": 287.35,
            "temp_min": 287.35
        },
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "overcast clouds",
                "icon": "04d",
                "id": 804,
                "main": "Clouds"
            }
        ],
        "wind": {
            "deg": 39,
            "gust": 3.07,
            "speed": 1.77
        }
    },
    {
        "clouds": {
            "all": 44
        },
        "dt": 1694638800,
        "dt_txt": "2023-09-13 21:00:00",
        "main": {
            "feels_like": 285.81,
            "grnd_level": 1018,
            "humidity": 48,
            "pressure": 1020,
            "sea_level": 1020,
            "temp": 287.11,
            "temp_kf": 0,
            "temp_max": 287.11,
            "temp_min": 287.11
        },
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "scattered clouds",
                "icon": "03d",
                "id": 802,
                "main": "Clouds"
            }
        ],
        "wind": {
            "deg": 95,
            "gust": 3.12,
            "speed": 0.75
        }
    },
    {
        "clouds": {
            "all": 27
        },
        "dt": 1694649600,
        "dt_txt": "2023-09-14 00:00:00",
        "main": {
            "feels_like": 284.72,
            "grnd_level": 1019,
            "humidity": 65,
            "pressure": 1022,
            "sea_level": 1022,
            "temp": 285.71,
            "temp_kf": 0,
            "temp_max": 285.71,
            "temp_min": 285.71
        },
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "scattered clouds",
                "icon": "03n",
                "id": 802,
                "main": "Clouds"
            }
        ],
        "wind": {
            "deg": 63,
            "gust": 6.14,
            "speed": 4.85
        }
    },
    {
        "clouds": {
            "all": 93
        },
        "dt": 1694660400,
        "dt_txt": "2023-09-14 03:00:00",
        "main": {
            "feels_like": 284.22,
            "grnd_level": 1019,
            "humidity": 67,
            "pressure": 1022,
            "sea_level": 1022,
            "temp": 285.21,
            "temp_kf": 0,
            "temp_max": 285.21,
            "temp_min": 285.21
        },
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "overcast clouds",
                "icon": "04n",
                "id": 804,
                "main": "Clouds"
            }
        ],
        "wind": {
            "deg": 45,
            "gust": 4.9,
            "speed": 3.74
        }
    },
    {
        "clouds": {
            "all": 52
        },
        "dt": 1694671200,
        "dt_txt": "2023-09-14 06:00:00",
        "main": {
            "feels_like": 282.79,
            "grnd_level": 1019,
            "humidity": 71,
            "pressure": 1021,
            "sea_level": 1021,
            "temp": 283.81,
            "temp_kf": 0,
            "temp_max": 283.81,
            "temp_min": 283.81
        },
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "broken clouds",
                "icon": "04n",
                "id": 803,
                "main": "Clouds"
            }
        ],
        "wind": {
            "deg": 14,
            "gust": 3.56,
            "speed": 2.59
        }
    },
    {
        "clouds": {
            "all": 1
        },
        "dt": 1694682000,
        "dt_txt": "2023-09-14 09:00:00",
        "main": {
            "feels_like": 282.28,
            "grnd_level": 1018,
            "humidity": 75,
            "pressure": 1021,
            "sea_level": 1021,
            "temp": 283.26,
            "temp_kf": 0,
            "temp_max": 283.26,
            "temp_min": 283.26
        },
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "clear sky",
                "icon": "01n",
                "id": 800,
                "main": "Clear"
            }
        ],
        "wind": {
            "deg": 311,
            "gust": 5.52,
            "speed": 3.43
        }
    },
    {
        "clouds": {
            "all": 3
        },
        "dt": 1694692800,
        "dt_txt": "2023-09-14 12:00:00",
        "main": {
            "feels_like": 283.21,
            "grnd_level": 1019,
            "humidity": 61,
            "pressure": 1022,
            "sea_level": 1022,
            "temp": 284.43,
            "temp_kf": 0,
            "temp_max": 284.43,
            "temp_min": 284.43
        },
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "clear sky",
                "icon": "01d",
                "id": 800,
                "main": "Clear"
            }
        ],
        "wind": {
            "deg": 310,
            "gust": 6.39,
            "speed": 4.27
        }
    },
    {
        "clouds": {
            "all": 69
        },
        "dt": 1694703600,
        "dt_txt": "2023-09-14 15:00:00",
        "main": {
            "feels_like": 287,
            "grnd_level": 1018,
            "humidity": 49,
            "pressure": 1020,
            "sea_level": 1020,
            "temp": 288.16,
            "temp_kf": 0,
            "temp_max": 288.16,
            "temp_min": 288.16
        },
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "broken clouds",
                "icon": "04d",
                "id": 803,
                "main": "Clouds"
            }
        ],
        "wind": {
            "deg": 340,
            "gust": 5.48,
            "speed": 4.1
        }
    },
    {
        "clouds": {
            "all": 85
        },
        "dt": 1694714400,
        "dt_txt": "2023-09-14 18:00:00",
        "main": {
            "feels_like": 287.91,
            "grnd_level": 1016,
            "humidity": 50,
            "pressure": 1018,
            "sea_level": 1018,
            "temp": 288.97,
            "temp_kf": 0,
            "temp_max": 288.97,
            "temp_min": 288.97
        },
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "overcast clouds",
                "icon": "04d",
                "id": 804,
                "main": "Clouds"
            }
        ],
        "wind": {
            "deg": 16,
            "gust": 5.14,
            "speed": 4.25
        }
    },
    {
        "clouds": {
            "all": 99
        },
        "dt": 1694725200,
        "dt_txt": "2023-09-14 21:00:00",
        "main": {
            "feels_like": 287.88,
            "grnd_level": 1015,
            "humidity": 56,
            "pressure": 1018,
            "sea_level": 1018,
            "temp": 288.8,
            "temp_kf": 0,
            "temp_max": 288.8,
            "temp_min": 288.8
        },
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "overcast clouds",
                "icon": "04d",
                "id": 804,
                "main": "Clouds"
            }
        ],
        "wind": {
            "deg": 15,
            "gust": 5.09,
            "speed": 2.88
        }
    },
    {
        "clouds": {
            "all": 86
        },
        "dt": 1694736000,
        "dt_txt": "2023-09-15 00:00:00",
        "main": {
            "feels_like": 287.15,
            "grnd_level": 1015,
            "humidity": 64,
            "pressure": 1018,
            "sea_level": 1018,
            "temp": 287.94,
            "temp_kf": 0,
            "temp_max": 287.94,
            "temp_min": 287.94
        },
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "overcast clouds",
                "icon": "04n",
                "id": 804,
                "main": "Clouds"
            }
        ],
        "wind": {
            "deg": 354,
            "gust": 9.79,
            "speed": 5.04
        }
    },
    {
        "clouds": {
            "all": 100
        },
        "dt": 1694746800,
        "dt_txt": "2023-09-15 03:00:00",
        "main": {
            "feels_like": 285.94,
            "grnd_level": 1014,
            "humidity": 68,
            "pressure": 1017,
            "sea_level": 1017,
            "temp": 286.75,
            "temp_kf": 0,
            "temp_max": 286.75,
            "temp_min": 286.75
        },
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "overcast clouds",
                "icon": "04n",
                "id": 804,
                "main": "Clouds"
            }
        ],
        "wind": {
            "deg": 351,
            "gust": 15.89,
            "speed": 7.78
        }
    },
    {
        "clouds": {
            "all": 69
        },
        "dt": 1694757600,
        "dt_txt": "2023-09-15 06:00:00",
        "main": {
            "feels_like": 285.41,
            "grnd_level": 1014,
            "humidity": 67,
            "pressure": 1016,
            "sea_level": 1016,
            "temp": 286.29,
            "temp_kf": 0,
            "temp_max": 286.29,
            "temp_min": 286.29
        },
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "broken clouds",
                "icon": "04n",
                "id": 803,
                "main": "Clouds"
            }
        ],
        "wind": {
            "deg": 341,
            "gust": 16.77,
            "speed": 7.28
        }
    },
    {
        "clouds": {
            "all": 18
        },
        "dt": 1694768400,
        "dt_txt": "2023-09-15 09:00:00",
        "main": {
            "feels_like": 285,
            "grnd_level": 1012,
            "humidity": 65,
            "pressure": 1015,
            "sea_level": 1015,
            "temp": 285.97,
            "temp_kf": 0,
            "temp_max": 285.97,
            "temp_min": 285.97
        },
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "few clouds",
                "icon": "02n",
                "id": 801,
                "main": "Clouds"
            }
        ],
        "wind": {
            "deg": 335,
            "gust": 17.57,
            "speed": 7.3
        }
    },
    {
        "clouds": {
            "all": 13
        },
        "dt": 1694779200,
        "dt_txt": "2023-09-15 12:00:00",
        "main": {
            "feels_like": 286.11,
            "grnd_level": 1013,
            "humidity": 61,
            "pressure": 1015,
            "sea_level": 1015,
            "temp": 287.07,
            "temp_kf": 0,
            "temp_max": 287.07,
            "temp_min": 287.07
        },
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "few clouds",
                "icon": "02d",
                "id": 801,
                "main": "Clouds"
            }
        ],
        "wind": {
            "deg": 330,
            "gust": 16.77,
            "speed": 7.36
        }
    },
    {
        "clouds": {
            "all": 5
        },
        "dt": 1694790000,
        "dt_txt": "2023-09-15 15:00:00",
        "main": {
            "feels_like": 290.68,
            "grnd_level": 1011,
            "humidity": 47,
            "pressure": 1013,
            "sea_level": 1013,
            "temp": 291.56,
            "temp_kf": 0,
            "temp_max": 291.56,
            "temp_min": 291.56
        },
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "clear sky",
                "icon": "01d",
                "id": 800,
                "main": "Clear"
            }
        ],
        "wind": {
            "deg": 328,
            "gust": 11.02,
            "speed": 6.4
        }
    },
    {
        "clouds": {
            "all": 52
        },
        "dt": 1694800800,
        "dt_txt": "2023-09-15 18:00:00",
        "main": {
            "feels_like": 291.94,
            "grnd_level": 1007,
            "humidity": 50,
            "pressure": 1010,
            "sea_level": 1010,
            "temp": 292.63,
            "temp_kf": 0,
            "temp_max": 292.63,
            "temp_min": 292.63
        },
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "broken clouds",
                "icon": "04d",
                "id": 803,
                "main": "Clouds"
            }
        ],
        "wind": {
            "deg": 353,
            "gust": 10.68,
            "speed": 6.69
        }
    },
    {
        "clouds": {
            "all": 70
        },
        "dt": 1694811600,
        "dt_txt": "2023-09-15 21:00:00",
        "main": {
            "feels_like": 291,
            "grnd_level": 1006,
            "humidity": 57,
            "pressure": 1008,
            "sea_level": 1008,
            "temp": 291.61,
            "temp_kf": 0,
            "temp_max": 291.61,
            "temp_min": 291.61
        },
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "broken clouds",
                "icon": "04d",
                "id": 803,
                "main": "Clouds"
            }
        ],
        "wind": {
            "deg": 359,
            "gust": 14.27,
            "speed": 8.05
        }
    },
    {
        "clouds": {
            "all": 80
        },
        "dt": 1694822400,
        "dt_txt": "2023-09-16 00:00:00",
        "main": {
            "feels_like": 289.6,
            "grnd_level": 1007,
            "humidity": 62,
            "pressure": 1009,
            "sea_level": 1009,
            "temp": 290.22,
            "temp_kf": 0,
            "temp_max": 290.22,
            "temp_min": 290.22
        },
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "broken clouds",
                "icon": "04n",
                "id": 803,
                "main": "Clouds"
            }
        ],
        "wind": {
            "deg": 350,
            "gust": 15.83,
            "speed": 7.62
        }
    },
    {
        "clouds": {
            "all": 100
        },
        "dt": 1694833200,
        "dt_txt": "2023-09-16 03:00:00",
        "main": {
            "feels_like": 288.42,
            "grnd_level": 1006,
            "humidity": 68,
            "pressure": 1008,
            "sea_level": 1008,
            "temp": 289,
            "temp_kf": 0,
            "temp_max": 289,
            "temp_min": 289
        },
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "overcast clouds",
                "icon": "04n",
                "id": 804,
                "main": "Clouds"
            }
        ],
        "wind": {
            "deg": 349,
            "gust": 17.37,
            "speed": 8.2
        }
    },
    {
        "clouds": {
            "all": 69
        },
        "dt": 1694844000,
        "dt_txt": "2023-09-16 06:00:00",
        "main": {
            "feels_like": 287.88,
            "grnd_level": 1005,
            "humidity": 66,
            "pressure": 1007,
            "sea_level": 1007,
            "temp": 288.56,
            "temp_kf": 0,
            "temp_max": 288.56,
            "temp_min": 288.56
        },
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "broken clouds",
                "icon": "04n",
                "id": 803,
                "main": "Clouds"
            }
        ],
        "wind": {
            "deg": 340,
            "gust": 18.6,
            "speed": 8.19
        }
    },
    {
        "clouds": {
            "all": 0
        },
        "dt": 1694854800,
        "dt_txt": "2023-09-16 09:00:00",
        "main": {
            "feels_like": 287.27,
            "grnd_level": 1005,
            "humidity": 66,
            "pressure": 1007,
            "sea_level": 1007,
            "temp": 288.01,
            "temp_kf": 0,
            "temp_max": 288.01,
            "temp_min": 288.01
        },
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "clear sky",
                "icon": "01n",
                "id": 800,
                "main": "Clear"
            }
        ],
        "wind": {
            "deg": 337,
            "gust": 15.66,
            "speed": 6.33
        }
    },
    {
        "clouds": {
            "all": 1
        },
        "dt": 1694865600,
        "dt_txt": "2023-09-16 12:00:00",
        "main": {
            "feels_like": 288.31,
            "grnd_level": 1006,
            "humidity": 60,
            "pressure": 1009,
            "sea_level": 1009,
            "temp": 289.09,
            "temp_kf": 0,
            "temp_max": 289.09,
            "temp_min": 289.09
        },
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "clear sky",
                "icon": "01d",
                "id": 800,
                "main": "Clear"
            }
        ],
        "wind": {
            "deg": 322,
            "gust": 8.26,
            "speed": 4.2
        }
    },
    {
        "clouds": {
            "all": 0
        },
        "dt": 1694876400,
        "dt_txt": "2023-09-16 15:00:00",
        "main": {
            "feels_like": 291.79,
            "grnd_level": 1006,
            "humidity": 50,
            "pressure": 1008,
            "sea_level": 1008,
            "temp": 292.49,
            "temp_kf": 0,
            "temp_max": 292.49,
            "temp_min": 292.49
        },
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "clear sky",
                "icon": "01d",
                "id": 800,
                "main": "Clear"
            }
        ],
        "wind": {
            "deg": 348,
            "gust": 5.96,
            "speed": 3.2
        }
    },
    {
        "clouds": {
            "all": 0
        },
        "dt": 1694887200,
        "dt_txt": "2023-09-16 18:00:00",
        "main": {
            "feels_like": 291.96,
            "grnd_level": 1004,
            "humidity": 53,
            "pressure": 1006,
            "sea_level": 1006,
            "temp": 292.58,
            "temp_kf": 0,
            "temp_max": 292.58,
            "temp_min": 292.58
        },
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "clear sky",
                "icon": "01d",
                "id": 800,
                "main": "Clear"
            }
        ],
        "wind": {
            "deg": 33,
            "gust": 4.31,
            "speed": 3.65
        }
    },
    {
        "clouds": {
            "all": 0
        },
        "dt": 1694898000,
        "dt_txt": "2023-09-16 21:00:00",
        "main": {
            "feels_like": 291.96,
            "grnd_level": 1003,
            "humidity": 58,
            "pressure": 1005,
            "sea_level": 1005,
            "temp": 292.46,
            "temp_kf": 0,
            "temp_max": 292.46,
            "temp_min": 292.46
        },
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "clear sky",
                "icon": "01d",
                "id": 800,
                "main": "Clear"
            }
        ],
        "wind": {
            "deg": 61,
            "gust": 4.87,
            "speed": 2.5
        }
    },
    {
        "clouds": {
            "all": 0
        },
        "dt": 1694908800,
        "dt_txt": "2023-09-17 00:00:00",
        "main": {
            "feels_like": 289.55,
            "grnd_level": 1004,
            "humidity": 70,
            "pressure": 1007,
            "sea_level": 1007,
            "temp": 289.98,
            "temp_kf": 0,
            "temp_max": 289.98,
            "temp_min": 289.98
        },
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "clear sky",
                "icon": "01n",
                "id": 800,
                "main": "Clear"
            }
        ],
        "wind": {
            "deg": 84,
            "gust": 6.97,
            "speed": 4.11
        }
    },
    {
        "clouds": {
            "all": 0
        },
        "dt": 1694919600,
        "dt_txt": "2023-09-17 03:00:00",
        "main": {
            "feels_like": 288.47,
            "grnd_level": 1005,
            "humidity": 82,
            "pressure": 1007,
            "sea_level": 1007,
            "temp": 288.72,
            "temp_kf": 0,
            "temp_max": 288.72,
            "temp_min": 288.72
        },
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "clear sky",
                "icon": "01n",
                "id": 800,
                "main": "Clear"
            }
        ],
        "wind": {
            "deg": 68,
            "gust": 6.32,
            "speed": 2.73
        }
    },
    {
        "clouds": {
            "all": 0
        },
        "dt": 1694930400,
        "dt_txt": "2023-09-17 06:00:00",
        "main": {
            "feels_like": 287.89,
            "grnd_level": 1004,
            "humidity": 86,
            "pressure": 1006,
            "sea_level": 1006,
            "temp": 288.09,
            "temp_kf": 0,
            "temp_max": 288.09,
            "temp_min": 288.09
        },
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "clear sky",
                "icon": "01n",
                "id": 800,
                "main": "Clear"
            }
        ],
        "wind": {
            "deg": 77,
            "gust": 5.2,
            "speed": 2.71
        }
    },
    {
        "clouds": {
            "all": 3
        },
        "dt": 1694941200,
        "dt_txt": "2023-09-17 09:00:00",
        "main": {
            "feels_like": 287.51,
            "grnd_level": 1003,
            "humidity": 89,
            "pressure": 1006,
            "sea_level": 1006,
            "temp": 287.68,
            "temp_kf": 0,
            "temp_max": 287.68,
            "temp_min": 287.68
        },
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "clear sky",
                "icon": "01n",
                "id": 800,
                "main": "Clear"
            }
        ],
        "wind": {
            "deg": 71,
            "gust": 6.09,
            "speed": 3.44
        }
    },
    {
        "clouds": {
            "all": 4
        },
        "dt": 1694952000,
        "dt_txt": "2023-09-17 12:00:00",
        "main": {
            "feels_like": 289.14,
            "grnd_level": 1004,
            "humidity": 83,
            "pressure": 1007,
            "sea_level": 1007,
            "temp": 289.3,
            "temp_kf": 0,
            "temp_max": 289.3,
            "temp_min": 289.3
        },
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "clear sky",
                "icon": "01d",
                "id": 800,
                "main": "Clear"
            }
        ],
        "wind": {
            "deg": 69,
            "gust": 6.61,
            "speed": 4.24
        }
    },
    {
        "clouds": {
            "all": 10
        },
        "dt": 1694962800,
        "dt_txt": "2023-09-17 15:00:00",
        "main": {
            "feels_like": 291.8,
            "grnd_level": 1003,
            "humidity": 74,
            "pressure": 1005,
            "sea_level": 1005,
            "temp": 291.93,
            "temp_kf": 0,
            "temp_max": 291.93,
            "temp_min": 291.93
        },
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "clear sky",
                "icon": "01d",
                "id": 800,
                "main": "Clear"
            }
        ],
        "wind": {
            "deg": 87,
            "gust": 7.91,
            "speed": 5.2
        }
    },
    {
        "clouds": {
            "all": 47
        },
        "dt": 1694973600,
        "dt_txt": "2023-09-17 18:00:00",
        "main": {
            "feels_like": 293.85,
            "grnd_level": 998,
            "humidity": 73,
            "pressure": 1001,
            "sea_level": 1001,
            "temp": 293.82,
            "temp_kf": 0,
            "temp_max": 293.82,
            "temp_min": 293.82
        },
        "pop": 0.21,
        "rain": {
            "3h": 0.14
        },
        "sys": {
            "pod": "d"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "light rain",
                "icon": "10d",
                "id": 500,
                "main": "Rain"
            }
        ],
        "wind": {
            "deg": 89,
            "gust": 10.75,
            "speed": 7.32
        }
    },
    {
        "clouds": {
            "all": 100
        },
        "dt": 1694984400,
        "dt_txt": "2023-09-17 21:00:00",
        "main": {
            "feels_like": 294.41,
            "grnd_level": 999,
            "humidity": 78,
            "pressure": 1002,
            "sea_level": 1002,
            "temp": 294.21,
            "temp_kf": 0,
            "temp_max": 294.21,
            "temp_min": 294.21
        },
        "pop": 0.63,
        "rain": {
            "3h": 0.26
        },
        "sys": {
            "pod": "d"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "light rain",
                "icon": "10d",
                "id": 500,
                "main": "Rain"
            }
        ],
        "wind": {
            "deg": 136,
            "gust": 5.98,
            "speed": 3.92
        }
    },
    {
        "clouds": {
            "all": 100
        },
        "dt": 1694995200,
        "dt_txt": "2023-09-18 00:00:00",
        "main": {
            "feels_like": 290.74,
            "grnd_level": 1003,
            "humidity": 96,
            "pressure": 1005,
            "sea_level": 1005,
            "temp": 290.45,
            "temp_kf": 0,
            "temp_max": 290.45,
            "temp_min": 290.45
        },
        "pop": 0.88,
        "rain": {
            "3h": 0.82
        },
        "sys": {
            "pod": "n"
        },
        "visibility": 9019,
        "weather": [
            {
                "description": "light rain",
                "icon": "10n",
                "id": 500,
                "main": "Rain"
            }
        ],
        "wind": {
            "deg": 168,
            "gust": 7.47,
            "speed": 3.88
        }
    },
    {
        "clouds": {
            "all": 72
        },
        "dt": 1695006000,
        "dt_txt": "2023-09-18 03:00:00",
        "main": {
            "feels_like": 289.08,
            "grnd_level": 1004,
            "humidity": 95,
            "pressure": 1007,
            "sea_level": 1007,
            "temp": 288.96,
            "temp_kf": 0,
            "temp_max": 288.96,
            "temp_min": 288.96
        },
        "pop": 0.72,
        "rain": {
            "3h": 0.95
        },
        "sys": {
            "pod": "n"
        },
        "visibility": 10000,
        "weather": [
            {
                "description": "light rain",
                "icon": "10n",
                "id": 500,
                "main": "Rain"
            }
        ],
        "wind": {
            "deg": 186,
            "gust": 13.03,
            "speed": 6.77
        }
    }
]


const formattedData = example.reduce((acc, day) => {

    const dateObj = new Date(day.dt_txt)
    const dayName = dateObj.toLocaleDateString("es-ES", {weekday: "long"})
  
    let existingDay = acc.find(d => d.day === dayName)
  
    if (existingDay) {
  
      existingDay.temps.push(day.main.temp - 273.15)
      
      existingDay.maxTemp = Math.max(existingDay.maxTemp, day.main.temp_max - 273.15)
      
      existingDay.minTemp = Math.min(existingDay.minTemp, day.main.temp_min - 273.15)
  
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
  formattedData.forEach(day => {
    day.avgTemp = (day.temps.reduce((a, b) => a + b) / day.temps.length).toFixed(2)
  })
  
  // Obtener icono y descripción más repetidos
  formattedData.forEach(day => {
  
    const iconsMap = day.icons.reduce((acc, icon) => {
      acc[icon] = (acc[icon] || 0) + 1
      return acc
    }, {})
  
    day.topIcon = Object.keys(iconsMap).reduce((a, b) => iconsMap[a] > iconsMap[b] ? a : b)
  
    const descMap = day.descriptions.reduce((acc, desc) => {
      acc[desc] = (acc[desc] || 0) + 1
      return acc
    }, {})
  
    day.topDescription = Object.keys(descMap).reduce((a, b) => descMap[a] > descMap[b] ? a : b)
  
    if(day.topIcon.endsWith("n")) {
        day.topIcon = day.topIcon.slice(0, -1) + "d" 
      }
  })
  
  // Mapear a objeto resultado
  const result = formattedData.map(day => {
    return {
      day: day.day, 
      maxTemp: day.maxTemp.toFixed(2),
      minTemp: day.minTemp.toFixed(2),
      topIcon: day.topIcon,
      topDescription: day.topDescription,
      avgTemp: day.avgTemp
    }
  })
  
  console.log(result)
