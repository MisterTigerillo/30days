import { Component } from "react";

import { ContentItem } from "./ContentItem/ContentItem";

import style from "./Content.module.css";

export class Content extends Component {
  render() {
    const { activities } = this.props;

    return (
      <div className={style.content}>
        <div className={style.line}></div>
        {activities.map(activity => (
          <ContentItem key={activity.user.id} activity={activity} />
        ))}
      </div>
    );
  }
}
