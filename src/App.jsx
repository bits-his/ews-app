import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Regista from "./Regista";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Regista />
    </div>
  );
}

export default App;
