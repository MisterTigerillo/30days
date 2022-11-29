import { Component } from "react";
import { Header } from "./components/Header/Header";
import { Content } from "./components/Content/Content";
import style from "./components/Header/Header.module.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="notificationsFrame">
        <div className="panel">
          <Header style={style} />
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
