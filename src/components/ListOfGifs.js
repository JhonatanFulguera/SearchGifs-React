import React from "react";
import Gifs from "./Gifs";

export default function ListOfGifs({ gifs }){
    return ( gifs.map(({ id, title, url }) => {
                return <Gifs 
              //es una buena practica usar una KEY
              // Tambien se puede heredar los valors (...singleG)
                key={id}
                title={title} 
                url={url} 
                id={id} />
            })
            
    )
}