import React, { useEffect, useState } from "react";
import randomArray from "../utils/array";

function Graph() {
  const [items, setItems] = useState([]);
  let space = 10;
  const width = 300;
  const height = 110;

  useEffect(() => {
    setItems(randomArray(10, 100));
  }, []);

  return (
    <>
      <button onClick={() => setItems(randomArray(10, 100))}>
        Generate Array
      </button>

      <svg viewBox={`0 0 ${width} ${height}`}>
        {items.map((item) => {
          return (
            <rect
              x={(space += 20)}
              y={height - item - 2}
              width="10"
              height={item + 2}
              fill="#348AA7"
            />
          );
        })}
      </svg>
    </>
  );
}

export default Graph;
