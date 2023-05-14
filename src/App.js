import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Forecast</h1>
      </header>
      <body className="App-body">
        <Search />
      </body>
      <footer className="App-footer">
        <p>
          <a
            href="https://github.com/kmlaird/weather-react.git"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/kimlaird/"
            target="_blank"
          >
            Kim Laird
          </a>
          .
        </p>
      </footer>
    </div>
  );
}

export default App;
