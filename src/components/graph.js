import React, { useEffect, useState } from "react";
import randomArray from "../utils/array";

function Graph() {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(10);

  let space = 20;
  const height = 110;
  const width = 25;
  const radix = 10;

  useEffect(() => {
    handleArrayGen();
  }, [count]);

  const handleArrayGen = () => {
    setItems(randomArray(count, 100));
  };

  const sortArray = () => {
    const sorted = [...items].sort((a, b) => +a - +b);
    console.log(sorted);
    setItems(sorted);
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
          onChange={(e) => setCount(parseInt(e.target.value, radix))}
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
      <div>
        <button onClick={sortArray}>Sort Array</button>
      </div>
    </>
  );
}

export default Graph;
