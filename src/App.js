import React, {useEffect, useState} from 'react';
import './App.css';
import getGifs from "./services/getGifs.js"


function App() {
    const [gifs, setGifs] = useState([])
  useEffect(function (){
    getGifs({ keyword: "berserk" }).then(gifs => setGifs(gifs))
  }, [])
  
  return (
      <div className="App">
        <section className="App-content">
          {
            gifs.map(function(singleG){
              return <img src={singleG} />
            })
            }
        </section>
      </div>
    );
}

export default App;
