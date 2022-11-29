import { Component } from "react";
import style from "./Header.module.css";
import '../../App.css'

export class Header extends Component {
  render() {
    return (
      <div className='{style.header}'>
        <div className={style.menuIcon}>
          <div className={style.dashTop}></div>
          <div className={style.dashBottom}></div>
          <div className={style.circle}></div>
        </div>
        <span className={style.title}>Timeline</span>
        <input
          type="text"
          className={style.searchInput}
          placeholder="Search ..."
        />
        <div className={style.searchIcon}></div>
      </div>
    );
  }
}
