import { Component } from "react";
import { Header } from "./components/Header/Header";
import { Content } from "./components/Content/Content";
// import style from "./components/Header/Header.module.css";
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
        </div>
      </div>
    );
  }
}

export default App;
