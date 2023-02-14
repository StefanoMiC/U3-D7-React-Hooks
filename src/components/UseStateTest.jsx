import { useState } from "react";
import { Button } from "react-bootstrap";

// REGOLE DEGLI HOOKS
// 1) USARE GLI HOOKS SOLO NEI COMPONENTI REACT A FUNZIONE
// 2) USARE GLI HOOKS SOLO NEL CORPO PRINCIPLAE DELLA FUNZIONE
// PRIMA DEL RETURN STATEMENT E FUORI DA BLOCCHI, CICLI, FUNZIONI, CONDIZIONI, ECC...

// state = {
//   name: "Stefano",
//   surname: "Miceli",
//   counter: 0
// };

const UseStateTest = props => {
  const [name, setName] = useState("Stefano"); // ["Stefano", f(){}], [valore,]
  const [surname, setSurname] = useState("Miceli");
  const [counter, setCounter] = useState(0);
  // 1° valore è la variabile che contiene il valore dello stato stesso
  // 2° valore è l'unica funzione in grado di assegnare il nuovo valore allo stato (1° valore)

  // per convenzione il secondo valore inizierà sempre per "set" + nome valore 1  es. [name, setName]

  // 3° è possibile inizializzare lo stato con un valore iniziale, inserendolo nelle parentesi di useState: es. useState("Stefano")

  return (
    <div>
      <p>Nome corrente: {name}</p>
      <Button onClick={() => setName(name === "Stefano" ? surname : "Stefano")}>Cliccami</Button>

      <h2 onClick={() => setCounter(counter + 1)} style={{ userSelect: "none" }}>
        Counter è {counter}
      </h2>
    </div>
  );
};

export default UseStateTest;
