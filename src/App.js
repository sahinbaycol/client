/* eslint-disable */
import { useEffect, useState } from "react";
import "./App.css";
import moment from "moment";
import clear from "./pics/clear.jpg"
import clouds from "./pics/clouds.jpg"
import axios from "axios";
import ContainerComponent from "./components/ContainerComponent";


function App() {


  const api = {
    key: "fc8f721bdcd4a0a04de581cf1e14eefc",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [weather, setWeather] = useState({});

  var exactdate = moment();
  var date = exactdate.format("YYYY-MM-DD");
  var dayofdate = exactdate.format("dddd");


  const STYLES={
    active:{
      backgroundColor:"blue",
      color:"black"
    },
    inactive:{
      backgroundColor:"black",
      color:"blue"
    }
  }


  const [filteredButton, setFilterButton] =useState(false)

  const filterHandler=(e)=> {
    
    setFilterButton(!filteredButton)

  }


  const daysofweek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const[ today, settoday] =useState([])

  const [changedDay, setChange] =useState([])
  
  const changeDayHandler =(item,dayofdate) => {
    if(item==='Monday' && dayofdate==='Monday') {
      weatherPicsHandler()
     setChange(weather.list.slice(0, 8)) 
     filterHandler()
    } else if (item==='Monday' && dayofdate==='Sunday') {
      weatherPicsHandler()
      setChange(weather.list.slice(8, 16)) 
      filterHandler()
    } else if (item==='Tuesday' && dayofdate==='Tuesday') {
      setChange(weather.list.slice(0, 8)) 
      filterHandler()
      weatherPicsHandler()
    } else if (item==='Tuesday' && dayofdate==='Monday') {
      weatherPicsHandler()
      setChange(weather.list.slice(8, 16))
      filterHandler() 
    } else if (item==='Wednesday' && dayofdate==='Wednesday') {
      weatherPicsHandler()
      setChange(weather.list.slice(0, 8)) 
      filterHandler()
    } else if (item==='Wednesday' && dayofdate==='Tuesday') {
      weatherPicsHandler()
      setChange(weather.list.slice(8, 16)) 
      filterHandler()
    } else if (item==='Thursday' && dayofdate==='Thursday') {
      weatherPicsHandler()
      setChange(weather.list.slice(0, 8)) 
      filterHandler()
    } else if (item==='Thursday' && dayofdate==='Wednesday') {
      weatherPicsHandler()
      setChange(weather.list.slice(8, 16)) 
      filterHandler()
    } else if (item==='Friday' && dayofdate==='Friday') {
      weatherPicsHandler()
      setChange(weather.list.slice(0, 8)) 
      filterHandler()
    } else if (item==='Friday' && dayofdate==='Thursday') {
      weatherPicsHandler()
      setChange(weather.list.slice(8, 16)) 
      filterHandler()
    } else if (item==='Saturday' && dayofdate==='Saturday') {
      weatherPicsHandler()
      setChange(weather.list.slice(0, 8)) 
      filterHandler()
    } else if (item==='Saturday' && dayofdate==='Friday') {
      weatherPicsHandler()
      setChange(weather.list.slice(8, 16))
      filterHandler() 
    } else if (item==='Sunday' && dayofdate==='Sunday') {
      weatherPicsHandler()
      setChange(weather.list.slice(0, 8)) 
      filterHandler()
    } else if (item==='Sunday' && dayofdate==='Saturday') {
      weatherPicsHandler()
      setChange(weather.list.slice(8, 16)) 
      filterHandler()
    }
  }

  const handlefiltereddays = () => {
    if (dayofdate === "Monday") {
      settoday(daysofweek.filter((item, index) => index === 0 || index === 1))
    } else if (dayofdate === "Tuesday") {
      settoday(daysofweek.filter((item, index) => index === 1 || index === 2))
    } else if (dayofdate === "Wednesday") {
      settoday(daysofweek.filter((item, index) => index === 2 || index === 3))
    } else if (dayofdate === "Thursday") {
      settoday(daysofweek.filter((item, index) => index === 3 || index === 4))
    } else if (dayofdate === "Friday") {
      settoday(daysofweek.filter((item, index) => index === 4 || index === 5))
    } else if (dayofdate === "Saturday") {
      settoday(daysofweek.filter((item, index) => index === 5 || index === 6))
    } else if (dayofdate === "Sunday") {
      settoday(daysofweek.filter((item, index) => index === 6 || index === 0))
    }
  };


 const WEATHERS=[
  {
    main:'Clear',
    image:clear
  },
  {
    main:'Clouds',
    image:clouds
  }
 ]
 
const [bgPic, setPic] =useState("")
  
const weatherPicsHandler =()=> {
  if(weather.list[0].weather[0].main==='Clear'){
    setPic(WEATHERS[0].image)
  } else if (weather.list[0].weather[0].main==='Clouds') {
    setPic(WEATHERS[1].image)
  }
}
 

  

  const [search, setSearch] = useState("");

  const searchPressed = () => {
    fetch(`${api.base}forecast?q=${search}&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        handlefiltereddays(dayofdate)
        console.log(result);
        console.log(WEATHERS)
      });
  };

  

  return (
    <div style={{backgroundImage:`url(${bgPic})`,
   backgroundRepeat:'no-repeat',
   backgroundSize:'cover'
    }} className="cardcontainer">
      <div className="navbar">
        
        <input className="searchbar"
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Name a City"
        ></input>
        <button className="search-button" onClick={searchPressed}>Search</button>
      </div>
      <div className="exact-date-container">
          <div className="exact-date">{date}</div>
          <div className="exact-date">{dayofdate}</div>
        </div>
      <div className="select-day-buttons-container"
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {today.map((item, index)=> {
          return(
            <button /*style={filteredButton === true ? STYLES.active :STYLES.inactive}*/ className="select-day-buttons" onClick={()=> {
              changeDayHandler(item,dayofdate)
            }} key={index}>{item}</button>
          )
        })}
      </div>
      <div className="contentcard">
        
          {typeof weather.city != "undefined" ? (
            <div className="cardtop">
              
              <p className="temptext">{weather.city.name}</p>
              {changedDay.map((hourlyforecast) => {
                return (
                  <div className="temp-date-container" key={hourlyforecast.dt}>
                    <p className="temp-date">{hourlyforecast.dt_txt}</p>
                    <p className="temptext">{Math.round(hourlyforecast.main.temp-273)}°C</p>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        
        
      </div>
    </div>
  );
}


export default App;
