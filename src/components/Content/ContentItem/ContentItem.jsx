import { Component } from "react";

import style from "./ContentItem.module.css";

export class ContentItem extends Component {
  render() {
    const { activity } = this.props;
    console.log(new Date().getTime());
    return (
      <div className={style.item}>
        <div className={style.avatar}>
          <img alt={activity.text} src={activity.user.avatar} />
        </div>
        <span className={style.time}>{activity.timestamp}</span>
        <p>{activity.text}</p>
        <div className={style.commentCount}>{activity.comments.length}</div>
      </div>
    );

    //
    //
  }
}
