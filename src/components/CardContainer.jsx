import React from "react";
import CardComponent from "./CardComponent";
import moment from "moment";
import clear from "../pics/clear.jpg"
import { useState, useLayoutEffect } from "react";

function CardContainer({  }) {

 

  const api = {
    key: "fc8f721bdcd4a0a04de581cf1e14eefc",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [weather, setWeather] = useState({});

  var exactdate = moment();
  var date = exactdate.format("YYYY-MM-DD");
  var dayofdate = exactdate.format("dddd");

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
     setChange(weather.list.slice(0, 8)) 
    } else if (item==='Monday' && dayofdate==='Sunday') {
      setChange(weather.list.slice(8, 16)) 
    } else if (item==='Tuesday' && dayofdate==='Tuesday') {
      setChange(weather.list.slice(0, 8)) 
      weatherPicsHandler()
    } else if (item==='Tuesday' && dayofdate==='Monday') {
      setChange(weather.list.slice(8, 16)) 
    } else if (item==='Wednesday' && dayofdate==='Wednesday') {
      setChange(weather.list.slice(0, 8)) 
    } else if (item==='Wednesday' && dayofdate==='Tuesday') {
      setChange(weather.list.slice(8, 16)) 
    } else if (item==='Thursday' && dayofdate==='Thursday') {
      setChange(weather.list.slice(0, 8)) 
    } else if (item==='Thursday' && dayofdate==='Wednesday') {
      setChange(weather.list.slice(8, 16)) 
    } else if (item==='Friday' && dayofdate==='Friday') {
      setChange(weather.list.slice(0, 8)) 
    } else if (item==='Friday' && dayofdate==='Thursday') {
      setChange(weather.list.slice(8, 16)) 
    } else if (item==='Saturday' && dayofdate==='Saturday') {
      setChange(weather.list.slice(0, 8)) 
    } else if (item==='Saturday' && dayofdate==='Friday') {
      setChange(weather.list.slice(8, 16)) 
    } else if (item==='Sunday' && dayofdate==='Sunday') {
      setChange(weather.list.slice(0, 8)) 
    } else if (item==='Sunday' && dayofdate==='Saturday') {
      setChange(weather.list.slice(8, 16)) 
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
    main:'clear',
    image:clear
  }
 ]
 
const [bgPic, setPic] =useState('')
  
const weatherPicsHandler =()=> {
  if(weather.list[0].weather[0].main==='Clear'){
    setPic(WEATHERS[0].image)
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
      });
  };

  return (
    <div /*style={{backgroundImage:`url(${bgPic})`}}*/ className="cardcontainer">
      <div>
        {date}
        {dayofdate}

        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="search"
        ></input>
        <button onClick={searchPressed}>Search</button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {today.map((item, index)=> {
          return(
            <button onClick={()=> {
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

export default CardContainer;
