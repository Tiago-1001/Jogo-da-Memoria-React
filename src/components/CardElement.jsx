import React from "react";

export function CardElement(props) {
  return (
    <div id={props.card.id} className="card">
      <div className="card_front">
        <img className="icon" src={`assets/images${props.card.icon}`} alt={props.card.icon}/>
      </div>
      <div className="card_back">
        <img src="/assets/images/web.png"/>
      </div>
    </div>
  )
}