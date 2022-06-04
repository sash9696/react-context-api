import React, { useContext } from "react";
import { CountContext } from "./App";
function Value3() {
  //   const countContext = useContext(CountContext);
  const { countDispatch } = useContext(CountContext);

  return (
    <div>
      <h1>Value3</h1>
      <button onClick={() => countDispatch("increment")}>Increment</button>
      <button onClick={() => countDispatch("decrement")}>Decrement</button>
      <button onClick={() => countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default Value3;
