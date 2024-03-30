import React, { useRef, useState } from 'react';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {Card} from '@mui/material'

import './Music.css'
// Import audio files
import song1 from '../assets/sounds/Nolie.mp3'
import song2 from '../assets/sounds/Venom.mp3'
import song3 from '../assets/sounds/Perfect.mp3'
import song4 from '../assets/sounds/Happier.mp3'
import song5 from '../assets/sounds/shape_of_you.mp3'
import song6 from '../assets/sounds/WithoutMe.mp3'
import song7 from '../assets/sounds/Enemy.mp3'
import song8 from '../assets/sounds/Heartbreak_Anniversary.mp3'
import song9 from '../assets/sounds/Human.mp3'
import song10 from '../assets/sounds/Bones.mp3'
// import image files
import img1 from '../assets/nolie.jpg'
import img2 from '../assets/OIP.jpeg'
import img3 from '../assets/perfect.jpeg'
import img4 from '../assets/Happier.jpg'
import img5 from '../assets/OIP1.jpeg'
import img6 from '../assets/widthout.jpeg'
import img7 from '../assets/Enemy.jpg'
import img8 from '../assets/Heart_break_anniversary.jpeg'
import img9 from '../assets/Human.jpg'
import img10 from '../assets/Bones.jpg'





const AudioPlayer = () => {
  const  audioPlayer=useRef(null)

  const [audioFiles] = useState([
    { src: song1, title: 'No Lie',Singer:"Dualipa ft-Sean Paul",image:img1 },
    { src: song2, title: 'Venom',Singer:"Eminem",image:img2 },
    { src: song3, title:'Perfect',Singer:"Ed Sheeran",image:img3},
    { src: song4,  title:'Happier',Singer:'Ed Sheeran',image:img4},
    { src: song5, title:"Shape of You",Singer:"Ed Sheeran",image:img5},
    { src: song6, title:"With out Me",Singer:"Eninem",image:img6},
    { src: song7, title:"Enemy",Singer:"Tommy Profit",image:img7},
    { src: song8, title:"Heart Break Anniversary",Singer:"GIVEON",image:img8},
    { src: song9, title:"Human",Singer:"Ragn'Bone Man",image:img9},
    { src: song10, title:"Bones",Singer:"Imagine Dragon",image:img10}




  ]);

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    audioPlayer.current.play();
  };


  const handlePause = () => {
    setIsPlaying(false);
    audioPlayer.current.pause()
  };

  const handleNext = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % audioFiles.length);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === 0 ? audioFiles.length - 1 : prevIndex - 1
    );
  };
  const handleEnded = () => {
    handleNext();
  };

  return (
    <div className='Container'>
      <Card className='card'>
      <h1>Audio Player</h1>
      
      
        <div className='card-head'>
          <div className="image">
           <img src={audioFiles[currentTrackIndex].image} alt="song" />
           </div>
           <audio autoPlay
            ref={audioPlayer}
            onEnded={handleEnded}
            src={audioFiles[currentTrackIndex].src} /><br/>

        <div className='controls'>    
        <button onClick={handlePrev}><SkipPreviousIcon className='svg'/></button>
        {isPlaying ? (
          <button onClick={handlePause}><PauseIcon className='svg' /></button>
        ) : (
          <button onClick={handlePlay}><PlayArrowIcon className='svg' /></button>
        )}
        <button onClick={handleNext}><SkipNextIcon className='svg' />
        </button>
        </div>
        <div className='details'> 

        <h2><span>Song:</span>{audioFiles[currentTrackIndex].title}</h2>
        <p><span>Singer:</span>{audioFiles[currentTrackIndex].Singer}</p>
       
       </div>
      </div>
      </Card>
    </div>
  );
};

export default AudioPlayer;
