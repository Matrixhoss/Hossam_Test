import { Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const WeatherPage = () => {

    useEffect(() => {
        
        getWeather()
    } ,[])
    const [locationData , setLocationData] = useState()
    const [weather , setWeather] = useState()
    const getWeather = async () => {
        await  navigator.geolocation.getCurrentPosition(
          (c) => setLocationData({lat : c.coords.latitude , lon : c.coords.latitude})
        )
       }
      
       useEffect(() => {
        locationData && axios.get(`https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${locationData.lat}&lon=${locationData.lon}&appid=9f3e69d707455b75e3242269584f7059`).then((d) => setWeather(d.data))
       } ,[locationData])

       console.log(weather)
  return (
    <div>
        
      {!weather? "Loading ..." : weather.list.map((w) => <Typography>{w.dt_txt}  ----------- ---------- Temp :{w.main.temp}C</Typography>)}
    </div>
  )
}

export default WeatherPage
