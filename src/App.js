import React, { useState } from "react";
import "antd/dist/antd.css";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  const [page, setPage] = useState(0);

  return (
    <div className="App">
      <Home page={page} setPage={setPage} />
      <About page={page} setPage={setPage} />
      <Skills page={page} setPage={setPage} />
      <Projects page={page} setPage={setPage} />
    </div>
  );
}

export default App;
