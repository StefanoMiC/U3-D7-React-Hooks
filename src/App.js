import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import UseEffectTest from "./components/UseEffectTest";
import { useState } from "react";
import { Button } from "react-bootstrap";

function App() {
  const [boolean, setBoolean] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {boolean && <UseEffectTest />}

        <Button variant="danger" onClick={() => setBoolean(!boolean)}>
          Click me
        </Button>
      </header>
    </div>
  );
}

export default App;
