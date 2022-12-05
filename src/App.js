import { Component } from "react";
import { Header } from "./components/Header/Header";
import { Content } from "./components/Content/Content";
import { Clock } from "./components/Clock/Clock";

import "./App.css";

import activities from "./json/activities.json";

class App extends Component {
  render() {
    return (
      <div className="notificationsFrame">
        <div className="panel">
          {" "}
          <Header />
          <Content activities={activities} />
          <Clock />
        </div>
      </div>
    );
  }
}

export default App;
