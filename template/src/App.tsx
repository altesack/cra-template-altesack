import './App.css';

function App(): JSX.Element {
  return (
      <div className="App">
        <header className="App-header">
          <p>
            Application header
          </p>
          <a href="page1"> Page One </a>
          <a href="page2"> Page Two </a>

          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}

export default App;
