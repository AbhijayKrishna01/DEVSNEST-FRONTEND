import React, { useState } from "react";

function Card() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const decrementCount = () => {
    if (count > 0) setCount(count - 1);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

 

  return (
    <div className="inputField">
      <button className="btn" onClick={decrementCount}>Click to decrease by 1</button>
      <button className="btn" onClick={incrementCount}>Click to increase by 1</button>
      
      {isVisible && (
        <input className="inp"
          type="number"
          name="clicks"
          value={count}
          onChange={(event) => {
            setCount(event.target.value);
          }}
        />
      )}
    </div>
  );
}
export default Card;