import React, { useState, useReducer } from "react";
import "./App.css";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  // const [count, setCount] = useState(0);

  const increment = () => {
    // setCount((prevCount) => prevCount + 1);
    dispatch({ type: "increment" });
  };

  const decrement = () => {
    // setCount((prevCount) => prevCount - 1);
    dispatch({ type: "decrement" });
  };

  return (
    <div className="app">
      <h1>Counter App</h1>
      <div>
        <button onClick={decrement}>-</button>
        <span>{state.count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default App;
