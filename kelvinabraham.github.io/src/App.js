import logo from "./kelvinabraham.jpeg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My Kelvin Abraham and I'm going to master React!</p>
        <a
          className="App-link"
          href="https://github.com/kelvinabraham"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Me Out!
        </a>
      </header>
    </div>
  );
}

export default App;
