import React from "react";

const Day = (props) => {
    const convertToCelcius = (temp) => Math.floor(temp*(9/5)) + 32;

    return(
        <div className="day">
            <img src={`https://www.metaweather.com/static/img/weather/${props.weather.weather_state_abbr}.svg`} alt={props.weather.weather_state_name}/>
            <h4>{props.weather.applicable_date}</h4>
            
            <h3>{props.weather.weather_state_name}</h3>

            <div className="temps">
                <div className="lowTemp">{convertToCelcius(props.weather.min_temp)}</div> |
                <div className="highTemp">{convertToCelcius(props.weather.max_temp)}</div>
            </div>
        </div>
    )
}

export default Day;