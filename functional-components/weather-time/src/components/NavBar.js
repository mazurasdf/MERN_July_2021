import React, { useState } from "react";
import {navigate} from "@reach/router";
import axios from "axios";

const NavBar = (props) => {
    const [locations, setLocations] = useState([
        {name:"Chicago",woeid:2379574},
        {name:"Columbus", woeid:2383660},
        {name:"Austin",woeid:2357536},
        {name:"New York",woeid:2459115}
    ])

    const [form, setForm] = useState("");

    const onChangeCity = (event) => {
        console.log(event.target.value);
        navigate(`/${event.target.value}`);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        
        axios.get(`https://www.metaweather.com/api/location/search/?query=${form}`)
            .then(res=>{
                console.log(res.data);
                if(res.data.length > 0){
                    let newCity = {
                        name: res.data[0].title,
                        woeid: res.data[0].woeid
                    }

                    setLocations([...locations, newCity]);
                }
                else{
                    alert("City not found?!?");
                }
            })
            .catch(err=>console.log(err))
    }

    return(
        <div className="navBar">
            <select className="form-select form-select-lg w-25" onChange={onChangeCity}>
                {
                    locations.map((item, idx)=>{
                        return <option key={idx} value={item.woeid}>{item.name}</option>
                    })
                }
            </select>

            <form onSubmit={onSubmitHandler} className="row">
                <div className="col-auto">
                    <input type="text" className="form-control input-lg" placeholder="add a new city" onChange={(event)=>setForm(event.target.value)}/>
                </div>
                <div className="col-auto">
                    <input type="submit" className="btn btn-lg btn-success" value="add"/>
                </div>
            </form>
        </div>
    )
}

export default NavBar;