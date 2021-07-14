import './App.css';
import NavBar from './components/NavBar';
import WeatherPage from './views/WeatherPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from "@reach/router";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <WeatherPage path="/:woeid"/>
      </Router>
    </div>
  );
}

export default App;
