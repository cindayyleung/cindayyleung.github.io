import React, { Component } from "react";
import { ReactComponent as SVGMUSIC } from "../svg/music.svg";
import { ReactComponent as SVGPIANO } from "../svg/piano.svg";

export default class Lessons extends Component {
  render() {
    return (
      <div
        className="container-fluid"
        id="lessons"
        style={{
          background: "#F1EDDF",
          paddingTop: "80px",
          width: "100%",
          fontFamily: "Libre Baskerville, serif"
        }}
      >
        <div
          style={{
            height: "150px",
            width: "50%",
            margin: "0 auto",
            fontSize: "40px",
            fontWeight: "700"
          }}
        >
          Private Lessons
        </div>
        <div
          className="row"
          style={{ width: "80%", margin: "0 auto", paddingBottom: "130px" }}
        >
          <div className="col-lg-4 col-md-12 col-sm-12">
            <SVGMUSIC style={{ width: "100px", height: "100px" }} />
            <div
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                fontSize: "30px"
              }}
            >
              30 Mins
            </div>
            <div
              style={{
                fontSize: "18px",
                width: "90%",
                margin: "0 auto",
                letterSpacing: "0.02em"
              }}
            >
              30 minute lessons are recommended for beginners and returning
              musicians that want to get back into music. In this half hour,
              students will learn note-reading, basic technique, as well as
              theory.
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 mt-sm-5 mt-lg-0">
            <SVGPIANO style={{ width: "100px", height: "100px" }} />
            <div
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                fontSize: "30px"
              }}
            >
              45 Mins
            </div>
            <div
              style={{
                fontSize: "18px",
                width: "90%",
                margin: "0 auto",
                letterSpacing: "0.02em"
              }}
            >
              45 minute lessons are recommended for intermediate and older
              students. At this level, students will encounter more challenging
              material, which will require much more attention to detail.
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 mt-sm-5 mt-lg-0">
            <SVGMUSIC style={{ width: "100px", height: "100px" }} />
            <div
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                fontSize: "30px"
              }}
            >
              60 Mins{" "}
            </div>
            <div
              style={{
                fontSize: "18px",
                width: "90%",
                margin: "0 auto",
                letterSpacing: "0.02em"
              }}
            >
              An hour lesson is recommended for advanced students or anyone
              preparing for an examination. During this time, students will gain
              a deeper understanding of the material through discussions of
              musical, technical, and theoretical aspects of the music.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
