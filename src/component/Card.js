import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      {props.cardValue}
    </div>
  )
}

export default Card