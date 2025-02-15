import React, { Component } from "react";
import { ReactComponent as SVGEMAIL } from "../svg/gmail.svg";
import { ReactComponent as SVGYELP } from "../svg/yelp.svg";
import { ReactComponent as SVGINSTAGRAM } from "../svg/instagram.svg";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yelp_url:
        "https://www.yelp.com/biz/cindy-leung-piano-studio-hacienda-heights",
      instagram_url: "https://www.instagram.com/cindyteachespiano/",
      email: "cindyleungpiano@gmail.com"
    };
  }
  toPage(name) {
    if (name == "yelp") {
      window.open(this.state.yelp_url, "_blank");
    } else if (name == "instagram") {
      window.open(this.state.instagram_url, "_blank");
    } else if (name == "email") {
      window.location.href = "mailto:" + this.state.email;
    }
  }
  render() {
    return (
      <div style={{ minHeight: "400px", background: "#fafafa" }}>
        <div
          style={{
            width: "65%",
            paddingTop: "50px",
            margin: "0 auto 30px auto",
            fontSize: "50px",
            fontStyle: "italic"
          }}
          className="text-center"
        >
          Let's stay connected!
        </div>
        <div
          className="row"
          style={{
            width: "56%",
            margin: "0 auto",
            fontFamily: "Courgette, cursive"
          }}
        >
          <div className="col-lg-4 col-12" style={{ height: "200px" }}>
            <div
              style={{
                width: "100%",
                margin: "0 auto",
                height: "100%",
                cursor: "pointer"
              }}
            >
              <SVGEMAIL
                style={{
                  width: "70px",
                  height: "70px",
                  marginTop: "50px"
                }}
                onClick={() => this.toPage("email")}
              />
              <div
                style={{ height: "60px", fontSize: "15px", marginTop: "20px",textAlign: 'center' }}
                className="text-center"
              >
                {this.state.email}
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-12" style={{ height: "200px" }}>
            <div
              style={{
                width: "80%",
                margin: "0 auto",
                height: "100%",
                cursor: "pointer"
              }}
            >
              <SVGINSTAGRAM
                style={{ width: "70px", height: "70px", marginTop: "50px" }}
                onClick={() => this.toPage("instagram")}
              />
              <div
                style={{ height: "60px", fontSize: "15px", marginTop: "20px",textAlign: 'center' }}
              >
                @cindyteachespiano
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12" style={{ height: "200px" }}>
            <div style={{ width: "80%", margin: "0 auto", height: "100%" }}>
              <SVGYELP
                style={{
                  width: "70px",
                  height: "70px",
                  marginTop: "50px",
                  cursor: "pointer"
                }}
                onClick={() => this.toPage("yelp")}
              />
              <div
                style={{
                  marginTop: "20px",
                  height: "60px",
                  fontSize: "15px",
                  textAlign: 'center'
                }}
              >
                Cindy Leung Piano Studio
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
