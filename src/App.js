import React from "react";
import "./App.css";
import Table from "./components/table";
// import DropdownMenu from "./components/dropdownMenu";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <div>
            <p>Region: </p>
            <div>
              {/* <DropdownMenu /> */}
            </div>
          </div>
          <div></div>
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
