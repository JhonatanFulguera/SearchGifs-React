import React, {useEffect, useState} from 'react';
import './App.css';
import Gifs from './components/Gifs';
import getGifs from "./services/getGifs.js"


function App() {
    const [gifs, setGifs] = useState([])
    useEffect(function (){
    getGifs({ keyword: "Spice and wolf" }).then(gifs => setGifs(gifs))
  }, [])
  
  return (
      <div className="App">
        <section className="App-content">
          {
            gifs.map(({ id, title, url }) => {
              return <Gifs 
              //es una buena practica usar una KEY
              // Tambien se puede heredar los valors (...singleG)
              key={id}
              title={title} 
              url={url} 
              id={id} />
            })
            }
        </section>
      </div>
    );
}

export default App;
