import logo from './logo.svg';
import './App.css';
import MyButton from './components/myButton';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          JuniArta Kone.
        </p>
      <MyButton/>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
