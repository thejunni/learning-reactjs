import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
// import MyButton from './components/myButton';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  const [navbar, SetNavbar] = useState("");
  const navText = "Juniarta";
  const navHead = "Latihan React Js";

  const clicked = () => {
    SetNavbar("Contact ?");
  }

  const letters = () => {
    return (
      <div>
       <i>Ini Footer dari Pembelajaran React Js</i>
       <marquee><i>Ini Marquee untuk pembelajaran react js juga</i></marquee>
      </div>
      )
  }
  return (
    <div className="App">
      <header className="App-header">
        <NavBar textNav={navText} navHead={navHead} navChange={navbar}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          JuniArta Kone.
        </p>
      {/* <MyButton clicked = {clicked}/> */}
      <p>{navbar}</p>
      <button onClick={() => clicked()}>Ini Tombol</button>
      </header>
      <Footer letters={letters}/>
    </div>
  );
}

export default App;
