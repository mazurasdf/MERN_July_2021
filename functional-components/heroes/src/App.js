import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CharacterBox from './components/CharacterBox';
import { useState } from 'react';
import Form from './components/Form';

function App() {
  const [characters, setCharacters] = useState([
    {
      name: "Yoshi",
      isGood: true,
      powers: ["eat things", "throw eggs"]
    },
    {
      name: "Mr.Burns",
      isGood: false,
      powers: ["rich", "nuclear power"]
    }
  ])

  const onCheckbox = (idx) => {
    const temp = {
      ...characters[idx],
      isGood: !characters[idx].isGood
    }

    setCharacters([
      ...characters.slice(0,idx),
      temp,
      ...characters.slice(idx+1)
    ])
  }

  const onDeleteHandler = (idx) => {
    setCharacters([
      ...characters.slice(0,idx),
      ...characters.slice(idx+1)
    ])
  }

  const onSubmitPower = (event, idx, power) => {
    event.preventDefault();
    
    const temp = {
      ...characters[idx]
    }
    temp.powers.push(power);

    setCharacters([
      ...characters.slice(0,idx),
      temp,
      ...characters.slice(idx+1)
    ])
  }

  const Snap = () => {
    console.log("snap");
    let rand = Math.floor(Math.random() * 2);
    
    let snapped = characters.filter(()=>Math.floor(Math.random() * 2));
    console.log(snapped);
    setCharacters(snapped);
  }

  return (
    <div className="App">
      <h1>hey it's me!</h1>
      <button onClick={Snap} className="btn btn-warning">snap</button>
      <Form characters={characters} setCharacters={setCharacters}/>
      {
        characters.map((character, idx)=>{
          return <CharacterBox onDeleteHandler={onDeleteHandler} onSubmitPower={onSubmitPower} onCheckbox={onCheckbox} character={character} key={idx} idx={idx}/>
        })
      }
    </div>
  );
}

export default App;
