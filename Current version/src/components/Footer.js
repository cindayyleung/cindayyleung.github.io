import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer
        id="contact"
        style={{
          height: "100%",
          background: "black",
          margin: "0",
          padding: "0"
        }}
      >
        <div style={{ color: "white", fontSize: "10px" }}>
          Icons made by Pixel perfect from{" "}
          <a href="www.flaticon.com">www.flaticon.com</a>
        </div>
      </footer>
    );
  }
}
