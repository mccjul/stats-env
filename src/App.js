import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import ReactTable from "react-table";
import "react-table/react-table.css";
var DoughnutChart = require("react-chartjs").Doughnut;

const catReduce = arr => {
  const obj = arr.map(elm => elm.category).reduce((obj, v) => {
    obj[v] = (obj[v] || 0) + 1;
    return obj;
  }, {});
  let thing = [];
  for (const [key, value] of Object.entries(obj)) {
    thing.push({ value: value, label: key });
  }
  return thing;
};

const locReduce = arr => {
  const obj = arr.map(elm => elm.location).reduce((obj, v) => {
    obj[v] = (obj[v] || 0) + 1;
    return obj;
  }, {});
  let thing = [];
  for (const [key, value] of Object.entries(obj)) {
    thing.push({ value: value, label: key });
  }
  return thing;
};

const columns = [
  {
    Header: "Category",
    accessor: "category"
  },
  {
    Header: "Location",
    accessor: "location"
  }
];

class App extends Component {
  state = { categories: [], locations: [], table: [] };
  async componentDidMount() {
    let res = await fetch("http://fa1ffea6.ngrok.io/stats");
    let json_res = await res.json();

    this.setState({
      categories: catReduce(json_res),
      locations: locReduce(json_res),
      table: json_res
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Env - Stats</h1>
        </header>
        <div style={{ display: "flex" }}>
          <div>
            <h1>Categories of Recycling</h1>
            <DoughnutChart
              data={this.state.categories}
              options={{
                title: {
                  display: true,
                  text: "Predicted world population (millions) in 2050"
                }
              }}
              width="600"
              height="250"
            />
          </div>
          <div>
            <h1>Postal Locations</h1>
            <DoughnutChart
              data={this.state.locations}
              options={{}}
              width="600"
              height="250"
            />
          </div>
        </div>
        <br />
        <br />
        <ReactTable
          data={this.state.table}
          columns={columns}
          showPagination={false}
        />
      </div>
    );
  }
}

export default App;
