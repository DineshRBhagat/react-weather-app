import React, { useState } from 'react'
import DisplayWeather from './DisplayWeather'

function WeatherInfo() {

  const APIKEY = "1933f19a2014b6c2508e96200290b91d"

  const [form, setForm] = useState({
    city:"",
    country:""
  })
  const [weather, setWeather] = useState([])

  async function weatherData(e) {
    e.preventDefault();
    if(form.city == ""){
      alert("Add value");
    }else{
      const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`
      ).then((res) => res.json())
      .then((data) => data)

      setWeather({
        data : data
      });
    }
  }
     

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value

    if (name == "city") {
      setForm({...form, city:value})
    }
    if (name == "country") {
      setForm({...form, country:value})
    }

  }

  return (
    <div className='main-container'>
      <div className='title'>
        <h1>Weather App</h1>
      </div>

      <form action="">
        <input type="text" name='city' placeholder='city' onChange={(e) => handleChange(e)}/>
        <input type="text" name='country' placeholder='country' onChange={(e) => handleChange(e)}/>
        <button onClick={(e) => weatherData(e)}>Submit</button>
      </form>

      {
        weather.data != undefined ? (
          <div>
            <DisplayWeather data = {weather.data} />
          </div>
        ) : null
      }
    </div>
  )
}

export default WeatherInfo
