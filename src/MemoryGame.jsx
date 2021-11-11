import React, { useState } from "react";
import { GameOver } from './components/GameOver';

export function MemoryGame() {
  const [gameOver, setGamerOver] = useState(false);

  function restart() {
    setGamerOver(false);
  }

  return (
    <div>
      <GameOver show={gameOver} handleRestart={restart}/>
    </div>
  )
}