import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [breweries, setBreweries] = useState([]);
  const [city, setCity] = useState("");

  const getBreweries = (event) => {
    event.preventDefault();

    fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}&per_page=50`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setBreweries(res);
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <h1>Find a brewery!</h1>
      <form onSubmit={getBreweries}>
        <input type="text" className="form-control w-25 m-auto mb-3" onChange={(event)=>setCity(event.target.value)}/>

        <input type="submit" className="btn btn-lg btn-warning" value="Get Breweries"/>
      </form>

      <ul>
        {
          breweries.map((item, idx) => {
            return <li key={idx}>
                <h1>{item.name}</h1>
                <h3><i>{item.street}, {item.city}</i></h3>
              </li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
