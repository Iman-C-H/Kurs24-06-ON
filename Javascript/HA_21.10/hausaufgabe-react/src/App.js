import logo from './logo.svg';
import './App.css';

function App() {
  let name = "Iman"
  let gruss = "Hallo, wie geht es dir"
  let handleClick = () => {
    alert(`Danke für's klicken!`);
  }

  return (
    <>
    <h1>Willommen zu meiner ersten React-App</h1>
    <h2 style= {{color: "blue"}}> {gruss} {name} </h2>
    <h3 style= {{color: "purple"}}> Es geht, ich habe eine hohe Rechnung erhalten.</h3>
    <h3 id = "addition"> Rechnung: {5+987} </h3>
    <button onClick= {handleClick} style= {{background: "orange", color: "white", padding: "25px", border: "none"}} > Click here!</button>

  
    </>
  );
}

export default App;
