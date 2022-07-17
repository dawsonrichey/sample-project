import React from "react";
import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-content">
          <img src={logo} className="App-logo" alt="logo" />
          <p>This is my first app on Stormkit.</p>
          <div className="App-links">
            <a
              className="App-link"
              href="https://www.stormkit.io/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the docs
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/dawsonrichey/sample-project"
              target="_blank"
              rel="noopener noreferrer"
              className="App-link"
            >
              Fork the repo
            </a>{" "}
          </div>
        </div>
        <div className="App-social">
          <a
            href="#"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fas fa-codpen" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fas fa-database" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
