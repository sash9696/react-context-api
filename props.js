import React from "react";
import "./App.css";

function Child({ name, title }) {
  return (
    <h1>
      Welcome to relevel {title} {name}
    </h1>
  );
}

function Parent({ name, title }) {
  return <Child name={name} title={title} />;
}

function Grandparent({ name, title }) {
  return <Parent name={name} title={title} />;
}

function App() {
  return <Grandparent name="Sujoy" title="Mr" />;
}

export default App;
