import React, { Component } from "react";

export class About extends Component {
  render() {
    let bio1 = this.props.data.bio1;
    // let bio2 = this.props.data.bio2;
    // let bio3 = this.props.data.bio3;
    let bio4 = this.props.data.bio4;
    let bio5 = this.props.data.bio5;
    let profile1 = this.props.data.profile1;
    let profile2 = this.props.data.profile2;

    // has html, moving it here
    const bio2 = "Mrs. Cindy continued her education at California State University, Northridge where she pursed a secondary degree in Music Therapy, studying under Ron Borczon, MT-BC and Helen Dolas, MT-BC. During her time at CSUN, Mrs. Cindy provided music therapy services to adults with developmental disabilities, children in a school setting, geriatrics population, as well as patients in an outpatient hospital setting. She completed her clinical internship at Metropolitan State Hospital, where she developed innovative and creative music therapy interventions for the forensic psychiatric population. Mrs. Cindy is now a board-certified music therapist working at Metro’s sister hospital Patton State Hospital, where she continues to use music as a therapeutic tool to meet the needs of her patients and ultimately improving their quality of life. She recently developed an a capella group at the hospital called “Patton-tonix” (inspired by <i>Pentatonix</i>), consisting of her music therapist colleagues. Her ultimate vision of this group is to adapt “Patton-tonix” into daily patient treatment care, providing treatment for the patients in a fun and creative way.";
    const bio3 = "Mrs. Cindy is also an experienced musician with a demonstrated history of working in the religious institutions industry. As the age of 6, she was part of the Chinatown Children’s Choir at the Chinese United Methodist Church and after graduating high school would return as an alumna to volunteer as the piano accompanist and choir assistant. She also composed flute arrangements and performed them during the choir’s annual concerts. Mrs. Cindy started as a volunteer worship leader at the First United Methodist Church of San Gabriel, where she led the worship team while accompanying with either the piano, guitar, bass guitar, or drums. Mrs.Cindy is now the pianist/organist and worship leader at the Calvary Presbyterian Church, where she provides music throughout the service. Mrs. Cindy is also the co-founder and pianist of <i>Bow Tie Tunes</i>, a dynamic string trio specialized in providing live instrumental music to special occasions such as weddings, celebrations of life, and more.";

    return (
      <section id="about">
        <div className="row">
          <div className="col-12 col-lg-4 mb-5 mb-lg-0">
            <img className="profile-pic1 mb-lg-4" src={profile1} alt="Profile Pic1" />
            <img className="profile-pic2 mt-4 mt-md-0 mt-lg-2 ml-md-3 ml-lg-0" src={profile2} alt="Profile Pic2" />
          </div>
          <div className="col-12 col-lg-8">
            <div className="row">
              <h2>MRS. CINDY</h2>
              <p>{bio1}</p>
              <p dangerouslySetInnerHTML={{__html: bio2}}></p>
              <p dangerouslySetInnerHTML={{__html: bio3}}></p>
              <p>{bio4}</p>
              <p>{bio5}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
