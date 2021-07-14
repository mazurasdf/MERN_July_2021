import React, { useEffect, useState } from "react";
import axios from "axios";
import Day from "../components/Day";

const WeatherPage = (props) => {
    const [weather, setWeather] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        setLoaded(false);
        console.log("fetching weather!");
        axios.get(`https://www.metaweather.com/api/location/${props.woeid}`)
            .then(res=>{
                setWeather(res.data.consolidated_weather);
                setLoaded(true);
            })
            .catch(err=>console.log(err))
    },[props.woeid])

    return(
        <div className="weatherPage">
            
            {
                loaded ?
                    weather.map((day,idx)=>{
                        return <Day key={idx} weather={day}/>
                    }) :
                    <div class="spinner-border" role="status">
                        <span class="sr-only"></span>
                    </div>
            }
        </div>
    )
}

export default WeatherPage;