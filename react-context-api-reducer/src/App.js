import React, { createContext, useReducer } from "react";
import "./App.css";
import Value from "./Value";
import Value1 from "./Value1";
import Value2 from "./Value2";
import Value3 from "./Value3";

//created a new context
export const CountContext = createContext();
const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;
    case "reset":
      return initialState;

    default:
      return state;
  }
};
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    //proovider component
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="app">
        <h1>Counter App</h1>
        <h2>{count}</h2>
        <Value />
        <Value1 />
        <Value2 />
        <Value3 />
      </div>
    </CountContext.Provider>
  );
}

export default App;
