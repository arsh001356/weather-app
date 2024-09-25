import React from 'react'
import SearchBar from './components/SearchBar';
import Images from './components/Images';
import Temperature from './components/Temperature';
import City from './components/City';
import HumidityAndWindSpeed from './components/HumidityAndWindSpeed';
import { useState, useRef } from 'react';

function App() {
    async function fetchApi(cityName) {
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=14472d7a3b2924182c271b4548df54a6&units=metric`)
        if (!res.ok) {
            alert("Enter valid city name")
        }
        let data = await res.json()
        return data
    }

    const inpValue = useRef()
    const [weather, setWeather] = useState({
        NewCityName: "Enter City",
        CityTemp: 0,
        WindSpeed: 0,
        Humidity: 0,
        Image: "mist",
        CountryCode: "NA"
    })


    const handleOnClickSearch = async () => {
        const cityName = inpValue.current.value

        if (cityName !== "") {

            try {
                const data = await fetchApi(cityName)

                setWeather({
                    NewCityName: data.name,
                    CityTemp: Math.ceil(data.main.temp),
                    WindSpeed: data.wind.speed,
                    Humidity: data.main.humidity,
                    Image: data.weather[0].main || "mist",
                    CountryCode: data.sys.country,
                })

            } catch (error) {
                console.log(error)
            }
        }
    }


    return (
        <div className='w-screen h-screen bg-slate-900 flex justify-center items-center justify'>
            <div className='lg:w-[17.5rem] lg:h-[24rem] w-[55rem] h-[82rem] bg-gradient-to-tl from-indigo-500 from-13% via-sky-500 via-30% to-emerald-500 to-90% lg:rounded-xl rounded-3xl'>
                <SearchBar inpValue={inpValue} handleOnClickSearch={handleOnClickSearch} />
                <Images image={weather.Image.toLocaleLowerCase()} />
                <Temperature cityTemp={weather.CityTemp} />
                <City NewCityName={weather.NewCityName} countryCode={weather.CountryCode} />
                <HumidityAndWindSpeed humidity={weather.Humidity} windSpeed={weather.WindSpeed} />

            </div>
        </div>
    )
}

export default App