import React from 'react';
import './segmentStyles.scss';

class Courses extends React.Component {
  render() {
    return (
      <div className="container">
        <p className="title">Courses</p>
        <p className="subTitle">All dictated by Udemy. Click to see awards. </p>
        <a
          className="link"
          href="https://www.udemy.com/certificate/UC-HP487DY0/"
        >
          <p className="description">
            <span style={{color: '#27ade3'}}>• </span>Angular 6 (Angular 2+) & React 16 - The Complete App Guide.
          </p>
        </a>
        <a
          className="link"
          href="https://www.udemy.com/certificate/UC-85YX4IGW"
        >
          <p className="description">
            <span style={{color: '#27ade3'}}>• </span> The Coding Interview: Algorithm & Data Structs.
          </p>
        </a>
        <a
          className="link"
          href="https://www.udemy.com/certificate/UC-FWPFN4R8/"
        >
          <p className="description">
            <span style={{color: '#27ade3'}}>• </span> Motivation & Processes for Game & App Dev.
          </p>
        </a>
        <a
          className="link"
          href="https://www.udemy.com/certificate/UC-H7X5IBT1/"
        >
          <p className="description"><span style={{color: '#27ade3'}}>• </span> Game Programming with Phaser.</p>
        </a>
        <a
          className="link"
          href="https://www.udemy.com/certificate/UC-T3O60QBW/"
        >
          <p className="description">
            <span style={{color: '#27ade3'}}>• </span> Master in Game Programming with Unity3D
          </p>
        </a>
        <a
          className="link"
          href="https://www.udemy.com/certificate/UC-PULGHD62/"
        >
          <p className="description">
            <span style={{color: '#27ade3'}}>• </span> The Board Game Developer - Become A Game Design Ninja.
          </p>
        </a>
        <a
          className="link"
          href="https://www.udemy.com/certificate/UC-LEFF5WKT/"
        >
          <p className="description">
            <span style={{color: '#27ade3'}}>• </span> How to get a job in the video game industry.
          </p>
        </a>
        <a
          className="link"
          href="https://www.udemy.com/certificate/UC-CE7AJEVU/"
        >
          <p className="description">
            <span style={{color: '#27ade3'}}>• </span> RPG Core Combat Creator - Unity3D 2017.
          </p>
        </a>
      </div>
    );
  }
}
export default Courses;
