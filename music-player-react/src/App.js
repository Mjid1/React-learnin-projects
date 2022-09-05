import React, { Component }  from 'react';
import {useState, useEffect} from 'react';
import Player from './components/Player'

function App() {
  const [songs] = useState([
    {
      title: "Diamantes y Oro",
      artist: "Khaled Ft. Chawki",
      img_src: "./images/Khaled.jpg",
      src:"./music/Khaled.mp3",
    },
    {
      title: "Ila khtak jibek gari",
      artist: "Cheb bilal",
      img_src: "./images/Bilal.jpg",
      src:"./music/Bilal.mp3",
    }
    
  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() =>{
      if(currentSongIndex+1 >songs.length-1){
        return 0;
      }else{
        return currentSongIndex + 1;
      }
    })
  }, [currentSongIndex])

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
