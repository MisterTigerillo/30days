import { Component } from "react";
import style from "./Content.module.css";

export class Content extends Component {
  render() {
    return (
      <div className={style.content}>
        <div className={style.line}></div>
        <div className={style.item}>
          <div className={style.avatar}>
            <img
              alt="doug"
              src="http://www.croop.cl/UI/twitter/images/doug.jpg"
            />
          </div>
          <span className={style.time}>An hour ago</span>
          <p>Ate lunch</p>
        </div>
        {/* <div className={style.item}>
          <div className={style.avatar}>
            <img
              alt="doug"
              src="http://www.croop.cl/UI/twitter/images/doug.jpg"
            />
          </div>
          <span className={style.time}>10 am</span>
          <p>Read Day two article</p>
        </div>
        <div className={style.item}>
          <div className={style.avatar}>
            <img
              alt="doug"
              src="http://www.croop.cl/UI/twitter/images/doug.jpg"
            />
          </div>
          <span className={style.time}>10 am</span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className={style.item}>
          <div className={style.avatar}>
            <img
              alt="doug"
              src="http://www.croop.cl/UI/twitter/images/doug.jpg"
            />
          </div>
          <span className={style.time}>2:21 pm</span>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div> */}
      </div>
    );
  }
}
