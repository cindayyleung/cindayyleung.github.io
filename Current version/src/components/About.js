import React, { Component } from "react";

export class About extends Component {
  render() {
    let bio1 = this.props.data.bio1;
    let bio2 = this.props.data.bio2;
    let bio3 = this.props.data.bio3;
    let bio4 = this.props.data.bio4;
    let profile = this.props.data.profile;
    return (
      <section id="about">
        <div className="row">
          <div className="col-md-4 mb-5 mb-md-0">
            <img className="profile-pic" src={profile} alt="Profile Pic" />
          </div>
          <div className="col-md-8">
            <div className="row">
              <h2>MS. CINDY</h2>
              <p>{bio1}</p>
              <p>{bio2}</p>
              <p>{bio3}</p>
              <p>{bio4}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
