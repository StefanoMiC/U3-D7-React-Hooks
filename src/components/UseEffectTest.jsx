import { useState, useEffect } from "react";
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

const UseEffectTest = props => {
  // qui ci andranno i nostri hooks

  const [name, setName] = useState("Stefano"); // ["Stefano", f(){}], [valore, funzione]
  const [surname, setSurname] = useState("Miceli");
  const [counter, setCounter] = useState(0);
  // 1° valore è la variabile che contiene il valore dello stato stesso
  // 2° valore è l'unica funzione in grado di assegnare il nuovo valore allo stato (1° valore)

  // per convenzione il secondo valore inizierà sempre per "set" + nome valore 1  es. [name, setName]

  // 3° è possibile inizializzare lo stato con un valore iniziale, inserendolo nelle parentesi di useState: es. useState("Stefano")

  // useEffect porta i lifectyle methods nei componenti a funzione

  useEffect(() => {
    console.log("componentDidMount()");
  }, []); // come un componentDidMount

  useEffect(() => {
    console.log("componentDidUpdate 'senza freni'");
  }); // come un componentDidUpdate senza condizionali di guardia (utilizzo più raro)

  useEffect(() => {
    console.log("componentDidUpdate che si esegue solo quando cambia 'counter'");
  }, [counter]); // come un componentDidUpdate con il uso condizionale di guardia, che rieseguirà la funzione quando uno dei valori nella dependency list cambierà
  // la dependency list [counter] serve a creare quella condizione a protezione dell'esecuzione della callback, similarmente a come succedeva con componentDidUpdate e l'if statement

  useEffect(() => {
    return () => {
      console.log("ciao ciao UseEffectTest");
      // usato di solito per resettare setTimeout o setInterval
    };
  }, []); // componentWillUnmount

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

export default UseEffectTest;
