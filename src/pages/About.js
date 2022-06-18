import React, { Component } from 'react';
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";


export default class About extends Component {
  render() {
    return (
      <div>
      <div class="split left">
        <div className="centered">
          <img 
            className="profile_image"
            src={profile_pic}
            alt="Profile Pic"
            ></img>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title">Gabriel Orozco</div>
          <div className="brief_description">
            <p>I am a rising Sophomore at Vanderbilt University studying Computer Science! Here's a little bit more about me:</p>
            <ul>
              <p>
                I am on Vanderbilt's Varsity Table Tennis Team
              </p>
              <p>
                I also have interests in Business, Psychology, and Exercise Science
              </p>
            </ul>
          </div>
        </div>
      </div>
    </div>
    )
  }
}