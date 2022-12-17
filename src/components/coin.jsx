import React from "react";
import './coin.css'
function Coin({ name, icon, price, symbol }) {
  return (
    <div className="coin">
      <h1>   <span> {name}</span></h1>
      <img src={icon} />
      <h3>   Price: <span>  ${price}</span></h3>
      <h3> Symbol: <span>{symbol}</span></h3>
    </div>
  );
}

export default Coin;
