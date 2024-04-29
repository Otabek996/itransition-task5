import React from "react";

import { Col, Row } from "antd";

import "./App.css";

import Table from "./components/Table";
import DropdownMenu from "./components/DropdownMenu";
import ErrorsSlider from "./components/ErrorsSlider";
import SeedInput from "./components/SeedInput";
import ButtonExport from "./components/ButtonExport";

function App() {
  return (
    <div className="App">
      <Row>
        <Col span={20} offset={2}>
          <div className="container">
            <header className="header">
              <div className="box">
                <p>Region: </p>
                <div>
                  <DropdownMenu />
                </div>
              </div>

              <div className="box">
                <p>Errors: </p>
                <ErrorsSlider />
              </div>

              <div className="box">
                <p>Seed: </p>
                <SeedInput />
              </div>

              <div className="box">
                <ButtonExport />
              </div>
            </header>

            <main>
              <Table />
            </main>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
