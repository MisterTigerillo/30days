import { Component } from "react";

import { ContentItem } from "./ContentItem/ContentItem";

import style from "./Content.module.css";

export class Content extends Component {
  render() {
    const { activities } = this.props;

    return (
      <div className={style.content}>
        <div className={style.line}></div>
        <ContentItem activities={activities} />
      </div>
    );
  }
}
