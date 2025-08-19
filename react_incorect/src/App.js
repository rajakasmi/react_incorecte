import React from "react";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <h1>Mon Application</h1>
      {/* Mauvais passage de props */}
      <Counter startValuee={5} />
    </div>
  );
}

export default App;
