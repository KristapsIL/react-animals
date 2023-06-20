import {useEffect, useState} from "react";

function App() {
  const [zoo, setZoo] = useState([]);

  useEffect(()=>{
    async function getData(){
      const response = await fetch("animals.json");
      const animals = await response.json();
      setZoo(animals);
    }
    getData();
  },[])

  const renderZoo = zoo.map((animal)=>{
    return (<article>
      <img src={animal["image"]} alt={animal["animal"]} />
      <div className="info">
        <h2>{animal["animal"]}</h2>
        <p>{animal["description"]}</p>
        <ul>
          {animal["answers"].map((singler) =>
            <li>{singler}</li>
          )}
        </ul>
      </div>
    </article>)
  })

  return <main>{renderZoo}</main>;
}

export default App;

