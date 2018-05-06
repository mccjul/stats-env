import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
var DoughnutChart = require("react-chartjs").Doughnut;

class App extends Component {
  state = { categories: [], locations: [] };
  async componentDidMount() {
    let res = await fetch("http://ac506176.ngrok.io/stats");
    let json_res = await res.json();
    console.log(json_res);
    this.setState({ categories: [], locations: [], table: json_res });
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Env - Stats</h1>
        </header>
        <h1>Categories of Recycling</h1>
        <DoughnutChart
          data={[
            {
              value: 300,
              color: "#F7464A",
              highlight: "#FF5A5E",
              label: "Red"
            },
            {
              value: 50,
              color: "#46BFBD",
              highlight: "#5AD3D1",
              label: "Green"
            },
            {
              value: 100,
              color: "#FDB45C",
              highlight: "#FFC870",
              label: "Yellow"
            }
          ]}
          options={{}}
          width="600"
          height="250"
        />
        <h1>Postal Locations</h1>
        <DoughnutChart
          data={[
            {
              value: 300,
              color: "#F7464A",
              highlight: "#FF5A5E",
              label: "Red"
            },
            {
              value: 50,
              color: "#46BFBD",
              highlight: "#5AD3D1",
              label: "Green"
            },
            {
              value: 100,
              color: "#FDB45C",
              highlight: "#FFC870",
              label: "Yellow"
            }
          ]}
          options={{
            title: {
              display: true,
              text: "Custom Chart Title"
            }
          }}
          width="600"
          height="250"
        />
      </div>
    );
  }
}

export default App;
