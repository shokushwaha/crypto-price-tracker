import { useEffect, useState } from "react";
import Axios from "axios";
import Coin from "./coin";

import './Home.css'
function App() {
  const [listCoins, setListCoins] = useState([]);
  const [searchWord, setSearch] = useState("");

  useEffect(() => {

    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response) => {
        setListCoins(response.data.coins);
        console.log(response.data)
      }
    );


  }, []);

  const filteredCoins = listCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  return (
    <>

      <div className="App">
        

        <div className="cryptoHeader">

          <span className="intro">
            Top 100 cryptocurrency price
          </span>
          <input
          autoFocus
            type="text"
            placeholder="Crypto...."
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>



        <div className="cryptoDisplay">
          {filteredCoins.map((coin) => {
            return (
              <Coin
                name={coin.name}
                icon={coin.icon}
                price={coin.price}
                symbol={coin.symbol}
              />
            );
          })}
        </div>
      </div >

    </>
  );
}

export default App;
