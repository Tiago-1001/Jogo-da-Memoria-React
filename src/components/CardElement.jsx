import React from "react";

export function CardElement(props) {
  return (
    <div onClick={() => {props.handleFlip(props.card)}} id={props.card.id} className={`card ${props.card.flipped ? "flip" : "" }`}>
      <div className="card-front">
        <img className="icon" 
        src={`/src/assets/images/${props.card.icon}.png`} alt={props.card.icon}/>
      </div>
      <div className="card-back">
        <img src="/src/assets/images/back.png"/>
      </div>
    </div>
  )
}