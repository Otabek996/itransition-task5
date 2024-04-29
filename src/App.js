import React from "react";

import "./App.css";

import Table from "./components/Table";
import DropdownMenu from "./components/DropdownMenu";
import ErrorsSlider from "./components/ErrorsSlider";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <div>
            <p>Region: </p>
            <div>
              <DropdownMenu />
            </div>
          </div>

          <div>
            <p>Errors: </p>
            <ErrorsSlider />
          </div>

          <div></div>

          <div></div>
        </header>

        <main>
          <Table />
        </main>
      </div>
    </div>
  );
}

export default App;
