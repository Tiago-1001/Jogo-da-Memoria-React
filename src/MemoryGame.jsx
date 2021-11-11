import React, { useState, useEffect } from "react";
import { GameBoard } from "./components/GameBoard";
import { GameOver } from './components/GameOver';
import game from './game/index';

export function MemoryGame() {
  const [gameOver, setGamerOver] = useState(false);
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    setCards(game.createCardsFromTechs())
  }, [])

  function restart() {
    game.clearCards();
    setCards(game.createCardsFromTechs());
    setGamerOver(false);
  }

  function handleFlip(card) {
    game.flipCard(card.id, ()=>{
      //gamerOverCallback
      setGamerOver(true)
    }, ()=>{
      //noMatchCallback
      setCards([...game.cards]);
    });
    setCards([...game.cards])
  }

  return (
    <div>
      <h1>Jogo da Memoria</h1>
      <GameBoard handleFlip={handleFlip} cards={cards}/>
      <GameOver show={gameOver} handleRestart={restart}/>
    </div>
  )
}