import React from 'react';
import './App.css';

import Navigation from "./components/Navigation";
import Main from "./components/Main";


function App() {
  return (
      <div className="container-fluid">
        <header>
          <Navigation/>
          <h1 className="text-center py-3">Luke Skywalker</h1>
        </header>

        <Main/>

        <footer className="row align-items-center no-gutters">
          <div className="btn btn-danger col-2 offset-2 text-center">
            Send me an <span className="email">email</span>
          </div>
        </footer>

      </div>
  );
}

export default App;
