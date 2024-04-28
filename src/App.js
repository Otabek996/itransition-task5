import React from "react";
import "./App.css";
import Table from "./components/table";

// import { Button, DatePicker } from 'antd';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header></header>

        <main>
          <Table />
        </main>
      </div>
    </div>
  );
}

export default App;
