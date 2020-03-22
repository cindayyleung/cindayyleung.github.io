import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    // let email = this.props.data.email;
    // let networks = this.props.data.social.map(function(social) {
    //   return (
    //     <li key={social.name}>
    //       <a href={social.url}>
    //         <i className={social.className} />
    //       </a>
    //     </li>
    //   );
    // });
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
        {/* <div className="social">{networks}</div>
        <h3>{email}</h3> */}
      </footer>
    );
  }
}
