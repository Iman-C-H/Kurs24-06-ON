import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import Div from "./components/layout/div/Div";
import CustomTextField from "./components/layout/textfield/Textfield";


function App() {
  return (
    <>
    <div className="main-container">
      <div><Navbar /> </div>
      <div><Div></Div></div>
      <div><Footer/></div>
      <div></div>
    </div>
    </>
  );
}

export default App;
