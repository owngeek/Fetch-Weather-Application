import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from "./Component/WeatherComponent"
import "../src/style.css"
import "../node_modules/weather-icons/css/weather-icons.min.css"
import Form from "./Component/FormComponent"

//api call api.openweathermap.org/data/2.5/weather?q=London,uk
const API_key="27ecf5d8c37430c80d0e1c9311b0caa9"

class App extends React.Component{
constructor(){
  super()
  this.state={
    city:undefined,
    country:undefined,
    icon:undefined,
    main:undefined,
    celsious:undefined,
    temp_max:undefined,
    temp_min:undefined,
    description:"",
    error:false

  }


  
this.weathericon = {
  Thunderstorm:"wi wi-thunderstorm display-1",
  Drizzle:"wi wi-sleet display-1",
  Rain:" wi wi-storm-showers display-1",
  Snow:"wi wi-snow display-1",
  Atmosphere:"wi wi-fog display-1",
  Clear:"wi wi-day-sunny display-1",
  Clouds:"wi wi-day-fog display-1"
}
  
}
calcelsious(temp){
  let cell = Math.floor(temp - 273.15)
  return cell;
}

get_weathericon(icons,rangeId){
switch(true){
  case rangeId>=200 && rangeId<=232:
  this.setState({icon:this.weathericon.Thunderstorm})
  break
  case rangeId>=300 && rangeId<=321:
  this.setState({icon:this.weathericon.Drizzle})
  break
  case rangeId>=500 && rangeId<=531:
  this.setState({icon:this.weathericon.Rain})
  break
    
  case rangeId>=600 && rangeId<=622:
  this.setState({icon:this.weathericon.Snow})
  break
  case rangeId>=701 && rangeId<=781:
  this.setState({icon:this.weathericon.Atmosphere})
  break
  case rangeId === 800:
  this.setState({icon:this.weathericon.Clear})
  break
  case rangeId>=801 && rangeId<=804:
  this.setState({icon:this.weathericon.Clouds})
  break
  default:
  this.setState({icon:this.weathericon.Clouds})
}
}

getWeather = async (e) => {
  e.preventDefault();
  const city=e.target.elements.city.value;
  const country=e.target.elements.country.value;

  if(city && country){
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}` );
    const response = await api_call.json()
    
    console.log(response)
    
    this.setState({
      city:`${response.name},${response.sys.country}`,
      celsious:this.calcelsious(response.main.temp),
      temp_max:this.calcelsious(response.main.temp_max),
      temp_min:this.calcelsious(response.main.temp_min),
      description:response.weather[0].description,
      error:false
    
    })
    
    this.get_weathericon(this.weathericon,response.weather[0].id)
    


  }else{
    this.setState({error:true})
  }



}

render(){
  return (
    <div>
      <div className="bg"></div>
      <Form loadweather={this.getWeather} error={this.state.error}/>
     <Weather
     city={this.state.city}
     country={this.state.country}
     temp_celcious={this.state.celsious}
     temp_min={this.state.temp_min}
     temp_max={this.state.temp_max}
     description={this.state.description}
     weathericon={this.state.icon}
     />


    </div>
  );
}
}
export default App;
