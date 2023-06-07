import React from "react";
import "./Main.Style.css";
import EmojiList from "../Counter/index";

class Main extends React.Component {
  librarylist = (list) => {
    return list.map((product) => {
      return (
        <div key={product.id}>
          <li className="left-sidebar">{product.library} </li>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="main-page">
        <div className="left-column">
          <h2>I'm learning React</h2>
          {this.librarylist(this.props.frame)}
          <img
            className=" img-responsive"
            src="https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg"
            aria-hidden
            alt="Left Image"
          />
        </div>
        <div className="right-column">
          <h2>I'm learning React</h2>
          <EmojiList />
          <img
            className="img-responsive right-img"
            src="https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg"
            aria-hidden
            alt="Right Image"
          />
        </div>
      </div>
    );
  }
}

export default Main;
