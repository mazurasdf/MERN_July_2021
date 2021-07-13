import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Album from './components/Album';

function App() {
  return (
    <div className="App">
      <h1>hey it's me!!</h1>
      <marquee>Hey it's me again!!!</marquee>
      <Album artistName="Tame Impala" albumName="Currents" imgLink="https://upload.wikimedia.org/wikipedia/en/9/9b/Tame_Impala_-_Currents.png" />

      <Album artistName="Foster the People" albumName="Sacred Hearts Club" imgLink="https://upload.wikimedia.org/wikipedia/en/4/41/Sacredheartsclub.jpg" />
    </div>
  );
}

export default App;
