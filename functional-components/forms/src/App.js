import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BigForm from "./components/BigForm";
import SmallForm from './components/SmallForm';

function App() {
  return (
    <div className="App">
      <div id="formContainer">
        {/* <BigForm/> */}
        <SmallForm/>
      </div>
    </div>
  );
}

export default App;
