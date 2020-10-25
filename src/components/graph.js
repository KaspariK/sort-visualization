import React, { useEffect, useState } from "react";
import randomArray from "../utils/array";

function Graph() {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(10);

  let space = 20;
  const height = 100;
  const width = 25;

  useEffect(() => {
    handleArrayGen();
  }, [count]);

  const handleArrayGen = () => {
    let testArr = randomArray(count, 100);
    setItems(testArr);
  };

  return (
    <>
      <div>
        <button onClick={handleArrayGen}>Generate Array</button>
        <input
          type="range"
          min="10"
          max="20"
          value={count.toString()}
          onChange={(e) => setCount(parseInt(e.target.value))}
        />
      </div>
      <div className="container">
        <svg width={count * width}>
          {items.map((item) => {
            return (
              <rect
                key={space}
                x={(space += 20)}
                y={height - item - 2}
                width="10"
                height={item + 2}
                fill="#348AA7"
              />
            );
          })}
        </svg>
      </div>
    </>
  );
}

export default Graph;
