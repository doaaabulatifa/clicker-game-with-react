import React, { useEffect, useState } from "react";
import "./App.css";
import loughIcon from "./laugh.png";
import PurchaseItem from "./PurchaseItem";
import laughSound from "./laughaudio.mp3";

const jokes = [
  { id: 1, joke: "Why don't scientists trust atoms? Because they make up everything!" },
  { id: 2, joke: "What do you call fake spaghetti? An impasta!" },
  { id: 3, joke: "Your turn to tell a jock" },
  { id: 4, joke: "Why did the scarecrow win an award? Because he was outstanding in his field!" },
  { id: 5, joke: "Did you hear about the cheese factory that exploded? There was nothing left but de-brie." },
  { id: 6, joke: "Why did the math book look sad? Because it had too many problems." },
  { id: 7, joke: "What did one ocean say to the other ocean? Nothing, they just waved." },
  { id: 8, joke: "Why don't skeletons fight each other? They don't have the guts." },
  { id: 9, joke: "Why couldn't the bicycle stand up by itself? It was two-tired." },
  { id: 10, joke: "What did one hat say to the other hat? You stay here, I'll go on ahead." }
];
export default function App() {
  const [laughs, setLaughs] = useState(0);
  const [lps, setLps] = useState(1);
  const [audio, setAudio] = useState(new Audio(laughSound));
  const [currentJoke, setCurrentJoke] = useState(null);

  useEffect(() => {
    const myInterval = setInterval(() => {
      addLaugh();
    }, 1000 / lps);

    return () => {
      clearInterval(myInterval);
    };
  }, [lps]);

  function addLaugh() {
    setLaughs((currentLaughs) => currentLaughs + 1);
  }

  function playAudio() {
    audio.play();
  }

  function stopAudio() {
    audio.pause();
    audio.currentTime = 0;
  }

  function resetLaughs() {
    setLaughs(0);
    setLps(1);
    stopAudio();
  }

  function tellJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setCurrentJoke(jokes[randomIndex].joke);
  }

  return (
    <>
      <h1 className="h1">Laughing Collector</h1>
      <img className="img" onClick={() => { addLaugh(); playAudio(); tellJoke(); }} id="laugh" src={loughIcon} alt="Laughing" />
      <p className="p">You've laughed {laughs} laughs!</p>
      <p className="p">Laughs per second: {lps}</p>
      {currentJoke && <p id="joke">Joke: {currentJoke}</p>}
      <button onClick={stopAudio}>Stop loughing! it's not fuuny!</button>
      <button onClick={resetLaughs}>Sad Mood</button>
      <PurchaseItem laughs={laughs} setLaughs={setLaughs} lps={lps} setLps={setLps} />
      
    </>
  );
}
