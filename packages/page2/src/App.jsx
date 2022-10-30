import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import _ from "lodash";

function App() {
  const [count, setCount] = useState(_.random(100, 200));
  fetch("http://localhost:8080")
    .then((res) => res.text())
    // 开发时页面加载会alert两次，生产只有一次
    .then((res) => alert(res));

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
