import React from "react";
import "./PurchaseItem.css"; 

const items = [
  { name: "Giggle Booster", cost: 10, incrementValue: 1 },
  { name: "Laughter Amplifier", cost: 100, incrementValue: 10 },
  { name: "Chuckle Generator", cost: 1000, incrementValue: 100 },
  { name: "Snicker Machine", cost: 10000, incrementValue: 1000 },
  { name: "ROFLcopter", cost: 100000, incrementValue: 10000 }
];

export default function PurchaseItem({ laughs, setLaughs, lps, setLps }) {
  function purchaseItem(item) {
    if (laughs >= item.cost) {
      setLaughs((currentLaughs) => currentLaughs - item.cost);
      setLps((currentLps) => currentLps + item.incrementValue);
    } else {
      console.log("Hey, you're not rich enough to buy this yet! Keep laughing!");
    }
  }

  return (
    <div className="button-container">
      {items.map((item, index) => (
        <button
          key={index}
          onClick={() => purchaseItem(item)}
          disabled={laughs < item.cost}
          className={laughs < item.cost ? "button disabled" : "button"}
        >
          {laughs >= item.cost ? ` ${item.name} for ${item.cost} laughs` : "Loading another Joke,It's not that Fuuny yet"}
        </button>
      ))}
    </div>
  );
}
