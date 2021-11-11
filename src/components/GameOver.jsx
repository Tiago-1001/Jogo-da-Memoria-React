import React from "react";

export function GameOver(props) {
  return (props.show?
    <section id="gameOver">
        <div>
            <h2>Buuh!!</h2>
            <p>Parabéns, você terminou esse jogo da memória.</p>
            <p>Experimente jogar uma outra dificuldade ou jogue na mesma novamente.</p>
            <button id="restart" onClick={props.handleRestart}>Jogue novamente</button>
        </div>
    </section> :
    <></>
  )
}