
import React, { useState, useEffect } from "react";

function Counter({ startValue =0 }) {
  // Erreur : valeur initiale non définie
  const [count, setCount] = useState(startValue);

  // Erreur : useEffect avec mauvaise dépendance → boucle infinie
  useEffect(() => {
    console.log("Count changed:", count);
    
    
  }, [count]);

  return (
    <>
    <div>
      <p>Valeur actuelle: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
    <div><button onClick={() => setCount(count - 1)}>-</button>
    </div>
    <div><button onClick={() => setCount(startValue)}>Reset</button></div>
    </>
  );
}

export default Counter;
