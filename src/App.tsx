import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold underline text-green-400">
        Ameley + React
      </h1>
      <h1 className="text-pink-500">Tester Text</h1>
      <h1 className="text-orange-500">Testing for Yemi</h1>
      <p className="text-green-400">hello hi</p>
      <p className="text-blue-400">hello hi</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 2)}>
          count is now {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
