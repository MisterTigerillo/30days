import styles from "./Header.module.css";
import { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.menuIcon}>
          <div className={styles.dashTop}></div>
          <div className={styles.dashBottom}></div>
          <div className={styles.circle}></div>
        </div>
        <span className={styles.title}>Timeline</span>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search ..."
        />
        <div className={styles.searchIcon}></div>
      </div>
    );
  }
}
